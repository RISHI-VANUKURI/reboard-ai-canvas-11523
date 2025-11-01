import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const blogPosts = [
  {
    id: "tech-club-launch",
    title: "We're Starting a Tech Club! Here's Why You Should Join",
    excerpt: "I'm excited to announce we're launching a tech club for developers, designers, and tech enthusiasts. Come build cool stuff with us every Thursday evening!",
    author: "The ReView Team",
    date: "March 20, 2024",
    readTime: "4 min read",
    category: "Community",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
  },
  {
    id: "ai-gone-wrong",
    title: "That Time Our AI Model Went Completely Off the Rails",
    excerpt: "Sometimes things don't go as planned. Here's what happened when our product recommendation AI started suggesting cat photos for everything.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "6 min read",
    category: "AI & Automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
  {
    id: "first-project-lessons",
    title: "5 Things I Wish I Knew Before Starting My First Big Project",
    excerpt: "Real talk about the mistakes I made, the lessons I learned, and why imposter syndrome hits different at 2 AM.",
    author: "Michael Chen",
    date: "March 12, 2024",
    readTime: "8 min read",
    category: "Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
  },
  {
    id: "good-design",
    title: "Why Good Design Isn't Just About Making Things Pretty",
    excerpt: "A button that looks amazing but nobody can find is just expensive decoration. Let's talk about design that actually works.",
    author: "Emily Rodriguez",
    date: "March 10, 2024",
    readTime: "5 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    id: "mvp-two-weeks",
    title: "Behind the Scenes: How We Built Our First MVP in 2 Weeks",
    excerpt: "Spoiler: lots of coffee, some very questionable code decisions, and one all-nighter we're not proud of. But hey, it worked!",
    author: "David Park",
    date: "March 8, 2024",
    readTime: "7 min read",
    category: "Startup Life",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
  },
  {
    id: "mental-health-tech",
    title: "The Tech Stack Nobody Talks About: Mental Health & Burnout",
    excerpt: "We're always talking about React vs Vue, but what about taking care of yourself? Here's what I learned the hard way.",
    author: "Lisa Wang",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Team Culture",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop",
  },
  {
    id: "debugging-hell",
    title: "I Spent 3 Hours Debugging. The Problem? A Missing Semicolon",
    excerpt: "Yes, really. Here's my journey through debugging hell and back, complete with the emotional stages of acceptance.",
    author: "James Miller",
    date: "March 3, 2024",
    readTime: "5 min read",
    category: "Development",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop",
  },
  {
    id: "client-translation",
    title: "When Clients Say 'Make It Pop' - A Translation Guide",
    excerpt: "A lighthearted look at decoding client feedback and what they actually mean when they ask for something 'more modern.'",
    author: "Emily Rodriguez",
    date: "March 1, 2024",
    readTime: "4 min read",
    category: "Client Relations",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
  },
  {
    id: "ditching-perfectionism",
    title: "Why I'm Ditching Perfectionism (And You Should Too)",
    excerpt: "Done is better than perfect. Ship it, get feedback, iterate. Here's why I stopped waiting for everything to be 'ready.'",
    author: "Sarah Johnson",
    date: "February 28, 2024",
    readTime: "6 min read",
    category: "Mindset",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  },
  {
    id: "office-dog-reviews",
    title: "Our Office Dog Reviews Our Code (Seriously)",
    excerpt: "Meet Pixel, our office dog and unofficial code reviewer. Turns out rubber duck debugging works even better with actual barking.",
    author: "The ReView Team",
    date: "February 25, 2024",
    readTime: "3 min read",
    category: "Team Culture",
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&h=600&fit=crop",
  },
  {
    id: "learning-at-35",
    title: "Learning to Code at 35: My Honest Journey",
    excerpt: "It's never too late to start. Here's my story of career change, learning anxiety, and why age is just a number in tech.",
    author: "David Park",
    date: "February 22, 2024",
    readTime: "8 min read",
    category: "Personal Growth",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
  },
  {
    id: "project-failure",
    title: "What I Learned From My Biggest Project Failure",
    excerpt: "Not every project succeeds. Here's the story of a $50K project that completely tanked and what it taught me about resilience.",
    author: "Michael Chen",
    date: "February 20, 2024",
    readTime: "10 min read",
    category: "Lessons Learned",
    image: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?w=800&h=600&fit=crop",
  },
];

const categories = ["All", "Community", "Development", "Design", "Team Culture", "Startup Life", "Lessons Learned"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thanks for subscribing!",
        description: "You'll receive our next newsletter soon.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Stories from the Trenches
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences, honest mistakes, and lessons learned from building tech in the real world
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 bg-background border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <Link to={`/blog/${filteredPosts[0].id}`}>
            <div className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-large transition-all duration-300 cursor-pointer">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-video md:aspect-auto">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-sm text-primary font-medium mb-3">
                    {filteredPosts[0].category}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {filteredPosts[0].date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {filteredPosts[0].readTime}
                    </div>
                  </div>
                  
                  <Button className="w-fit">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredPosts.slice(1).map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm text-primary font-medium mb-3">
                      {post.category}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-32 px-4 bg-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Join Our Newsletter
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get weekly stories, tips, and updates straight to your inbox. No spam, just good stuff!
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            />
            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
