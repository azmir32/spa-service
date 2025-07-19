import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-sage-800 via-sage-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="w-8 h-8 text-sage-300" />
              <span className="text-2xl font-serif">Serenity Spa</span>
            </div>
            <p className="text-sage-200 mb-4 leading-relaxed">
              Your sanctuary for healing and wellness. We believe that true wellness comes from within, 
              and our mission is to help you discover your path to inner peace.
            </p>
            <div className="flex items-center text-sage-300">
              <Heart className="w-5 h-5 mr-2" />
              <span className="italic">Healing with heart since 2008</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-sage-100">Quick Links</h3>
            <ul className="space-y-2">
              {['Services', 'About', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sage-200 hover:text-sage-100 transition-colors hover:underline"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-sage-100">Our Services</h3>
            <ul className="space-y-2 text-sage-200">
              <li>Swedish Massage</li>
              <li>Deep Tissue Massage</li>
              <li>Aromatherapy Massage</li>
              <li>Hot Stone Therapy</li>
              <li>Prenatal Massage</li>
              <li>Reflexology</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-sage-100">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sage-300 mt-0.5 flex-shrink-0" />
                <div className="text-sage-200">
                  <p>123 Wellness Boulevard</p>
                  <p>Downtown District, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sage-300 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-sage-200 hover:text-sage-100 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sage-300 flex-shrink-0" />
                <a href="mailto:hello@serenityspa.com" className="text-sage-200 hover:text-sage-100 transition-colors">
                  hello@serenityspa.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-sage-300 mt-0.5 flex-shrink-0" />
                <div className="text-sage-200">
                  <p>Mon-Fri: 9AM - 8PM</p>
                  <p>Sat-Sun: 10AM - 6PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-sage-700 mt-12 pt-8 text-center"
        >
          <p className="text-sage-200 mb-4">
            &copy; 2024 Serenity Spa. All rights reserved. Licensed Massage Therapy Services.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-sage-300">
            <a href="#" className="hover:text-sage-100 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sage-100 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-sage-100 transition-colors">Accessibility</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;