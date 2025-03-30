
import TestimonialCard from '../TestimonialCard';

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  image?: string;
}

const TestimonialsSection = () => {
  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      quote: "From start to finish, Alto Builders guided us through the entire ADU process. The final result is stunning - a beautiful space that adds value and versatility to our property.",
      author: "Sarah Johnson",
      location: "Los Angeles, CA",
    },
    {
      quote: "The team at Alto Builders was professional, responsive, and delivered our ADU on time and within budget. Their attention to detail is impressive.",
      author: "Michael Chen",
      location: "Woodland Hills, CA",
    },
    {
      quote: "We love our new ADU! Alto Builders made what seemed like a complicated process so straightforward. Their expertise is unmatched.",
      author: "Jessica Rodriguez",
      location: "Ventura County, CA",
    },
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle mx-auto">
            Hear from homeowners who have transformed their properties with Alto Builders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              quote={testimonial.quote} 
              author={testimonial.author} 
              location={testimonial.location} 
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
