import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
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
  const apiRef = useRef<CarouselApi | null>(null);
  const intervalRef = useRef<number | null>(null);
  const AUTOPLAY_DELAY = 3000;

  const startAutoplay = () => {
    if (!apiRef.current) return;
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      apiRef.current?.scrollNext();
    }, AUTOPLAY_DELAY);
  };

  useEffect(() => {
    // Check if popup was already shown in this session
    const wasShown = sessionStorage.getItem(STORAGE_KEY);
    
    if (!wasShown && offers.length > 0) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Prevent body scroll when popup is open
        document.body.style.overflow = "hidden";
        
        // Play notification sound
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSyBzvLTgjMGHm3A7+OZSA0PVqzn77BdGAg+ltzy0H4pBSp+zPLaizsIGGS57OihUBELTKXh8bllHAU2jdXyz3wlBSh6yu/flkINElmy6+yjVBQJQJzd8sFuJAUuhM/z1YU2Bhxqvu7mnEoPElyx7O6mVRUJP5zb8r9qIwUsgs/z04IyBh1rwO7mnEoPElyx7O6mVRUJP5zb8r9qIwUsgs/z04IyBh1rwO7mnEoPElyx7O6mVRUJP5zb8r9qIwUsgs/z04IyBh1rwO7mnEoPElyx7O6mVRUJP5zb8r9qIwUsgs/z04IyBh1rwO7mnEoPElyx7O6mVRUJP5zb8r9qIwUsgs/z04IyBh1rwO7mnEoPElyx7O6mVRUJP5zb8r9qIwUsgs/z04IyBh1rwO7mnEoPElyx7O6mVRUJP5zb8r9qIwUsgs/z04IyBh1rwO7mnEoPElyx7O6mVRUJP5zb8r9qIwUsgs/z04IyBh1rwO7mnEoPElyx7O6mVRUJP5zb8r9qIwUsgs/z04IyBh1rwO7mnEo=');
        audio.volume = 0.3;
        audio.play().catch(() => {
          // Autoplay prevented - this is fine
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [offers.length]);

// Autoplay management: start when visible, stop on hide/unmount
  useEffect(() => {
    if (isVisible && offers.length > 1) {
      startAutoplay();
    }
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [isVisible, offers.length]);

  const handleClose = () => {
    // Start fade out animation
    const modal = document.querySelector('.promo-modal');
    const overlay = document.querySelector('.promo-overlay');
    
    if (modal && overlay) {
      modal.classList.add('animate-fade-out', 'animate-scale-out');
      overlay.classList.add('animate-fade-out');
      
      // Wait for animation to complete before hiding
      setTimeout(() => {
        setIsVisible(false);
        // Mark as shown in session storage
        sessionStorage.setItem(STORAGE_KEY, "true");
        // Re-enable body scroll
        document.body.style.overflow = "unset";
        // Stop autoplay and release API
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        apiRef.current = null;
      }, 300);
    }
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
        className="promo-overlay fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] animate-fade-in"
        onClick={handleClose}
      />

      {/* Popup Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="promo-modal relative w-full max-w-4xl bg-background rounded-2xl shadow-large overflow-hidden animate-fade-in animate-scale-in pointer-events-auto"
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
            <Carousel
              opts={{ loop: true, align: "start", watchDrag: false }}
              setApi={(api) => {
                apiRef.current = api;
                startAutoplay();
              }}
              className="w-full"
            >
              <CarouselContent>
                {offers.map((offer) => (
                  <CarouselItem key={offer.id}>
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                      <img
                        src={offer.image}
                        alt={offer.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
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
