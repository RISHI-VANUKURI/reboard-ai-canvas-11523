import { useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlayDelay?: number;
}

const ImageCarousel = ({ images, autoPlayDelay = 3000 }: ImageCarouselProps) => {
  const apiRef = useRef<CarouselApi | null>(null);
  const intervalRef = useRef<number | null>(null);

  const startAutoplay = () => {
    if (!apiRef.current) return;
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      apiRef.current?.scrollNext();
    }, autoPlayDelay);
  };

  useEffect(() => {
    // Restart when delay changes
    startAutoplay();
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlayDelay]);

  return (
    <section className="w-full bg-transparent py-12">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            loop: true,
            align: "start",
            dragFree: false,
            watchDrag: false,
          }}
          setApi={(api) => {
            apiRef.current = api;
            // Start autoplay once API becomes available
            startAutoplay();
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-0">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-0">
                <div className="w-full aspect-video">
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
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ImageCarousel;
