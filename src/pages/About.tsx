import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Leaf, Shield, Users } from 'lucide-react';

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

const About = () => {
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
              Our Story
            </h1>
            <p className="text-mocha-600 text-lg md:text-xl leading-relaxed">
              Crafting dreams into reality, one stitch at a time
            </p>
          </motion.div>
        </motion.div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-mocha-100 rounded-full mix-blend-multiply blur-xl opacity-70"></div>
          <div className="absolute bottom-1/4 left-[10%] w-72 h-72 bg-mocha-200 rounded-full mix-blend-multiply blur-xl opacity-60"></div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Journey Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeIn} className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="/images/yarn1-bg.jpg" 
                    alt="Handcrafted crochet items" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-mocha-100 rounded-2xl -z-10"></div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="space-y-6">
                <h2 className="text-3xl font-serif font-medium text-mocha-900">Our Journey</h2>
                <p className="text-mocha-700 leading-relaxed">
                  Founded in 2018 by Emma Johnson, YarnElegance began as a small collection of hand-dyed yarns 
                  sold at local craft fairs. What started as a passion project has blossomed into a 
                  thriving community of creators and craft enthusiasts.
                </p>
                <p className="text-mocha-700 leading-relaxed">
                  Today, we offer a carefully curated selection of premium yarns, tools, and patterns 
                  designed to inspire creativity and support crafters at every skill level.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-mocha-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-serif font-medium text-mocha-900 mb-4">Our Values</h2>
              <p className="text-mocha-700 max-w-2xl mx-auto">
                We believe in creating beautiful things while making a positive impact on our community and environment.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  icon: <Leaf className="w-6 h-6" />,
                  title: "Sustainability",
                  description: "We source eco-friendly materials and support sustainable practices in all our operations."
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Quality",
                  description: "Every product is carefully tested to ensure it meets our high standards."
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Community",
                  description: "We foster connections through workshops, tutorials, and social events."
                },
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: "Passion",
                  description: "We put love and care into every aspect of our business."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-mocha-100 rounded-lg flex items-center justify-center text-mocha-700 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-medium text-mocha-900 mb-2">{value.title}</h3>
                  <p className="text-mocha-600">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-serif font-medium text-mocha-900 mb-4">Meet Our Team</h2>
              <p className="text-mocha-700 max-w-2xl mx-auto">
                Our passionate team of crafters is dedicated to supporting your creative journey.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  name: "Emma Johnson",
                  role: "Founder & Creative Director",
                  image: "/images/team-1.jpg"
                },
                {
                  name: "Sarah Chen",
                  role: "Product Curator",
                  image: "/images/team-2.jpg"
                },
                {
                  name: "Michael Ross",
                  role: "Community Manager",
                  image: "/images/team-3.jpg"
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="group relative"
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-mocha-900">{member.name}</h3>
                  <p className="text-mocha-600">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-mocha-900 text-white">
          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto px-4 sm:px-6 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Join Our Creative Community
            </h2>
            <p className="text-mocha-100 mb-8 max-w-2xl mx-auto">
              Be part of our story and discover the joy of creating beautiful things with your own hands.
            </p>
            <motion.a
              href="/products"
              className="inline-flex items-center px-8 py-3 bg-white text-mocha-900 rounded-md hover:bg-mocha-50 transition-colors duration-300 font-medium group"
            >
              Explore Our Collection
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
