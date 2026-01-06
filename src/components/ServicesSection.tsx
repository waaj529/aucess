import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, Monitor } from "lucide-react";

// Import service images
import webDesignImg from "@/assets/services/web-design.jpg";
import seoMarketingImg from "@/assets/services/seo-marketing.jpg";
import contentStrategyImg from "@/assets/services/content-strategy.jpg";
import appDevelopmentImg from "@/assets/services/app-development.jpg";
import ecommerceImg from "@/assets/services/ecommerce.jpg";
import uxDesignImg from "@/assets/services/ux-design.jpg";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const services: Service[] = [
  {
    id: "web-design",
    title: "Web Design & Development",
    description:
      "We craft visually stunning, user-centric websites that drive engagement and deliver seamless experiences across all devices, blending design, functionality, and performance to elevate your brand's online presence.",
    image: webDesignImg,
    tags: ["UX Design", "Custom CMS", "UX Strategy", "Responsive Layouts"],
  },
  {
    id: "seo-marketing",
    title: "SEO & Digital Marketing",
    description:
      "We implement data-driven SEO strategies and targeted digital marketing campaigns that increase visibility, attract quality traffic, and convert visitors into loyal customers.",
    image: seoMarketingImg,
    tags: ["Google Analytics", "Moz", "Mailchimp", "Meta Ads Manager"],
  },
  {
    id: "content-strategy",
    title: "Content Creation & Strategy",
    description:
      "We develop compelling content strategies that resonate with your audience, build brand authority, and drive meaningful engagement across all digital channels.",
    image: contentStrategyImg,
    tags: ["Notion", "Trello", "Buffer", "Grammarly"],
  },
  {
    id: "app-development",
    title: "App Development",
    description:
      "We build intuitive, high-performance mobile and web apps tailored to your users' needs, delivering seamless functionality and an exceptional user experience.",
    image: appDevelopmentImg,
    tags: ["React Native", "Flutter", "Node.js", "Swift (For iOS)"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    description:
      "We create powerful e-commerce platforms that streamline your online sales, enhance customer experience, and scale with your growing business needs.",
    image: ecommerceImg,
    tags: ["Klaviyo", "PayPal", "Wix", "Magento"],
  },
  {
    id: "ux-design",
    title: "UX/UI Design",
    description:
      "Our UX/UI designs focus on user behavior and aesthetics to create intuitive, accessible, and engaging interfaces that delight users and enhance brand loyalty.",
    image: uxDesignImg,
    tags: ["Figma", "Sketch", "Adobe XD", "Framer"],
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
      className="lg:sticky lg:top-24 w-full bg-background rounded-md transition-all duration-300"
      style={{
        zIndex: index + 1, // Later cards have higher z-index to cover earlier ones
      }}
    >
      <motion.div
        className="bg-background rounded-md shadow-[0_-8px_30px_rgba(0,0,0,0.12)]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Image Container with hover zoom */}
        <div className="relative overflow-hidden rounded-t-md group cursor-pointer">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
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
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6 max-w-2xl">
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
              <span className="text-sm font-medium uppercase tracking-wider">
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
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
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
          <div className="relative z-20 pl-4 lg:pl-8">
            {services.map((service, index) => (
              <div key={service.id} className="relative" style={{ marginBottom: index === services.length - 1 ? 0 : '2rem' }}>
                {/* Invisible sentinel to measure proximity to viewport center */}
                <div
                  ref={(el) => setSentinelRef(el, index)}
                  aria-hidden
                  className="absolute -top-32 left-0 h-8 w-8 pointer-events-none"
                />

                <ServiceCard
                  service={service}
                  index={index}
                  totalCards={services.length}
                />
              </div>
            ))}
            {/* Extra space at bottom for last card to be visible */}
            <div className="h-32" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
