import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-100 via-stone-50 to-purple-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000000%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif text-sage-800 mb-6 leading-tight">
              Find Your
              <span className="block bg-gradient-to-r from-sage-600 to-purple-600 bg-clip-text text-transparent">
                Inner Peace
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-sage-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience transformative massage therapy in a sanctuary of calm. 
              Restore your body, mind, and spirit with our personalized treatments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(156, 175, 136, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="bg-sage-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-sage-700 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Your Session
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+1234567890"
              className="border-2 border-sage-600 text-sage-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-sage-600 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { icon: MapPin, title: "Prime Location", desc: "Downtown wellness district" },
              { icon: Calendar, title: "Flexible Hours", desc: "Open 7 days a week" },
              { icon: Phone, title: "Easy Booking", desc: "Call or book online" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <item.icon className="w-8 h-8 text-sage-600 mx-auto mb-3" />
                <h3 className="font-semibold text-sage-800 mb-2">{item.title}</h3>
                <p className="text-sage-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-sage-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-sage-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;