import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Ruler, PenTool, Palette, Box, Truck, Star } from 'lucide-react';

const OurProcess = () => {
  const processes = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Initial Consultation",
      description: "We begin by understanding your vision, preferences, and requirements through a detailed consultation.",
      details: [
        "Discussion of design preferences",
        "Material selection guidance",
        "Timeline planning",
        "Budget considerations"
      ]
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Design Phase",
      description: "Our expert designers create detailed sketches and plans for your custom piece.",
      details: [
        "Pattern development",
        "Color scheme selection",
        "Size specifications",
        "Design refinements"
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Material Selection",
      description: "We carefully select premium yarns and materials that match your requirements.",
      details: [
        "Quality yarn sourcing",
        "Color matching",
        "Texture consideration",
        "Durability testing"
      ]
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Creation Process",
      description: "Our skilled artisans bring your design to life with meticulous attention to detail.",
      details: [
        "Pattern following",
        "Regular quality checks",
        "Progress updates",
        "Detail refinement"
      ]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Each piece undergoes thorough inspection to ensure it meets our high standards.",
      details: [
        "Structural integrity check",
        "Finish inspection",
        "Size verification",
        "Final touches"
      ]
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: "Packaging",
      description: "Your piece is carefully packaged to ensure safe delivery to your doorstep.",
      details: [
        "Protective wrapping",
        "Custom packaging",
        "Care instructions",
        "Personal note"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

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
              Our Process
            </h1>
            <p className="text-mocha-600 text-lg md:text-xl leading-relaxed">
              From concept to creation, discover how we bring your crochet dreams to life with care and craftsmanship.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-mocha-100 rounded-full mix-blend-multiply blur-xl opacity-70"></div>
          <div className="absolute bottom-1/4 left-[10%] w-72 h-72 bg-mocha-200 rounded-full mix-blend-multiply blur-xl opacity-60"></div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {processes.map((process, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-sm border border-mocha-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-mocha-100 rounded-xl flex items-center justify-center text-mocha-700 mb-6">
                  {process.icon}
                </div>
                <h3 className="text-2xl font-serif font-medium text-mocha-900 mb-4">
                  {process.title}
                </h3>
                <p className="text-mocha-600 mb-6">
                  {process.description}
                </p>
                <ul className="space-y-3">
                  {process.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-mocha-400 flex-shrink-0 mt-0.5" />
                      <span className="text-mocha-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-16 md:py-24 bg-mocha-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-mocha-900 mb-6">
              Our Quality Promise
            </h2>
            <p className="text-mocha-600 text-lg leading-relaxed mb-12">
              Every piece we create is made with love, attention to detail, and the highest quality materials. 
              We take pride in our craftsmanship and stand behind every item we make.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-mocha-100 rounded-lg flex items-center justify-center text-mocha-700">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="text-mocha-700 font-medium">Made with Love</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-mocha-100 rounded-lg flex items-center justify-center text-mocha-700">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-mocha-700 font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-mocha-100 rounded-lg flex items-center justify-center text-mocha-700">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="text-mocha-700 font-medium">Secure Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurProcess; 