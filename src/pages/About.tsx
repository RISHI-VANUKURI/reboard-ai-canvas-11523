import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Zap, Award, Heart, Rocket } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies to deliver solutions that stand out.",
    },
    {
      icon: Users,
      title: "Young & Passionate",
      description: "Our team brings fresh energy, creativity, and modern perspectives to every project.",
    },
    {
      icon: Zap,
      title: "Results Driven",
      description: "We focus on measurable outcomes that create real value for businesses and communities.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we build, from code to customer service.",
    },
    {
      icon: Heart,
      title: "Client Focused",
      description: "Your success is our priority. We listen, understand, and deliver solutions that matter.",
    },
    {
      icon: Rocket,
      title: "Fast & Agile",
      description: "We move quickly without compromising quality, adapting to your needs and market changes.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            About <span className="text-primary">R</span>e<span className="text-primary">V</span>iew AI
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A hybrid IT solutions company run by tech enthusiast students pursuing B.Techs,
            building cutting-edge digital products and empowering businesses worldwide.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission-and-vision" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To create impactful technology that simplifies lives, enhances experiences,
                and powers the future of innovation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Run by tech enthusiast students pursuing their B.Tech degrees, <span className="text-primary">R</span>e<span className="text-primary">V</span>iew blends 
                fresh perspectives with practical tech solutions to solve real-world challenges. 
                We combine academic excellence with hands-on industry experience, proving that 
                passion and innovation know no age limits.
              </p>
            </div>
            <div className="bg-secondary/50 rounded-2xl p-12 text-center">
              <div className="text-5xl font-bold text-primary mb-2">2025</div>
              <p className="text-muted-foreground mb-8">Founded</p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">70+</div>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">50+</div>
                  <p className="text-sm text-muted-foreground">Clients</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">15+</div>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
                  <p className="text-sm text-muted-foreground">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border hover:shadow-medium transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="our-story" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-foreground">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <span className="text-primary">R</span>e<span className="text-primary">V</span>iew AI Tech and Solutions was born from a simple belief: that age shouldn't
              limit innovation. Our company is run by tech enthusiast students pursuing their B.Tech degrees,
              who saw gaps in the market that traditional companies weren't addressing.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              What started as weekend coding sessions and late-night brainstorming evolved into
              a full-fledged IT solutions company. We combine the fearless creativity of youth
              with rigorous technical expertise to deliver products that truly make a difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we serve clients across industries, from startups to established enterprises,
              helping them harness the power of AI, automation, and modern development practices
              to stay ahead in an ever-changing digital landscape.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
