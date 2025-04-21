
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const projectImages = [
  "/lovable-uploads/710f9a5e-cc45-4a96-97ba-81f782a7d783.png",
  "/lovable-uploads/582129ba-ae8e-4b70-94ff-bd16281b02d0.png",
  "/lovable-uploads/d3cf4ce7-3f97-4189-96aa-90b3c9bd790d.png",
  "/lovable-uploads/972810d9-7266-4f20-be2c-99f10a4e8746.png",
  "/lovable-uploads/674414f0-02ff-440d-9196-b0d8e9d35cb6.png",
  "/lovable-uploads/537cc03f-b780-444f-8aba-65e863541e13.png",
];

const FeaturedProjectsSlider = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div className="relative">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {projectImages.map((img, idx) => (
                <CarouselItem key={idx} className="flex justify-center items-center h-96">
                  <img
                    src={img}
                    alt={`Project ${idx + 1}`}
                    className="object-cover rounded-2xl w-full h-96 shadow-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSlider;
