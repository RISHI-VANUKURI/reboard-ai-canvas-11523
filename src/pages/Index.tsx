import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PromoPopup from "@/components/PromoPopup";
import ImageCarousel from "@/components/ImageCarousel";
import promo1 from "@/assets/promo-1.png";
import promo2 from "@/assets/promo-2.png";
import promo3 from "@/assets/promo-3.png";

const Index = () => {
  const promoOffers = [
    {
      id: "offer-1",
      image: promo1,
      alt: "Winter Sale - Up to 50% Off Web Development and App Development Services",
    },
    {
      id: "offer-2",
      image: promo2,
      alt: "Startup Sale - Special deals on Startup Packages, Branding, and Tech Development",
    },
    {
      id: "offer-3",
      image: promo3,
      alt: "Tech Club - Now Free to Join for Innovation and Development",
    },
  ];

  const carouselImages = [
    { src: "https://example.com/img1.jpg", alt: "slide 1" },
    { src: "https://example.com/img2.jpg", alt: "slide 2" },
    { src: "https://example.com/img3.jpg", alt: "slide 3" },
  ];

  return (
    <div className="min-h-screen">
      <PromoPopup offers={promoOffers} />
      <Navbar />
      <Hero />
      <ImageCarousel images={carouselImages} autoPlayDelay={3000} />
      <Services />
      <Mission />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
