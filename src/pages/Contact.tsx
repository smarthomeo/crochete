import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Send, Clock, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import emailService from '@/services/emailService';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await emailService.sendContactForm({
        name,
        email,
        message
      });
      
      if (result.success) {
        toast({
          title: "Message sent!",
          description: "We've received your message and will get back to you soon.",
        });
        // Clear form
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast({
          title: "Error sending message",
          description: "There was a problem sending your message. Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      });
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
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
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-mocha-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-mocha-600 text-lg md:text-xl leading-relaxed">
              Have questions? We'd love to hear from you.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-mocha-100 rounded-full mix-blend-multiply blur-xl opacity-70"></div>
          <div className="absolute bottom-1/4 left-[10%] w-72 h-72 bg-mocha-200 rounded-full mix-blend-multiply blur-xl opacity-60"></div>
        </div>
      </section>

      <main className="flex-grow py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-12"
            >
              <motion.div variants={fadeIn} className="prose prose-lg">
                <p className="text-mocha-700 leading-relaxed">
                  Whether you have questions about our products, need help with an order, or just want to say hello,
                  we're here to help. Reach out through the form or use our contact information below.
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="space-y-8">
                {[
                  {
                    icon: <MapPin className="w-6 h-6" />,
                    title: "Visit Us",
                    content: (
                      <>
                        123 Craft Street<br />
                        Yarnville, YN 12345
                      </>
                    )
                  },
                  {
                    icon: <Mail className="w-6 h-6" />,
                    title: "Email Us",
                    content: (
                      <a href="mailto:hello@yarnelegance.com" className="text-mocha-700 hover:text-mocha-900 transition-colors">
                        hello@yarnelegance.com
                      </a>
                    )
                  },
                  {
                    icon: <Phone className="w-6 h-6" />,
                    title: "Call Us",
                    content: (
                      <a href="tel:+15551234567" className="text-mocha-700 hover:text-mocha-900 transition-colors">
                        (555) 123-4567
                      </a>
                    )
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-mocha-100 rounded-lg flex items-center justify-center text-mocha-700">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-mocha-900 mb-1">{item.title}</h3>
                      <div className="text-mocha-600">{item.content}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeIn} className="bg-mocha-50 p-6 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-mocha-100 rounded-lg flex items-center justify-center text-mocha-700">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium text-mocha-900">Store Hours</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                    { days: "Saturday", hours: "10:00 AM - 5:00 PM" },
                    { days: "Sunday", hours: "Closed" }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between text-mocha-600">
                      <span>{schedule.days}</span>
                      <span>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-mocha-100">
                <h2 className="text-2xl font-serif font-medium text-mocha-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-mocha-700">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
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
                      placeholder="jane@example.com"
                      className="bg-mocha-50/50 border-mocha-200 focus:border-mocha-300 focus:ring-mocha-300"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-mocha-700">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help you?"
                      rows={6}
                      className="bg-mocha-50/50 border-mocha-200 focus:border-mocha-300 focus:ring-mocha-300"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-mocha-800 hover:bg-mocha-700 text-white transition-colors duration-300 flex items-center justify-center space-x-2 py-6"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      {/* Map Section */}
      <section className="py-16 md:py-24 bg-mocha-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-medium text-mocha-900 mb-4">Visit Our Store</h2>
            <p className="text-mocha-600 max-w-2xl mx-auto">
              Come experience our yarns and crafting supplies in person. Our knowledgeable staff is here to help you find exactly what you need.
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="aspect-video rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM3nCsDQ2JzI5LjYiTiAxMjLCsDI1JzEwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
