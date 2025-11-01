import featureImg1 from "@/assets/feature-1.mp4";
import featureImg2 from "@/assets/feature-2.mp4";
import featureImg3 from "@/assets/feature-3.mp4";

const Mission = () => {
  return (
    <section className="py-32 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Mission Statement */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our mission
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            To create impactful technology that simplifies lives, enhances experiences,
            and powers the future of innovation
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="space-y-32">
          {/* Feature 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <video
                src={featureImg1}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-2xl shadow-md"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Built for innovators
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded by visionary teens, we bring fresh perspectives and practical tech solutions
                to solve real-world challenges. We're not just building products—we're building the future.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team combines youthful energy with cutting-edge expertise to deliver solutions
                that stand out in today's competitive landscape.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                AI-powered solutions
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Harness the power of artificial intelligence to automate workflows,
                gain insights, and scale your business efficiently.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From intelligent chatbots to predictive analytics, we integrate AI seamlessly
                into your existing systems.
              </p>
            </div>
            <div>
              <video
                src={featureImg2}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-2xl shadow-md"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <video
                src={featureImg3}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-2xl shadow-md"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Collaborative approach
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We work closely with you at every step, ensuring transparency, communication,
                and alignment with your vision.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your success is our success. We're committed to delivering solutions that
                create measurable value for your business and community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
