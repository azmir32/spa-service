import React from 'react';
import { motion } from 'framer-motion';
import { Flower, Flame, Waves, Leaf, Heart, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Waves,
      title: "Swedish Massage",
      description: "Classic relaxation technique using long, flowing strokes to release tension and promote deep relaxation.",
      duration: "60-90 minutes",
      benefits: ["Stress relief", "Improved circulation", "Muscle relaxation"]
    },
    {
      icon: Flame,
      title: "Deep Tissue Massage",
      description: "Therapeutic massage targeting deeper muscle layers to release chronic tension and pain.",
      duration: "60-90 minutes",
      benefits: ["Pain relief", "Muscle recovery", "Improved mobility"]
    },
    {
      icon: Flower,
      title: "Aromatherapy Massage",
      description: "Gentle massage combined with essential oils to enhance relaxation and emotional well-being.",
      duration: "75-90 minutes",
      benefits: ["Emotional balance", "Stress reduction", "Enhanced mood"]
    },
    {
      icon: Star,
      title: "Hot Stone Therapy",
      description: "Smooth, heated stones placed on key points to warm and relax muscles for deeper healing.",
      duration: "90 minutes",
      benefits: ["Deep relaxation", "Pain relief", "Improved sleep"]
    },
    {
      icon: Heart,
      title: "Prenatal Massage",
      description: "Specialized massage for expecting mothers to reduce discomfort and promote wellness.",
      duration: "60-75 minutes",
      benefits: ["Reduced swelling", "Better sleep", "Stress relief"]
    },
    {
      icon: Leaf,
      title: "Reflexology",
      description: "Targeted pressure point therapy focusing on feet to promote healing throughout the body.",
      duration: "45-60 minutes",
      benefits: ["Improved circulation", "Stress relief", "Energy balance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-stone-50 to-sage-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            Discover our range of therapeutic treatments designed to restore balance and promote healing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(156, 175, 136, 0.15)' }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-6 mx-auto">
                <service.icon className="w-8 h-8 text-sage-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-sage-800 mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="text-sage-600 mb-4 text-center">
                {service.description}
              </p>
              
              <div className="text-center mb-4">
                <span className="inline-block bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm font-medium">
                  {service.duration}
                </span>
              </div>
              
              <div className="space-y-2">
                {service.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center text-sm text-sage-600">
                    <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                    {benefit}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;