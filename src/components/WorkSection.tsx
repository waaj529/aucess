import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Monitor, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
}

const ProjectCard = ({ image, title, description }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverPhase, setHoverPhase] = useState<'idle' | 'white' | 'dark'>('idle');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHovered) {
      setHoverPhase('white');
      timer = setTimeout(() => {
        setHoverPhase('dark');
      }, 200);
    } else {
      setHoverPhase('idle');
    }
    return () => clearTimeout(timer);
  }, [isHovered]);

  return (
    <div 
      className="group cursor-pointer flex-shrink-0 w-[350px] md:w-[400px] lg:w-[450px] relative rounded-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default light background */}
      <div 
        className="absolute inset-0 bg-background border border-border rounded-2xl transition-opacity duration-300"
        style={{ opacity: hoverPhase === 'idle' ? 1 : 0 }}
      />
      
      {/* White noise phase */}
      <div 
        className="absolute inset-0 rounded-2xl transition-opacity duration-200"
        style={{ 
          background: '#F1EFE9',
          opacity: hoverPhase === 'white' ? 1 : 0,
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            opacity: 0.3,
          }}
        />
      </div>

      {/* Dark noise phase */}
      <div 
        className="absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{ 
          background: '#1a1a1a',
          opacity: hoverPhase === 'dark' ? 1 : 0,
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            opacity: 0.15,
          }}
        />
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-5">
        {/* Image Container */}
        <div className="overflow-hidden rounded-xl border-4 border-transparent group-hover:border-background/20 transition-all duration-500">
          <img
            src={image}
            alt={title}
            className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Text Content - Always visible */}
        <div className="mt-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 tracking-tight transition-colors duration-500 text-foreground group-hover:text-white">
                {title}
              </h3>
              <p className="text-sm leading-relaxed transition-colors duration-500 text-muted-foreground group-hover:text-white/70">
                {description}
              </p>
            </div>
            <div className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 border-border group-hover:border-white/30">
              <ArrowUpRight className="w-4 h-4 transition-all duration-500 text-foreground group-hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
      title: "E-Commerce",
      description: "Boost your online sales with sleek, user-friendly shopping experiences designed to convert.",
    },
    {
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop",
      title: "Landing Page",
      description: "Capture attention and drive action with stunning, high-converting landing pages.",
    },
    {
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop",
      title: "Food Delivery",
      description: "Delicious meals at your fingertips with seamless ordering and delivery tracking.",
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      title: "Analytics Dashboard",
      description: "Transform complex data into clear insights with intuitive visualization tools.",
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      title: "Finance App",
      description: "Empower users to manage their finances with smart, secure mobile solutions.",
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
      title: "Tech Platform",
      description: "Build the future with scalable, innovative technology solutions.",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    const cardsContainer = cardsContainerRef.current;

    if (!section || !trigger || !cardsContainer) return;

    // Calculate how far we need to scroll horizontally
    const getScrollAmount = () => {
      const containerWidth = cardsContainer.scrollWidth;
      const viewportWidth = window.innerWidth;
      return -(containerWidth - viewportWidth + 100);
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.to(cardsContainer, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            start: "top top",
            end: () => `+=${cardsContainer.scrollWidth - window.innerWidth + 100}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }, section);

      // Store context for cleanup
      (sectionRef as any).gsapContext = ctx;
    }, 100);

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
      // Kill all ScrollTriggers first
      ScrollTrigger.getAll().forEach(st => st.kill());
      // Then revert context if it exists
      if ((sectionRef as any).gsapContext) {
        (sectionRef as any).gsapContext.revert();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-muted">
      
      {/* Pinned Container */}
      <div ref={triggerRef} className="min-h-screen overflow-hidden relative">
        <div className="mx-6 md:mx-12 pt-24 md:pt-32">
          {/* Two Column Layout aligned to 30%/70% grid */}
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-[30%_70%] border-t border-border">
            {/* Left side - Label (30%) */}
            <div className="relative z-20 lg:row-span-2 flex items-start gap-2 pr-6 lg:pr-8 pt-12">
              <Monitor className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium tracking-wide uppercase text-sm">
                Our Work
              </span>
            </div>

            {/* Right side - Title & Description (70%) */}
            <div className="relative z-20 pl-6 lg:pl-8 pt-12 pb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight mb-6">
                Innovative Solutions That Speak For Themselves
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Every project we undertake is a reflection of our commitment to excellence and innovation. From the first concept to final delivery, we ensure that our work not only meets but exceeds expectations. Browse through our portfolio to see how we've helped businesses grow, innovate, and achieve success.
              </p>
            </div>

            {/* Cards Container - Under the right column (70%) */}
            <div className="relative z-20 lg:col-start-2 pl-6 lg:pl-8 overflow-visible pb-24 pt-8 border-t border-border">
              <div
                ref={cardsContainerRef}
                className="flex gap-8 pr-24"
              >
                {projects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
