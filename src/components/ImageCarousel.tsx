import { useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlayDelay?: number;
}

const ImageCarousel = ({ images, autoPlayDelay = 3000 }: ImageCarouselProps) => {
  return (
    <section className="w-full bg-transparent">
      <Carousel
        opts={{
          loop: true,
          dragFree: false,
          watchDrag: false,
        }}
        plugins={[
          Autoplay({
            delay: autoPlayDelay,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  style={{
                    border: "none",
                    boxShadow: "none",
                    background: "none",
                    borderRadius: 0,
                  }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ImageCarousel;
