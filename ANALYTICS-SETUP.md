# Setting Up Google Analytics for Your Website

This guide explains how to set up Google Analytics 4 (GA4) for your e-commerce website.

## Step 1: Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/) and sign in with your Google account.
2. Click "Start measuring" to begin the setup process.
3. Enter an account name (e.g., "YarnElegance").
4. Configure your account settings and click "Next".

## Step 2: Create a Property

1. Enter a property name (e.g., "YarnElegance Website").
2. Select your reporting time zone and currency.
3. Click "Next" to proceed.

## Step 3: Set up a Data Stream

1. Choose "Web" as your platform.
2. Enter your website URL (e.g., "https://yarnelegance.com").
3. Give your stream a name (e.g., "YarnElegance Web Stream").
4. Click "Create stream".

## Step 4: Get Your Tracking ID

1. After creating your stream, you'll see a Measurement ID (starting with "G-").
2. Copy this ID - this is your tracking ID.

## Step 5: Configure Your Website

1. Create or update your `.env` file in the root of your project.
2. Add the following line, replacing XXXXXXXXXX with your actual tracking ID:
   ```
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   ```
3. Restart your development server for the changes to take effect.

## Verify Installation

1. Launch your website.
2. Open Google Analytics.
3. Navigate to Admin > Property > Data Streams > Web.
4. Click on your stream name.
5. Click "DebugView" in the left sidebar.
6. Perform some actions on your website (e.g., visit different pages, add items to cart).
7. You should see these events appear in the DebugView.

## Features Implemented

The analytics implementation includes:

- Automatic page view tracking
- Product view tracking
- Add to cart event tracking
- Wishlist addition tracking
- Checkout process tracking
- Purchase completion tracking

## Custom Event Tracking

To track custom events in your components, use the `useAnalytics` hook:

```jsx
import { useAnalytics } from '@/contexts/AnalyticsContext';

const YourComponent = () => {
  const { trackEvent } = useAnalytics();
  
  const handleSomeAction = () => {
    trackEvent('category', 'action', 'label', value);
  };
  
  return (
    // Your component JSX
  );
};
```

## E-commerce Tracking

For e-commerce specific events, use the specialized methods:

```jsx
const { trackAddToCart, trackPurchase } = useAnalytics();

// Track adding an item to cart
trackAddToCart({
  id: 'product-id',
  name: 'Product Name',
  price: 29.99
});

// Track a completed purchase
trackPurchase(
  'order-123456', 
  59.98,
  [
    { id: 'product-1', name: 'Product 1', price: 29.99, quantity: 1 },
    { id: 'product-2', name: 'Product 2', price: 29.99, quantity: 1 }
  ]
);
``` 