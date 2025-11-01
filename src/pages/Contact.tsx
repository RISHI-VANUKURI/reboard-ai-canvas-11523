import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted");
  };

  // Prefilled WhatsApp message (URL encoded)
  const whatsappMessage = encodeURIComponent(
    "Hi ReView AI Tech & Solutions — I would like to discuss a project. Please connect with me."
  );
  const whatsappLink = `https://wa.me/918341105135?text=${whatsappMessage}`;

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "reviewrv25@gmail.com",
      link: "mailto:reviewrv25@gmail.com",
    },
    {
      icon: Phone,
      label: "WhatsApp / Phone",
      value: "+91 83411 05135",
      link: whatsappLink,
    },
    {
      icon: MapPin,
      label: "Office",
      value: "ReView AI Tech & Solutions — Remote-first (by appointment)",
      link: "https://www.reviewrv25.com",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon-Fri: 9am–6pm IST",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have a project in mind? ReView AI Tech & Solutions is ready to help —
            message us on WhatsApp at <strong>+91 83411 05135</strong> or send an email to{" "}
            <strong>reviewrv25@gmail.com</strong>. We typically reply within 24 hours.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-green-600 text-white font-medium shadow hover:bg-green-700 transition"
            >
              Message us on WhatsApp
            </a>
            <a
              href="mailto:reviewrv25@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-input bg-background text-sm font-medium hover:bg-muted transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company (Optional)
                  </label>
                  <Input placeholder="Your Company" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option>Custom Development</option>
                    <option>AI Solutions</option>
                    <option>UI/UX Design</option>
                    <option>IT Consulting</option>
                    <option>MVP Development</option>
                    <option>Digital Transformation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>

                <div className="text-sm text-muted-foreground">
                  For urgent matters, please message us on WhatsApp:{" "}
                  <a href={whatsappLink} target="_blank" rel="noreferrer" className="underline">
                    +91 83411 05135
                  </a>
                  .
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Contact Information</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We're here to help and answer any questions you might have. We look forward to hearing
                from you — whether it's an idea, a product, or a full-scale project.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-secondary/50 hover:bg-secondary/80 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                      <div className="text-lg font-medium text-foreground">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  Quick Response Guarantee
                </h3>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 24 hours during business days. For
                  urgent matters, message us on WhatsApp at{" "}
                  <strong>
                    <a href={whatsappLink} target="_blank" rel="noreferrer" className="underline">
                      +91 83411 05135
                    </a>
                  </strong>
                  .
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  ReView AI Tech & Solutions — View the future. ReView the possibilities.
                </p>
                <p className="mt-2 text-sm">
                  Website:{" "}
                  <a href="https://www.reviewrv25.com" target="_blank" rel="noreferrer" className="underline">
                    www.reviewrv25.com
                  </a>{" "}
                  • Email: <a href="mailto:reviewrv25@gmail.com" className="underline">reviewrv25@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="aspect-video rounded-2xl bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Based in India — Remote & On-site by appointment</p>
              <p className="text-sm text-muted-foreground mt-2">
                Visit: <a href="https://www.reviewrv25.com" target="_blank" rel="noreferrer" className="underline">reviewrv25.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
