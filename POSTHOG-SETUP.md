# Setting Up PostHog Analytics for Your Website

This guide explains how to set up and use PostHog analytics for your e-commerce website, which is now implemented alongside Google Analytics.

## What is PostHog?

PostHog is an open-source product analytics platform that helps you understand how users interact with your website. Unlike Google Analytics, which focuses primarily on traffic and conversion metrics, PostHog offers:

- User behavior tracking
- Session recording capabilities
- Feature flags for A/B testing
- Heatmaps to visualize user engagement
- Integrated funnels and retention analysis

## Implementation Details

PostHog has been implemented in two ways for maximum compatibility:

1. **Direct Script Integration**: The PostHog tracking script is added directly to the `<head>` of your HTML, ensuring proper initialization and page leave event tracking.

2. **React Context Provider**: A custom context provider (`PostHogContext.tsx`) manages PostHog throughout your React application, making analytics functions available via hooks.

## Key Tracking Features Enabled

- **Page Views**: Automatically tracks when users visit pages
- **Page Leave Events**: Properly captures when users exit pages (critical for accurate bounce rate and session duration)
- **Local Storage Persistence**: User sessions are maintained consistently
- **Autocapture**: Automatically tracks clicks, form submissions, and other interactions
- **Custom Events**: Specific e-commerce events like product views and purchases

## Configuration

### Step 1: Get Your PostHog Credentials

1. Sign up for a [PostHog account](https://app.posthog.com/signup)
2. Create a new project
3. Copy your API key (it will start with `phc_`)
4. Note your instance address (typically `https://app.posthog.com` or `https://us.i.posthog.com`)

### Step 2: Configure Your Environment Variables

1. Update your `.env` file with your PostHog credentials:
   ```
   VITE_POSTHOG_KEY=your_posthog_key_here
   VITE_POSTHOG_HOST=https://us.i.posthog.com
   ```
2. Restart your development server for the changes to take effect.

## Features Implemented

The PostHog integration includes tracking for:

- Automatic page views and page leaves
- Product views
- Add to cart events
- Wishlist additions
- Color selections
- Checkout processes
- Purchase completions

## Using PostHog in Your Components

To track events in your components, use the `usePostHog` hook:

```jsx
import { usePostHog } from '@/contexts/PostHogContext';

const YourComponent = () => {
  const { captureEvent } = usePostHog();
  
  const handleAction = () => {
    captureEvent('custom_event_name', {
      property1: 'value1',
      property2: 'value2'
    });
  };
  
  return (
    // Your component JSX
  );
};
```

## E-commerce Specific Events

For e-commerce specific events, use the specialized methods:

```jsx
const { captureAddToCart, capturePurchase } = usePostHog();

// Track adding an item to cart
captureAddToCart({
  id: 'product-id',
  name: 'Product Name',
  price: 29.99
});

// Track a completed purchase
capturePurchase(
  'order-123456', 
  59.98,
  [
    { id: 'product-1', name: 'Product 1', price: 29.99, quantity: 1 },
    { id: 'product-2', name: 'Product 2', price: 29.99, quantity: 1 }
  ]
);
```

## User Identification

If you have user authentication in your app, you can associate analytics with specific users:

```jsx
const { identify } = usePostHog();

// When a user logs in
identify(userId, {
  email: user.email,
  name: user.name,
  plan: user.subscriptionPlan
});
```

## Viewing Analytics Data

1. Log in to your [PostHog dashboard](https://app.posthog.com)
2. Navigate to "Insights" to view metrics
3. Check "Session Recordings" to see how users interact with your site
4. Use "Funnels" to analyze conversion paths
5. View "User Paths" to understand navigation patterns

## Key Metrics Now Available

With the proper implementation of page leave events, you can now accurately track:

- **Bounce Rate**: The percentage of visitors who navigate away after viewing only one page
- **Session Duration**: How long users spend on your site
- **Engagement Metrics**: More accurate data on how users interact with your content

## Differences from Google Analytics

While we've implemented both analytics systems, they each have different strengths:

- **Google Analytics**: Better for traditional web metrics like traffic sources, bounce rates, and basic conversion tracking
- **PostHog**: Superior for product analytics, understanding user behavior, and enabling feature experiments

Having both systems gives you comprehensive insights into both marketing performance and product usage.

## Testing Analytics

To test that PostHog is capturing events correctly:

1. Visit your website in a browser
2. Navigate between a few pages
3. Add items to cart
4. Check the PostHog dashboard - you should see events appearing in real-time
5. Verify that both page views and page leave events are being recorded

## Disabling Analytics in Development

By default, analytics tracking is now enabled in both development and production. If you wish to disable tracking in development, you can modify the `PostHogContext.tsx` file to uncomment the `posthog.opt_out_capturing()` line in the development environment check. 