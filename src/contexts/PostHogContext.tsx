import React, { createContext, useContext, useEffect, useState } from 'react';
import posthog from 'posthog-js';
import { useLocation } from 'react-router-dom';

// Get configuration from environment variables
const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY;
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST;

// Define the context type
interface PostHogContextType {
  captureEvent: (eventName: string, properties?: Record<string, any>) => void;
  captureAddToCart: (item: any) => void;
  capturePurchase: (orderId: string, value: number, items: any[]) => void;
  identify: (userId: string, properties?: Record<string, any>) => void;
}

// Create the context
const PostHogContext = createContext<PostHogContextType | undefined>(undefined);

// Provider component
export const PostHogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize PostHog
  useEffect(() => {
    if (!isInitialized && POSTHOG_KEY) {
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST || 'https://app.posthog.com',
        capture_pageview: false, // We'll handle pageviews manually
        autocapture: true, // Automatically capture clicks, form submissions, etc.
        loaded: (posthog) => {
          if (process.env.NODE_ENV === 'development') {
            // Opt out of tracking in development
            posthog.opt_out_capturing();
          }
        }
      });
      setIsInitialized(true);
    }
  }, [isInitialized]);

  // Track page views
  useEffect(() => {
    if (isInitialized) {
      posthog.capture('$pageview', {
        path: location.pathname,
        url: window.location.href,
        search: location.search
      });
    }
  }, [location, isInitialized]);

  // Capture custom events
  const captureEvent = (eventName: string, properties?: Record<string, any>) => {
    if (isInitialized) {
      posthog.capture(eventName, properties);
    }
  };

  // Capture add to cart events
  const captureAddToCart = (item: any) => {
    if (isInitialized) {
      posthog.capture('add_to_cart', {
        product_id: item.id,
        product_name: item.name,
        price: item.price,
        quantity: item.quantity || 1,
        currency: 'USD'
      });
    }
  };

  // Capture purchase events
  const capturePurchase = (orderId: string, value: number, items: any[]) => {
    if (isInitialized) {
      posthog.capture('purchase', {
        order_id: orderId,
        value,
        currency: 'USD',
        items: items.map(item => ({
          product_id: item.id,
          product_name: item.name,
          price: item.price,
          quantity: item.quantity || 1
        }))
      });
    }
  };

  // Identify users
  const identify = (userId: string, properties?: Record<string, any>) => {
    if (isInitialized) {
      posthog.identify(userId, properties);
    }
  };

  return (
    <PostHogContext.Provider value={{ captureEvent, captureAddToCart, capturePurchase, identify }}>
      {children}
    </PostHogContext.Provider>
  );
};

// Hook for using PostHog analytics
export const usePostHog = () => {
  const context = useContext(PostHogContext);
  if (context === undefined) {
    throw new Error('usePostHog must be used within a PostHogProvider');
  }
  return context;
}; 