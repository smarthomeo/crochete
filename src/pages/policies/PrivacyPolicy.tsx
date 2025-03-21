import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Information Collection",
      content: "We collect information that you provide directly to us, including your name, email address, shipping address, and payment information when you make a purchase. We also automatically collect certain information about your device when you use our website."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      content: "We implement appropriate technical and organizational security measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Information Usage",
      content: "We use your information to process your orders, send you marketing communications (if you've opted in), improve our services, and comply with legal obligations. We never sell your personal information to third parties."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal information. You can also object to processing and request data portability. Contact us to exercise these rights."
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
            Privacy Policy
          </h1>
          <p className="text-taupe">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </motion.div>

        <motion.div {...fadeIn} className="prose prose-brown mx-auto mb-12">
          <p className="text-taupe leading-relaxed">
            At YarnElegance, we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect your personal information when you use our website and services.
          </p>
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              variants={fadeIn}
              className="bg-white rounded-lg p-6 shadow-sm border border-sand"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-cream rounded-full text-espresso">
                  {section.icon}
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-medium text-espresso mb-3">
                    {section.title}
                  </h2>
                  <p className="text-taupe leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeIn} className="mt-16 text-center">
          <p className="text-taupe">
            If you have any questions about our Privacy Policy, please{' '}
            <a href="/contact" className="text-clay hover:text-espresso transition-colors duration-300">
              contact us
            </a>
            .
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy; 