import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily Johnson",
      role: "Marketing Executive",
      content: "Sarah's therapeutic touch has been life-changing. After months of stress and tension, I finally found relief. The atmosphere is so calming, and Sarah's expertise is unmatched.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      content: "As someone who spends long hours at a desk, the deep tissue massage here has been a game-changer. The hot stone therapy is incredible, and I always leave feeling renewed.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Sarah Martinez",
      role: "Yoga Instructor",
      content: "The prenatal massage during my pregnancy was exactly what I needed. Sarah's gentle approach and understanding of the body made me feel completely at ease and cared for.",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "David Wilson",
      role: "Retired Teacher",
      content: "After my knee surgery, the therapeutic massage helped tremendously with my recovery. The reflexology sessions have also improved my overall well-being significantly.",
      rating: 5,
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Lisa Thompson",
      role: "Nurse",
      content: "Working in healthcare is demanding, and these massage sessions are my sanctuary. The aromatherapy massage is particularly wonderful - it melts away all the stress.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Robert Davis",
      role: "Construction Manager",
      content: "The hot stone therapy is amazing for my sore muscles after long workdays. Sarah really knows how to target problem areas and provide lasting relief.",
      rating: 5,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-sage-50 via-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            Real stories from people who have experienced the transformative power of therapeutic massage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(156, 175, 136, 0.15)' }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-sage-200" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-sage-800">{testimonial.name}</h3>
                  <p className="text-sage-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-sage-600 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-sage-800 mb-4">
              Join Our Community of Wellness
            </h3>
            <p className="text-sage-600 mb-6">
              Over 2,000 satisfied clients have found their path to wellness with us. 
              Experience the difference that personalized, expert care can make in your life.
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-sage-600">98%</div>
                <div className="text-sage-500 text-sm">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sage-600">2000+</div>
                <div className="text-sage-500 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sage-600">5000+</div>
                <div className="text-sage-500 text-sm">Sessions</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;