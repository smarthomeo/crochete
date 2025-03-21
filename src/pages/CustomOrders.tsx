import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Paintbrush, Clock, MessageSquare, Package } from 'lucide-react';

const CustomOrders = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budget, setBudget] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Request received!",
        description: "We'll review your custom order request and get back to you soon.",
      });
      setName('');
      setEmail('');
      setDescription('');
      setTimeline('');
      setBudget('');
      setIsSubmitting(false);
    }, 1500);
  };

  const processSteps = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "1. Submit Your Request",
      description: "Fill out our custom order form with your project details, including design preferences and requirements."
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "2. Design Consultation",
      description: "Our team will review your request and schedule a consultation to discuss your project in detail."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "3. Creation Process",
      description: "Once approved, we'll begin crafting your custom piece with regular updates on progress."
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "4. Delivery",
      description: "Your finished piece will be carefully packaged and shipped to you with tracking information."
    }
  ];

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
              Custom Orders
            </h1>
            <p className="text-mocha-600 text-lg md:text-xl leading-relaxed">
              Bring your unique vision to life with our custom crochet services.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-mocha-100 rounded-full mix-blend-multiply blur-xl opacity-70"></div>
          <div className="absolute bottom-1/4 left-[10%] w-72 h-72 bg-mocha-200 rounded-full mix-blend-multiply blur-xl opacity-60"></div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-mocha-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif font-medium text-mocha-900 mb-4">
              How It Works
            </h2>
            <p className="text-mocha-600 max-w-2xl mx-auto">
              Our custom order process is designed to bring your vision to life while keeping you informed every step of the way.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 bg-mocha-100 rounded-lg flex items-center justify-center text-mocha-700 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium text-mocha-900 mb-2">{step.title}</h3>
                <p className="text-mocha-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm border border-mocha-100"
          >
            <h2 className="text-2xl font-serif font-medium text-mocha-900 mb-6">
              Request a Custom Order
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-mocha-700">
                  Your Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-mocha-50/50 border-mocha-200 focus:border-mocha-300 focus:ring-mocha-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-mocha-700">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-mocha-50/50 border-mocha-200 focus:border-mocha-300 focus:ring-mocha-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-medium text-mocha-700">
                  Project Description
                </label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Please describe your project in detail..."
                  rows={6}
                  className="bg-mocha-50/50 border-mocha-200 focus:border-mocha-300 focus:ring-mocha-300"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="timeline" className="block text-sm font-medium text-mocha-700">
                    Desired Timeline
                  </label>
                  <Input
                    id="timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    placeholder="e.g., 2 months"
                    className="bg-mocha-50/50 border-mocha-200 focus:border-mocha-300 focus:ring-mocha-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="block text-sm font-medium text-mocha-700">
                    Budget Range
                  </label>
                  <Input
                    id="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="e.g., $100-200"
                    className="bg-mocha-50/50 border-mocha-200 focus:border-mocha-300 focus:ring-mocha-300"
                  />
                </div>
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-mocha-800 hover:bg-mocha-700 text-white transition-colors duration-300 py-6"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Custom Order Request'}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CustomOrders; 