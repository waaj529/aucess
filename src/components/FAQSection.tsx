import { MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What Services Do You Offer?",
    answer: "We provide a full range of digital services, including website design and development, branding, SEO, digital marketing, and custom development. Our solutions are tailored to fit your unique business needs."
  },
  {
    question: "How Much Does A Website Cost?",
    answer: "The cost of a website depends on its complexity, features, and design requirements. We offer customized solutions to fit different budgets. Contact us for a detailed quote based on your specific needs."
  },
  {
    question: "How Long Does It Take To Build A Website?",
    answer: "A typical website takes 4-8 weeks to complete, depending on the scope and complexity. We work closely with you to ensure timely delivery without compromising on quality."
  },
  {
    question: "Do You Provide Ongoing Support After The Website Is Live?",
    answer: "Yes, we offer comprehensive maintenance and support packages to keep your website running smoothly. This includes updates, security monitoring, backups, and technical support."
  },
  {
    question: "Can You Help With SEO And Digital Marketing?",
    answer: "Absolutely! We offer SEO optimization, content strategy, social media marketing, and paid advertising services to help your business grow online and reach your target audience effectively."
  },
  {
    question: "How Do We Get Started?",
    answer: "Getting started is easy! Simply reach out to us through our contact form or give us a call. We'll schedule a consultation to discuss your project requirements and provide a customized proposal."
  }
];

const FAQSection = () => {
  return (
    <section className="relative bg-muted py-24 lg:py-32">

      <div className="relative z-20 mx-6 md:mx-12">
        {/* Two column layout aligned to 30%/70% grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
          {/* Left Column - Label (30%) */}
          <div className="pr-4 lg:pr-6 pl-4 lg:pl-8">
            <div className="flex items-center gap-2 text-primary">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wider uppercase">FAQ</span>
            </div>
          </div>

          {/* Right Column - Accordion (70%) */}
          <div className="pl-4 lg:pl-8 mt-8 lg:mt-0">
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-background"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
