import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "General Questions",
    questions: [
      {
        question: "What types of yarn do you offer?",
        answer: "We offer a wide range of premium yarns including wool, cotton, acrylic, and specialty blends. All our yarns are carefully selected for quality and sustainability."
      },
      {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Please check our shipping policy for detailed information."
      },
      {
        question: "What is your return policy?",
        answer: "We accept returns within 30 days of purchase for unused items in their original packaging. Custom orders are non-returnable."
      }
    ]
  },
  {
    title: "Orders & Shipping",
    questions: [
      {
        question: "How long does shipping take?",
        answer: "Domestic orders typically arrive within 3-5 business days. International shipping can take 7-14 business days depending on the destination."
      },
      {
        question: "Can I track my order?",
        answer: "Yes, once your order ships, you'll receive a tracking number via email to monitor your package's journey."
      },
      {
        question: "Do you offer expedited shipping?",
        answer: "Yes, we offer express shipping options at checkout for customers who need their orders faster."
      }
    ]
  },
  {
    title: "Product Information",
    questions: [
      {
        question: "Are your yarns suitable for beginners?",
        answer: "Yes! We have a range of yarns perfect for beginners, and our product descriptions indicate difficulty levels."
      },
      {
        question: "How do I care for my crochet items?",
        answer: "Care instructions vary by yarn type. Each product comes with detailed care instructions to ensure your items last longer."
      },
      {
        question: "Do you offer yarn samples?",
        answer: "Yes, we offer sample cards for our yarn collections. You can order these from our samples section."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative mt-16 sm:mt-24 overflow-hidden">
        <div className="absolute inset-0 bg-mocha-50/50"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 py-20 relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-mocha-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-mocha-600 text-lg md:text-xl leading-relaxed">
              Find answers to common questions about our products and services.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-mocha-100 rounded-full mix-blend-multiply blur-xl opacity-70"></div>
          <div className="absolute bottom-1/4 left-[10%] w-72 h-72 bg-mocha-200 rounded-full mix-blend-multiply blur-xl opacity-60"></div>
        </div>
      </section>

      {/* FAQ Content */}
      <main className="flex-grow py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {faqCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-serif font-medium text-mocha-900 mb-6">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, qIndex) => (
                  <AccordionItem 
                    key={qIndex} 
                    value={`item-${index}-${qIndex}`}
                    className="border border-mocha-200 rounded-lg overflow-hidden bg-white"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-mocha-50 transition-colors duration-300">
                      <span className="text-mocha-800 font-medium text-left">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-mocha-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-mocha-50 rounded-xl p-8"
          >
            <h2 className="text-2xl font-serif font-medium text-mocha-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-mocha-600 mb-6">
              Can't find the answer you're looking for? Please chat with our friendly team.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-mocha-800 text-white rounded-md hover:bg-mocha-700 transition-colors duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ; 