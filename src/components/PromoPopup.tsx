import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PromoPopupProps {
  offers: {
    id: string;
    image: string;
    alt: string;
  }[];
}

const PromoPopup = ({ offers }: PromoPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const STORAGE_KEY = "promo-popup-shown";

  useEffect(() => {
    // Check if popup was already shown in this session
    const wasShown = sessionStorage.getItem(STORAGE_KEY);
    
    if (!wasShown && offers.length > 0) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Prevent body scroll when popup is open
        document.body.style.overflow = "hidden";
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [offers.length]);

  const handleClose = () => {
    setIsVisible(false);
    // Mark as shown in session storage
    sessionStorage.setItem(STORAGE_KEY, "true");
    // Re-enable body scroll
    document.body.style.overflow = "unset";
  };

  const handleContactClick = () => {
    handleClose();
    navigate("/contact");
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] animate-fade-in"
        onClick={handleClose}
      />

      {/* Popup Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative w-full max-w-4xl bg-background rounded-2xl shadow-large overflow-hidden animate-scale-in pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-secondary transition-colors flex items-center justify-center"
            aria-label="Close popup"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Carousel */}
          <div className="p-4 pb-3">
            <Carousel className="w-full">
              <CarouselContent>
                {offers.map((offer) => (
                  <CarouselItem key={offer.id}>
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                      <img
                        src={offer.image}
                        alt={offer.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {offers.length > 1 && (
                <>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </>
              )}
            </Carousel>
          </div>

          {/* CTA Section */}
          <div className="px-4 pb-4 flex justify-center">
            <Button
              size="lg"
              className="w-full sm:w-auto px-8"
              onClick={handleContactClick}
            >
              Contact Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoPopup;
