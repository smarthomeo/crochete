import React, { createContext, useContext, useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

// Get the tracking ID from environment variables
const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || 'G-XXXXXXXXXX';

// Define the context type
interface AnalyticsContextType {
  trackEvent: (category: string, action: string, label?: string, value?: number) => void;
  trackPurchase: (transactionId: string, value: number, items: any[]) => void;
  trackAddToCart: (item: any) => void;
}

// Create the context
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

// Provider component
export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize GA4
  useEffect(() => {
    if (!isInitialized) {
      // Always initialize in production
      if (process.env.NODE_ENV === 'production') {
        ReactGA.initialize(TRACKING_ID);
        console.log('Analytics initialized in production mode');
        setIsInitialized(true);
      } 
      // In development, check for a specific flag or always initialize with debug mode
      else {
        ReactGA.initialize(TRACKING_ID, { 
          testMode: true
        });
        console.log('Analytics initialized in development/test mode');
        setIsInitialized(true);
      }
    }
  }, [isInitialized]);

  // Track page views
  useEffect(() => {
    if (isInitialized) {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [location, isInitialized]);

  // Track events
  const trackEvent = (category: string, action: string, label?: string, value?: number) => {
    if (isInitialized) {
      ReactGA.event({
        category,
        action,
        label,
        value
      });
    }
  };

  // Track purchases
  const trackPurchase = (transactionId: string, value: number, items: any[]) => {
    if (isInitialized) {
      // First log the purchase event
      ReactGA.event({
        category: 'ecommerce',
        action: 'purchase',
        label: transactionId,
        value
      });
      
      // Then log each item separately if needed
      items.forEach(item => {
        ReactGA.event({
          category: 'ecommerce',
          action: 'purchase_item',
          label: item.name || item.id,
          value: item.price
        });
      });
    }
  };

  // Track add to cart events
  const trackAddToCart = (item: any) => {
    if (isInitialized) {
      ReactGA.event({
        category: 'ecommerce',
        action: 'add_to_cart',
        label: item.name || item.id,
        value: item.price
      });
    }
  };

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackPurchase, trackAddToCart }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// Hook for using analytics
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
}; 