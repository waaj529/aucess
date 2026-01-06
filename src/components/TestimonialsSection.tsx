import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-column";
import { MessageSquare } from "lucide-react";

const testimonials: Testimonial[] = [
  {
    text: "Working with this team transformed our online presence completely. Their attention to detail and creative approach exceeded all our expectations.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Ethan Clark",
    role: "Co-Founder, InnovateX",
  },
  {
    text: "App development can be tricky, but they made it feel effortless. Their team built a robust, intuitive app that our users love.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Priya Desai",
    role: "CTO, VeloFit App",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Sarah Mitchell",
    role: "Customer Support Lead",
  },
  {
    text: "Their SEO strategy completely transformed our visibility. We went from page 10 to page 1 in just three months.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Marcus Chen",
    role: "Marketing Director",
  },
  {
    text: "Creating content that converts was always a challenge for us—until we partnered with them. Their content strategy doubled our newsletter sign-ups.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "David Harper",
    role: "Content Manager",
  },
  {
    text: "The e-commerce platform they built for us is incredibly fast and user-friendly. Our conversion rates have never been better.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Olivia Martinez",
    role: "Director, UrbanStyle",
  },
  {
    text: "Their UX design transformed our complex product into something our customers actually enjoy using. Game-changer for our business.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "James Wilson",
    role: "Product Manager",
  },
  {
    text: "From concept to launch, they delivered beyond expectations. The website drives 3x more leads than our previous one.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Emily Zhang",
    role: "CEO, TechStart",
  },
  {
    text: "Professional, creative, and incredibly responsive. They understood our brand and brought it to life digitally.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Ryan Thompson",
    role: "Brand Manager",
  },
];

const firstColumn = testimonials.slice(0, 5);
const secondColumn = testimonials.slice(4, 9);

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-muted overflow-hidden">

      <div className="relative z-20 mx-6 md:mx-12">
        {/* Two Column Layout aligned to 30%/70% grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] border-t border-border">
          {/* Left side - Label (30%) */}
          <div className="relative z-20 flex items-center gap-2 pr-4 lg:pr-6 pl-4 lg:pl-8 pt-12">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium tracking-wide uppercase text-sm">
              Testimonial
            </span>
          </div>

          {/* Right side - Content (70%) */}
          <div className="relative z-20 pl-4 lg:pl-8 pt-12">
            {/* Heading & Description */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight mb-6">
                Thoughts From Our Clients
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                The best reward for our hard work is the trust and satisfaction of our clients. Their feedback inspires us to continuously improve and innovate. Read about their experiences and how we've made a difference in their businesses.
              </p>
            </div>

            {/* Testimonial Columns - Two columns */}
            <div className="flex gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[600px]">
              <TestimonialsColumn testimonials={firstColumn} duration={18} className="flex-1" />
              <TestimonialsColumn testimonials={secondColumn} duration={22} className="flex-1 hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
