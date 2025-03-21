import React from 'react';
import { motion } from 'framer-motion';
import { Truck, RotateCcw, Clock, Package } from 'lucide-react';

const ShippingReturns = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const shippingInfo = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Shipping Methods",
      content: "We offer standard shipping (5-7 business days) and express shipping (2-3 business days) options. International shipping is available to select countries. All orders are processed within 1-2 business days."
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Shipping Costs",
      content: "Standard shipping is free for orders over $75. For orders under $75, standard shipping costs $5.99. Express shipping is available for an additional $12.99. International shipping rates vary by location."
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Returns Policy",
      content: "We accept returns within 30 days of delivery. Items must be unused, unworn, and in their original packaging. Custom orders are non-returnable unless damaged or defective."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Return Process",
      content: "To initiate a return, contact our customer service team. Once approved, you'll receive a return shipping label. Refunds will be processed within 5-7 business days after we receive the returned item."
    }
  ];

  return (
    <div className="min-h-screen bg-cream py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.div {...fadeIn} className="text-center mb-16">
          <h1 className="text-4xl font-serif font-medium text-espresso mb-4">
            Shipping & Returns
          </h1>
          <p className="text-taupe">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </motion.div>

        <motion.div {...fadeIn} className="prose prose-brown mx-auto mb-12">
          <p className="text-taupe leading-relaxed">
            At YarnElegance, we want you to be completely satisfied with your purchase. Below you'll find information about our shipping methods and returns process.
          </p>
        </motion.div>

        <div className="space-y-12">
          {shippingInfo.map((info, index) => (
            <motion.div
              key={info.title}
              variants={fadeIn}
              className="bg-white rounded-lg p-6 shadow-sm border border-sand"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-cream rounded-full text-espresso">
                  {info.icon}
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-medium text-espresso mb-3">
                    {info.title}
                  </h2>
                  <p className="text-taupe leading-relaxed">
                    {info.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeIn} className="mt-16 bg-white rounded-lg p-6 border border-sand">
          <h2 className="text-xl font-medium text-espresso mb-4 text-center">
            Need Help?
          </h2>
          <p className="text-taupe text-center">
            If you have any questions about shipping or returns, please don't hesitate to{' '}
            <a href="/contact" className="text-clay hover:text-espresso transition-colors duration-300">
              contact us
            </a>
            . Our customer service team is here to help!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ShippingReturns; 