import { useState, useRef, MouseEvent } from "react";
import { Sparkles } from "lucide-react";
import { motion, useSpring } from "motion/react";

const reasons = [
  {
    title: "Expertise & Experience",
    description: "With extensive experience in technology spanning software development, system architecture, and digital innovation, we bring a strong technical combined with strategic insight.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
  },
  {
    title: "Tailored Solutions",
    description: "We don't believe in one-size-fits-all. Every solution is custom-crafted to align with your unique business goals and challenges.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop"
  },
  {
    title: "Proven Results",
    description: "Our track record speaks for itself. We've helped businesses across industries achieve measurable growth and digital transformation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
  },
  {
    title: "Creative & Innovative Approach",
    description: "We blend creativity with cutting-edge technology to deliver solutions that are not just functional but also forward-thinking.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop"
  },
  {
    title: "End-To-End Service",
    description: "From ideation to deployment and beyond, we provide comprehensive support throughout your digital journey.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
  }
];

const WhyUsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const imagePos = {
    y: useSpring(0, spring),
  };

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const { clientY } = e;
    const relativeY = clientY - containerRect.top;
    // Clamp the Y position to keep image within bounds
    const clampedY = Math.max(0, Math.min(relativeY - 100, containerRect.height - 300));
    imagePos.y.set(clampedY);
  };

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section className="relative bg-muted py-24 lg:py-32">

      <div className="relative z-20 mx-6 md:mx-12">
        {/* Two column layout aligned to 30%/70% grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
          {/* Left Column - Label (30%) */}
          <div className="pr-4 lg:pr-6 pl-4 lg:pl-8">
            <div className="flex items-center gap-2 text-[#ff5757]">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-bold tracking-wider uppercase">Why Us</span>
            </div>
          </div>

          {/* Right Column - Content (70%) */}
          <div className="pl-4 lg:pl-6 mt-8 lg:mt-0">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight mb-6">
              Transforming Ideas Into Tangible Outcomes
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-12">
              At WinzTech, our work is all about results. We approach each project with a deep understanding of our clients' needs, ensuring every solution is crafted to deliver value.
            </p>

            {/* Two Column Grid for Reasons and Image */}
            <div
              ref={containerRef}
              onMouseMove={handleMove}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative"
            >
              {/* Left - Reasons List */}
              <div className="space-y-0">
                {reasons.map((reason, index) => (
                  <div
                    key={reason.title}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className="border-t border-border py-5 cursor-pointer transition-colors group"
                  >
                    <h3
                      className={`text-xl md:text-2xl font-semibold transition-colors duration-300 ${activeIndex === index && isHovering ? 'text-primary' : 'text-foreground group-hover:text-primary'
                        }`}
                    >
                      {reason.title}
                    </h3>
                  </div>
                ))}
                <div className="border-t border-border" />
              </div>

              {/* Right - Image Container (appears on hover) */}
              <div
                ref={imageContainerRef}
                className="relative hidden lg:block h-full min-h-[400px]"
              >
                <motion.div
                  className="absolute right-0 top-0"
                  style={{ y: imagePos.y }}
                  animate={{
                    opacity: isHovering ? 1 : 0,
                    scale: isHovering ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Unified Tilted Card with Image and Description */}
                  <div
                    className="relative bg-background p-4 shadow-xl rotate-3"
                    style={{ maxWidth: '320px' }}
                  >
                    {/* Image */}
                    <motion.img
                      key={activeIndex}
                      src={activeIndex !== null ? reasons[activeIndex].image : reasons[0].image}
                      alt={activeIndex !== null ? reasons[activeIndex].title : reasons[0].title}
                      className="w-full h-[280px] object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Description inside the same card */}
                    <motion.p
                      className="text-sm text-muted-foreground leading-relaxed mt-4 italic"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      key={`desc-${activeIndex}`}
                    >
                      {activeIndex !== null ? reasons[activeIndex].description : reasons[0].description}
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
