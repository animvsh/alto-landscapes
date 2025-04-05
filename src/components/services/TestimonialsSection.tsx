
import React from 'react';
import ScrollReveal from '../ScrollReveal';

const testimonials = [
  {
    quote: "Working with Alto Builders on our kitchen remodel was an exceptional experience. Their attention to detail and quality craftsmanship exceeded our expectations. The team was professional, communicative, and completed the project on time and on budget.",
    author: "Sarah M.",
    location: "Los Angeles, CA"
  },
  {
    quote: "Alto Builders transformed our backyard with a beautiful outdoor living space. From the initial design to the finished product, they guided us through every step. Their knowledge of local regulations saved us from potential headaches.",
    author: "David T.",
    location: "Agoura Hills, CA"
  },
  {
    quote: "Our ADU project with Alto Builders was seamless from start to finish. They handled all permits and regulations, provided creative design solutions for our small space, and delivered a beautiful finished product that has significantly increased our property value.",
    author: "Jennifer R.",
    location: "Ventura, CA"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-alto-light-gray">
      <div className="container-custom">
        <ScrollReveal animation="fade">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle mx-auto">
              Feedback from satisfied homeowners across Los Angeles and Ventura County
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal 
              key={index}
              animation="slide-up"
              delay={0.1 * (index + 1)}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-50 h-full transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-alto-dark-gray mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-alto-blue">{testimonial.author}</p>
                  <p className="text-sm text-alto-dark-gray">{testimonial.location}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
