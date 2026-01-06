import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, Monitor } from "lucide-react";

// Import service images
import aiSoftwareImg from "@/assets/services/ai-software-v2.png";
import aiAppsImg from "@/assets/services/ai-apps-v2.png";
import machineLearningImg from "@/assets/services/machine-learning-v2.png";
import computerVisionImg from "@/assets/services/computer-vision-v2.png";
import automationImg from "@/assets/services/automation-v2.png";
import agenticAiImg from "@/assets/services/agentic-ai-v2.png";
import devopsImg from "@/assets/services/devops-v2.png";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const services: Service[] = [
  {
    id: "ai-websites-software",
    title: "AI Websites & Software",
    description:
      "We build intelligent, adaptive websites and robust software solutions infused with AI capabilities to deliver dynamic user experiences and streamline business operations.",
    image: aiSoftwareImg,
    tags: ["AI Integration", "Next.js", "Cloud Architecture", "SaaS Development"],
  },
  {
    id: "ai-mobile-apps",
    title: "AI Mobile Apps",
    description:
      "Create next-generation mobile applications with embedded AI features, providing smart, personalized interactions and seamless performance on iOS and Android.",
    image: aiAppsImg,
    tags: ["React Native", "Flutter", "Smart Features", "Cross-Platform"],
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description:
      "Harness the power of data with custom machine learning models designed to predict trends, optimize decision-making, and uncover hidden opportunities.",
    image: machineLearningImg,
    tags: ["Predictive Analytics", "Deep Learning", "Data Mining", "Neural Networks"],
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description:
      "Implement advanced computer vision systems that enable machines to interpret and understand visual information for automation, security, and analysis.",
    image: computerVisionImg,
    tags: ["Image Recognition", "Object Detection", "Video Analytics", "Visual AI"],
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "Drive efficiency by automating complex workflows and repetitive tasks with intelligent logic, reducing operational costs and minimizing human error.",
    image: automationImg,
    tags: ["Workflow Automation", "RPA", "Business Logic", "Optimized Processes"],
  },
  {
    id: "agentic-ai-chatbot",
    title: "Agentic AI & Chatbots",
    description:
      "Deploy autonomous agents and sophisticated chatbots capable of reasoning, acting, and engaging with users to provide support and execute tasks autonomously.",
    image: agenticAiImg,
    tags: ["Conversational AI", "NLP", "Autonomous Agents", "Support Bots"],
  },
  {
    id: "devops-deployment",
    title: "DevOps & Deployment",
    description:
      "Ensure rapid, reliable, and secure software delivery with modern DevOps practices, automated CI/CD pipelines, and scalable cloud infrastructure management.",
    image: devopsImg,
    tags: ["CI/CD Pipelines", "Docker & Kubernetes", "Cloud Infrastructure", "Site Reliability"],
  },
];

const ServiceCard = ({
  service,
  index,
  totalCards,
}: {
  service: Service;
  index: number;
  totalCards: number;
}) => {
  return (
    <div
      id={service.id}
      className="lg:sticky lg:top-24 w-full self-stretch rounded-2xl transition-all duration-300"
      style={{
        zIndex: index + 1, // Later cards have higher z-index to cover earlier ones
      }}
    >
      <motion.div
        className="flex flex-col justify-center items-start p-6 bg-white rounded-2xl shadow-[0_4px_8px_0_rgba(0,0,0,0.08)]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Image Container with hover zoom */}
        <div className="w-full self-stretch relative overflow-hidden rounded-2xl group cursor-pointer mb-6">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[440px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="w-full">
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-6">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm border border-foreground/20 rounded-full text-foreground/80 hover:border-foreground/40 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            className="text-foreground/80 mb-6 max-w-2xl"
            style={{
              color: "#323437",
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            {service.description}
          </p>

          {/* Explore More Link */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-foreground font-semibold hover:gap-3 transition-all duration-300 group"
          >
            Explore More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setSentinelRef = useCallback((el: HTMLDivElement | null, i: number) => {
    sentinelRefs.current[i] = el;
  }, []);

  // Proximity-based scroll detection with debounce - only one card active at a time
  useEffect(() => {
    let frame = 0;
    let currentActiveIndex = activeIndex;
    let lastChangeTime = 0;
    const DEBOUNCE_MS = 300; // Prevent rapid switching

    const updateActiveByProximity = () => {
      frame = requestAnimationFrame(updateActiveByProximity);

      if (!sentinelRefs.current.length) return;

      const now = Date.now();
      if (now - lastChangeTime < DEBOUNCE_MS) return;

      // Compute distance of each sentinel to viewport center (1/3 from top)
      const centerY = window.innerHeight / 3;
      let bestIndex = 0;
      let bestDist = Infinity;

      sentinelRefs.current.forEach((node, i) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });

      // Add hysteresis - only switch if significantly closer
      if (bestIndex !== currentActiveIndex && bestDist < 200) {
        currentActiveIndex = bestIndex;
        lastChangeTime = now;
        setActiveIndex(bestIndex);
      }
    };

    frame = requestAnimationFrame(updateActiveByProximity);
    return () => cancelAnimationFrame(frame);
  }, [activeIndex]);

  const scrollToService = (index: number) => {
    const sentinel = sentinelRefs.current[index];
    if (sentinel) {
      const offset = window.innerHeight / 3;
      const elementPosition = sentinel.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-background relative">

      <div className="relative z-20 mx-6 md:mx-12">
        {/* Section Header - Two Column Layout aligned to 30%/70% grid */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-[30%_70%] mb-16 md:mb-24">
          {/* Left Column - Label (30%) */}
          <div className="relative z-20 pr-4 lg:pr-6 pl-4 lg:pl-8">
            <motion.div
              className="flex items-center gap-2 text-accent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Monitor className="w-5 h-5" />
              <span
                className="uppercase tracking-wider"
                style={{
                  color: "#ff5757",
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: "24px",
                }}
              >
                Our Services
              </span>
            </motion.div>
          </div>

          {/* Right Column - Heading & Description (70%) */}
          <motion.div
            className="relative z-20 pl-4 lg:pl-8 mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] tracking-tight">
              Delivering Excellence Through Expertise And Innovation
            </h2>
            <p
              className="mt-6 text-muted-foreground max-w-2xl"
              style={{
                color: "#323437",
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              Our suite of services is designed to help businesses thrive in the
              digital world. From tailored web development and innovative design
              to robust marketing strategies, we offer everything you need to
              scale and succeed.
            </p>
          </motion.div>
        </div>

        {/* Two Column Layout - Services aligned to 30%/70% grid */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-[30%_70%]">
          {/* Left Sidebar - Sticky on Desktop, Horizontal Scroll on Mobile (30%) */}
          <div className="relative z-20 pr-4 lg:pr-6 pl-4 lg:pl-8">
            {/* Mobile: Horizontal Scrollable Menu */}
            <div className="lg:hidden overflow-x-auto pb-4 -mx-6 px-6">
              <div className="flex gap-4 min-w-max">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => scrollToService(index)}
                    className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-full border transition-all duration-300 ${activeIndex === index
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-muted-foreground border-border hover:border-foreground/40"
                      }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop: Sticky Sidebar */}
            <div className="hidden lg:block sticky top-32">
              <nav className="space-y-1">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => scrollToService(index)}
                    className={`w-full flex items-center justify-between py-4 text-left transition-all duration-300 ease-out group ${activeIndex === index
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground/70"
                      }`}
                  >
                    <span
                      className={`text-lg font-medium transition-all duration-300 ${activeIndex === index ? "font-bold" : ""
                        }`}
                    >
                      {service.title}
                    </span>
                    {activeIndex === index ? (
                      <ArrowUpRight className="w-5 h-5" />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" fill="none">
                        <path d="M12.8934 1.62529C12.7879 1.5198 12.7287 1.37672 12.7287 1.22754C12.7287 1.07836 12.7879 0.93528 12.8934 0.829791C12.9989 0.724302 13.142 0.665039 13.2912 0.665039C13.4404 0.665039 13.5834 0.724302 13.6889 0.829791L18.4619 5.60276C18.5674 5.70825 18.6266 5.85133 18.6266 6.00051C18.6266 6.1497 18.5674 6.29277 18.4619 6.39826L13.6889 11.1712C13.5834 11.2767 13.4404 11.336 13.2912 11.336C13.142 11.336 12.9989 11.2767 12.8934 11.1712C12.7879 11.0657 12.7287 10.9227 12.7287 10.7735C12.7287 10.6243 12.7879 10.4812 12.8934 10.3757L16.7062 6.56293L0.563211 6.56372C0.413838 6.56372 0.270584 6.50438 0.164961 6.39876C0.059339 6.29314 0 6.14988 0 6.00051C0 5.85114 0.059339 5.70788 0.164961 5.60226C0.270584 5.49664 0.413838 5.4373 0.563211 5.4373L16.7062 5.4381L12.8934 1.62529Z" fill="#777777" />
                      </svg>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content - Stacked Service Cards (70%) */}
          <div className="relative z-20 pl-4 lg:pl-8 pr-4 lg:pr-8">
            {services.map((service, index) => (
              <div key={service.id} className="contents">
                {/* Invisible sentinel to measure proximity to viewport center */}
                <div
                  ref={(el) => setSentinelRef(el, index)}
                  aria-hidden
                  className="absolute left-0 w-full h-px -mt-32 pointer-events-none opacity-0"
                  style={{ top: 'auto', position: 'absolute' }} // This sentinel needs to be positioned relative to the flow? No, if I use "contents", the children are direct children of the grid column.
                />
                {/* 
                    Detailed Explanation for "contents":
                    "contents" makes the wrapper disappear from the accessibility tree and layout tree, 
                    so its children act as direct children of the parent grid/flex.
                    However, "absolute" positioning inside "contents" can be tricky.
                    
                    Better approach:
                    Don't use a wrapper. Return a Fragment.
                    BUT, we need to attach the key.
                    
                    Let's just use the ServiceCard as the main block.
                    The sentinel can be INSIDE the ServiceCard component or just a sibling.
                    
                    If I make ServiceCard sticky, it MUST be a direct child of the container for "sticky" to work relative to that container.
                    The current wrapper `div className="relative"` creates a NEW stacking context/containing block, so `sticky` only sticks WITHIN that div. Since that div is exactly the height of the card, "sticky" does nothing effectively (or it sticks for 0 pixels).
                    
                    FIX: Remove the wrapper. Pass the sentinel ref to the ServiceCard or put it before it.
                 */}

                {/* Sentinel needs to be in the document flow to mark the position. 
                     If I put it before the sticky element, it will scroll away.
                     That works for scrolling detection.
                  */}
                <div
                  ref={(el) => setSentinelRef(el, index)}
                  className="absolute pointer-events-none opacity-0"
                  style={{ marginTop: '-20vh' }} // Offset for detection
                />

                <ServiceCard
                  service={service}
                  index={index}
                  totalCards={services.length}
                />

                {/* Spacer between cards effectively (margin bottom) */}
                <div className="h-8 lg:h-32" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
