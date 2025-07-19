import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: "Essential",
      price: "$85",
      duration: "60 minutes",
      description: "Perfect for first-time clients and regular maintenance",
      features: [
        "Choice of Swedish or Deep Tissue",
        "Aromatherapy enhancement",
        "Relaxation music",
        "Hot towel treatment",
        "Complimentary tea"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "$125",
      duration: "90 minutes",
      description: "Our most popular comprehensive wellness experience",
      features: [
        "Extended massage session",
        "Hot stone therapy add-on",
        "Custom aromatherapy blend",
        "Scalp and foot massage",
        "Relaxation lounge access",
        "Herbal tea ceremony"
      ],
      popular: true
    },
    {
      name: "Ultimate",
      price: "$175",
      duration: "120 minutes",
      description: "The complete luxury spa experience",
      features: [
        "Full body massage",
        "Hot stone therapy",
        "Reflexology treatment",
        "Aromatherapy facial",
        "Meditation guidance",
        "Healthy refreshments",
        "Take-home wellness kit"
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-purple-50 via-white to-sage-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-6">
            Wellness Packages
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            Choose the perfect package for your wellness journey. Each session is customized to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 25px 50px rgba(156, 175, 136, 0.2)' }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-sage-300 transform scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-sage-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-sage-800 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-sage-600 mb-2">{pkg.price}</div>
                <div className="text-sage-500 mb-4">{pkg.duration}</div>
                <p className="text-sage-600">{pkg.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-sage-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sage-600">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all ${
                  pkg.popular
                    ? 'bg-sage-600 text-white hover:bg-sage-700'
                    : 'border-2 border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white'
                }`}
              >
                Book This Package
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sage-600 mb-4">
            * All packages include consultation and personalized treatment plan
          </p>
          <p className="text-sage-600">
            Group sessions and corporate wellness programs available upon request
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;