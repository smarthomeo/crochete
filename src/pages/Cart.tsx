import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import CartItem from '@/components/CartItem';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ArrowLeft, ShoppingCart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useAnalytics } from '@/contexts/AnalyticsContext';
import { usePostHog } from '@/contexts/PostHogContext';

const Cart = () => {
  const { items, itemCount, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const { trackEvent, trackPurchase } = useAnalytics();
  const { captureEvent, capturePurchase } = usePostHog();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Add some items to your cart before checkout",
        variant: "destructive"
      });
      return;
    }
    
    // Track checkout initiation with Google Analytics
    trackEvent('ecommerce', 'begin_checkout', 'checkout_button', totalPrice);
    
    // Track checkout initiation with PostHog
    captureEvent('begin_checkout', {
      value: totalPrice,
      currency: 'USD',
      items: items.map(item => ({
        product_id: item.id,
        product_name: item.name,
        price: item.price,
        quantity: item.quantity || 1
      }))
    });
    
    toast({
      title: "Checkout initiated",
      description: "This is a demo. In a real app, you would be redirected to payment.",
    });
  };

  const handleCompletePurchase = (orderId: string) => {
    // Track completed purchase with Google Analytics
    trackPurchase(
      orderId, 
      totalPrice,
      items.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      }))
    );
    
    // Track completed purchase with PostHog
    capturePurchase(
      orderId,
      totalPrice,
      items.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity || 1
      }))
    );
    
    // Clear cart and show success message
    clearCart();
    toast({
      title: "Purchase completed",
      description: "Thank you for your purchase!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow mt-16 sm:mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-medium text-espresso flex items-center justify-center">
              <ShoppingCart className="h-8 w-8 mr-2" />
              Your Shopping Cart
            </h1>
            <p className="text-taupe mt-2">{itemCount === 0 ? 'Your cart is empty' : `${itemCount} item${itemCount !== 1 ? 's' : ''} in your cart`}</p>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="mx-auto w-24 h-24 text-taupe mb-6">
                <ShoppingBag className="h-full w-full" />
              </div>
              <h2 className="text-xl font-medium text-espresso mb-4">Your cart is empty</h2>
              <p className="text-taupe mb-8">Looks like you haven't added any items to your cart yet.</p>
              <Link to="/products">
                <Button className="bg-espresso hover:bg-clay">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Continue Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg card-shadow p-6">
              <div className="flow-root">
                <ul className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <li key={item.id} className="py-2">
                      <CartItem item={item} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 py-6">
                <div className="flex justify-between text-base font-medium text-espresso">
                  <p>Subtotal</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <p className="mt-0.5 text-sm text-taupe">Shipping and taxes calculated at checkout.</p>
                
                <div className="mt-6 space-y-3">
                  <Button 
                    onClick={handleCheckout}
                    className="w-full bg-espresso hover:bg-clay"
                  >
                    Proceed to Checkout
                  </Button>
                  
                  <div className="flex justify-between">
                    <Link to="/products">
                      <Button variant="outline" className="text-espresso">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Continue Shopping
                      </Button>
                    </Link>
                    
                    <Button 
                      variant="ghost" 
                      className="text-clay hover:text-espresso button-transition"
                      onClick={clearCart}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
