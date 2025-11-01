import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPostsData = [
  {
    id: "tech-club-launch",
    title: "We're Starting a Tech Club! Here's Why You Should Join",
    content: `
# Welcome to Our Tech Club!

I'm beyond excited to share that we're launching a tech club, and I want you to be part of it!

## What's This All About?

Every Thursday evening at 6 PM, we're opening our doors (or Zoom room, depending on the week) for developers, designers, and tech enthusiasts to come together, share ideas, and build cool stuff.

## Why We're Doing This

Honestly? Because working on tech can be lonely. Sure, we have Stack Overflow and Discord servers, but there's something special about sitting in a room with people who get excited about the same nerdy stuff you do.

Last month, I was stuck on a React problem for hours. One conversation with a friend over coffee? Solved in 10 minutes. That's the power of community.

## What We'll Do

- **Show & Tell Sessions**: Working on something cool? Show it off! Get feedback, share your process, and inspire others.
- **Hack Nights**: Bring your laptop, grab some pizza, and work on personal projects together.
- **Lightning Talks**: 5-minute presentations on anything tech-related. Learned something new? Teach us!
- **Collaborative Projects**: Want to contribute to open source but don't know where to start? Let's figure it out together.

## Who Should Join?

Everyone! Seriously. Whether you're:
- A seasoned developer with 20 years of experience
- A designer curious about code
- A complete beginner who just finished their first tutorial
- Someone who just likes being around tech people

You're welcome here.

## The Rules (Yes, There Are Some)

1. **Be Kind**: Everyone was a beginner once. No question is too basic.
2. **Stay Curious**: We're all here to learn.
3. **Share Knowledge**: If you know something others don't, teach them!
4. **Have Fun**: This isn't a job. Leave your stress at the door.

## How to Join

Just show up! First meeting is next Thursday at 6 PM. We'll be at our office (123 Tech Street) or online if you prefer.

Can't make it every week? No worries. Come when you can. This is flexible by design.

## What We're NOT

- A bootcamp (we're not here to certify you)
- A networking event for job hunting (though hey, connections happen)
- Exclusive or elite (anyone can join, no experience required)

## I'm Nervous. Is That Normal?

Absolutely! Walking into a room of strangers is scary. But here's the thing: everyone else is probably nervous too. We all share that awkward "do I belong here?" feeling.

First timer? Look for me - I'll be wearing a bright blue ReView hoodie. I'll introduce you around and make sure you feel welcome.

## The Bottom Line

Life's too short to code alone. Come build something with us.

See you Thursday!

*- The ReView Team*

P.S. Yes, there will be snacks. Good snacks.
    `,
    author: "The ReView Team",
    date: "March 20, 2024",
    readTime: "4 min read",
    category: "Community",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=600&fit=crop",
  },
  {
    id: "ai-gone-wrong",
    title: "That Time Our AI Model Went Completely Off the Rails",
    content: `
# When AI Goes Rogue

Let me tell you about the time our product recommendation AI started suggesting cat photos for literally everything.

## The Setup

We were so proud. Three months of training data, thousands of user interactions, and an AI that was supposed to recommend products based on browsing behavior.

Launch day came. Everything looked perfect. The demo worked flawlessly.

Then real users got their hands on it.

## The Problem

Within 2 hours, we started getting tickets:
- "Why is your site recommending cat pictures when I'm shopping for laptops?"
- "I was looking at office chairs and got suggestions for... more cats?"
- "Your AI really likes cats. Is this intentional?"

## The Investigation

At first, we thought it was isolated. Maybe a few users with weird browsing history?

Nope. EVERYONE was getting cat recommendations. Laptops? Cats. Shoes? Cats. Industrial machinery? Believe it or not, cats.

## The Cause

Turns out, during our training phase, one developer (who shall remain nameless) used their personal browsing data to "supplement" our training set.

That developer? A cat enthusiast with 50,000 saved cat images and a habit of looking at cat photos between every other website.

Our AI learned that cat photos were the universal answer to everything.

## The Fix

We had to:
1. Emergency rollback (goodbye, three months of training)
2. Clean the training data (manually reviewed thousands of entries)
3. Implement better data validation
4. Add safeguards against single-source bias
5. Retrain the entire model

Total time to fix: 2 weeks.
Total cost: Don't ask.
Lessons learned: Priceless.

## What We Learned

**Lesson 1**: Your training data is only as good as your data hygiene.

**Lesson 2**: One biased source can corrupt everything.

**Lesson 3**: Always have diverse data sources. Always.

**Lesson 4**: Test with real user patterns, not developer patterns.

**Lesson 5**: Have rollback plans. Seriously.

## The Silver Lining

The internet loved it. We got written up on tech blogs. Our social media engagement tripled. Some users actually missed the cat recommendations.

One customer even asked, "Can you make a cats-only mode?"

(We're considering it.)

## The Takeaway

AI is powerful, but it's only as smart as the data you feed it. And if you feed it cats, you get cats.

Now if you'll excuse me, I need to go review our data pipelines again.

*- Sarah Johnson, Lead AI Engineer*
    `,
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "6 min read",
    category: "AI & Automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
  },
  // Add abbreviated content for remaining posts
  {
    id: "first-project-lessons",
    title: "5 Things I Wish I Knew Before Starting My First Big Project",
    content: `
# Lessons From the Trenches

Starting my first big project was exciting, terrifying, and educational in ways I never expected. Here are the things I wish someone had told me.

## 1. It Will Take Longer Than You Think

My estimate: 2 weeks.
Reality: 6 weeks.

Triple your time estimates. Then add 20%. You'll still probably be wrong, but at least you'll be closer.

## 2. Scope Creep is Real (And Deadly)

"Just one more feature" is a trap. Set boundaries. Stick to them. That shiny new idea can wait for v2.

## 3. Documentation Isn't Optional

Future you will curse present you for not documenting. Write it down. Your memory isn't as good as you think.

## 4. Ask For Help Sooner

I spent 3 days stuck on something an experienced dev solved in 10 minutes. Pride is expensive. Questions are free.

## 5. Perfect is the Enemy of Done

Shipped and imperfect beats perfect and never released. Launch it. Get feedback. Iterate.

*- Michael Chen*
    `,
    author: "Michael Chen",
    date: "March 12, 2024",
    readTime: "8 min read",
    category: "Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPostsData.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 -mt-32 relative z-10 max-w-4xl">
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-large">
          {/* Back Button */}
          <Link to="/blog">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Category */}
          <div className="text-sm text-primary font-medium mb-4">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                {post.author.charAt(0)}
              </div>
              <span className="font-medium text-foreground">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-foreground">{paragraph.replace('# ', '')}</h1>;
              } else if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-6 mb-3 text-foreground">{paragraph.replace('## ', '')}</h2>;
              } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <p key={index} className="font-semibold my-4 text-foreground">{paragraph.replace(/\*\*/g, '')}</p>;
              } else if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
                return <p key={index} className="italic my-4 text-muted-foreground">{paragraph.replace(/\*/g, '')}</p>;
              } else if (paragraph.startsWith('- ')) {
                return <li key={index} className="ml-6 my-2 text-foreground">{paragraph.replace('- ', '')}</li>;
              } else if (paragraph.trim()) {
                return <p key={index} className="my-4 text-foreground leading-relaxed">{paragraph}</p>;
              }
              return null;
            })}
          </div>

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl flex-shrink-0">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-lg text-foreground mb-1">{post.author}</div>
                <div className="text-muted-foreground">
                  Part of the ReView team, sharing real experiences from the world of tech development.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-foreground">More Stories</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPostsData.filter(p => p.id !== id).slice(0, 2).map((relatedPost, index) => (
              <Link key={index} to={`/blog/${relatedPost.id}`}>
                <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-medium transition-all">
                  <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="text-sm text-primary font-medium mb-2">{relatedPost.category}</div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{relatedPost.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{relatedPost.date}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
