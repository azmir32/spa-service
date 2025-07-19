import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Users, number: "2000+", label: "Happy Clients" },
    { icon: Clock, number: "5000+", label: "Sessions Completed" },
    { icon: Heart, number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-sage-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-6">
              About Serenity Spa
            </h2>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
              Founded on the principle that true wellness comes from within, we create a sanctuary 
              where healing and tranquility meet modern therapeutic expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-sage-200 to-purple-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-16 h-16 text-sage-600" />
                  </div>
                  <p className="text-sage-700 italic">
                    "Healing sanctuary where mind, body, and spirit unite"
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-sage-800 mb-4">
                Meet Sarah Thompson, LMT
              </h3>
              
              <p className="text-sage-600 leading-relaxed">
                With over 15 years of experience in therapeutic massage, Sarah brings a unique blend 
                of traditional techniques and modern wellness practices to every session. Her journey 
                began with a personal quest for healing and has evolved into a passionate mission to 
                help others find their path to wellness.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  <span className="text-sage-600">Licensed Massage Therapist (LMT)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  <span className="text-sage-600">Certified in Swedish & Deep Tissue Massage</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  <span className="text-sage-600">Specialized in Prenatal & Aromatherapy</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                  <span className="text-sage-600">Continuing Education in Holistic Healing</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-sage-100 rounded-full mb-4 mx-auto">
                  <stat.icon className="w-6 h-6 text-sage-600" />
                </div>
                <div className="text-3xl font-bold text-sage-800 mb-2">{stat.number}</div>
                <div className="text-sage-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;