import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileText, ShieldCheck, AlertCircle } from 'lucide-react';

const TermsOfService = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Agreement to Terms",
      content: "By accessing and using YarnElegance, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Intellectual Property",
      content: "The content, features, and functionality of YarnElegance, including but not limited to text, graphics, logos, and images, are owned by YarnElegance and are protected by international copyright, trademark, and other intellectual property laws."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "User Responsibilities",
      content: "You are responsible for maintaining the confidentiality of your account information and for all activities under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security."
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Limitation of Liability",
      content: "YarnElegance shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. This includes loss of profits, data, or other intangible losses."
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
            Terms of Service
          </h1>
          <p className="text-taupe">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </motion.div>

        <motion.div {...fadeIn} className="prose prose-brown mx-auto mb-12">
          <p className="text-taupe leading-relaxed">
            Welcome to YarnElegance. By accessing our website, you agree to these terms and conditions. Please read them carefully before using our services.
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
            For any questions regarding our Terms of Service, please{' '}
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

export default TermsOfService; 