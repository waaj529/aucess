import { MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-muted">
      
      <div className="relative mx-6 md:mx-12">
        {/* Two Column Layout aligned to 30%/70% grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] border-t border-b border-border">
          {/* Left side - Label (30%) */}
          <div className="flex items-center gap-2 pr-6 lg:pr-8 py-16 md:py-24">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium tracking-wide uppercase text-sm">
              Connect With Winztech
            </span>
          </div>

          {/* Right side - Content (70%) */}
          <div className="pl-6 lg:pl-8 py-16 md:py-24 flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight mb-4">
              Got A Project In Mind?
            </h2>
            <p className="text-2xl md:text-3xl text-foreground font-medium">
              Let's Talk
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
