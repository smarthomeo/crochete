import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { AnalyticsProvider } from "@/contexts/AnalyticsContext";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import ChatWidget from "@/components/chat/ChatWidget";
import CustomOrders from "./pages/CustomOrders";
import OurProcess from "./pages/OurProcess";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import TermsOfService from "./pages/policies/TermsOfService";
import ShippingReturns from "./pages/policies/ShippingReturns";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AuthProvider>
          <CartProvider>
            <AnalyticsProvider>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/custom-orders" element={<CustomOrders />} />
                <Route path="/our-process" element={<OurProcess />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/shipping" element={<ShippingReturns />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              {/* Render the chat widget at the app level so it's available on all pages */}
              <ChatWidget />
            </AnalyticsProvider>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
