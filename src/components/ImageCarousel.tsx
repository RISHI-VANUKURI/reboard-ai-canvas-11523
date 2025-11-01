import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
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
    <section className="w-full bg-transparent py-12">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: autoPlayDelay,
              stopOnInteraction: false,
            })
          ]}
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
