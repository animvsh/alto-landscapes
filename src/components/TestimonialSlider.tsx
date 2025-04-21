
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Star } from "lucide-react";

// Testimonials data
const testimonials = [
  {
    name: "Michael G.",
    date: "Jan 30, 2024",
    review: "They are great guys. Punctual and back up what they say they can do. The turnaround was great and we LOVE the tile work. With Simon's suggestions, the project turned out better than we expected.",
    theme: "Project Quality & Outcome"
  },
  {
    name: "Ellie W.",
    date: "Jul 14, 2024",
    review: "They kept an amazing pace—only took 3 weeks to complete my bathroom remodel. Simon was thorough and knowledgeable. I’ll definitely be using them again!",
    theme: "Project Quality & Outcome"
  },
  {
    name: "Simon L.",
    date: "Mar 15, 2024",
    review: "Simon created an amazing 3D rendering and included every detail in the scope of work before starting. His attention to detail really stood out.",
    theme: "Design & Planning"
  },
  {
    name: "Paula K.",
    date: "Jul 11, 2024",
    review: "Simon did a rendering right on his laptop during the first estimate visit. We have other contractor appointments, but he’s definitely at the top of our list!",
    theme: "Design & Planning"
  },
  {
    name: "Omer R.",
    date: "Mar 7, 2025",
    review: "Communication through BuilderTrend has been fantastic. Paul’s knowledge and Simon’s renderings made for a pleasant experience.",
    theme: "Communication & Transparency"
  },
  {
    name: "Sarah J.",
    date: "Mar 13, 2024",
    review: "Simon was the only contractor who measured and created a mockup during our first meeting. He was honest and offered real solutions to the challenges of our older building.",
    theme: "Communication & Transparency"
  },
  {
    name: "Darianna A.",
    date: "Mar 4, 2025",
    review: "They were always on time, kept me informed every step, and were super professional and friendly. Would definitely recommend!",
    theme: "Customer Experience & Professionalism"
  },
  {
    name: "Sarah M.",
    date: "Mar 11, 2024",
    review: "What stood out from day 1 was their honesty, communication, and attention to detail. Simon answered all our questions with care.",
    theme: "Customer Experience & Professionalism"
  },
  {
    name: "Kathryn Q.",
    date: "Dec 11, 2023",
    review: "They showed hands-on knowledge, flexible design thinking, and a reasonable price. Although we didn’t move forward, we would consider them again.",
    theme: "Initial Consultations & First Impressions"
  },
  {
    name: "Wojtek D.",
    date: "May 8, 2024",
    review: "Just started the project but very happy so far. Simon and team are responsive, honest, and transparent during planning.",
    theme: "Initial Consultations & First Impressions"
  }
];

const TestimonialSlider = () => (
  <section className="py-20 bg-gradient-to-b from-white to-alto-light-gray">
    <div className="container-custom max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="section-title mb-2 text-3xl md:text-4xl font-bold">
          What Clients Say
        </h2>
        <p className="section-subtitle mx-auto max-w-xl text-base text-gray-500">
          Real reviews from Alto Builders homeowners
        </p>
      </div>
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((t, idx) => (
              <CarouselItem key={idx} className="flex justify-center">
                <div className="w-full bg-white/90 shadow-lg border border-gray-100 rounded-2xl px-6 py-8 flex flex-col items-center max-w-xl mx-auto animate-fade-in">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="italic text-lg leading-relaxed text-gray-800 text-center mb-6">
                    “{t.review}”
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold text-alto-blue">{t.name}</div>
                    <span className="text-sm text-gray-500">{t.date}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-between items-center absolute left-0 right-0 -bottom-14 md:-bottom-12 px-4 pointer-events-none">
            <div className="pointer-events-auto">
              <CarouselPrevious className="bg-white shadow ring-1 ring-gray-200" />
            </div>
            <div className="pointer-events-auto">
              <CarouselNext className="bg-white shadow ring-1 ring-gray-200" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  </section>
);

export default TestimonialSlider;
