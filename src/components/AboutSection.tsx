import { Clock } from "lucide-react";
import { MagicText } from "./ui/magic-text";

const AboutSection = () => {
  const paragraph1Text = "At WinzTech, We Redefine Digital Excellence. With A Legacy Built On Innovation And Precision, We Partner With Ambitious Brands To Deliver Bespoke Digital Experiences That Drive Impact. Backed By Years Of Industry Expertise And A Commitment To Excellence.";
  const paragraph2Text = "We Serve A Diverse Portfolio Of Clients — From Emerging Startups To Global Enterprises. Our Philosophy Blends Strategy, Design, And Technology To Craft Solutions That Not Only Meet Expectations But Set New Standards.";

  return (
    <section
      className="relative bg-muted py-24 lg:py-32"
    >
      <div className="relative z-20 mx-6 md:mx-12">
        {/* Two column layout aligned to 30%/70% grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
          {/* Left Column - Label (30%) */}
          <div className="pr-4 lg:pr-6 pl-4 lg:pl-8">
            <div className="flex items-center gap-2 text-primary">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wider uppercase">Who We Are</span>
            </div>
          </div>

          {/* Right Column - Content (70%) */}
          <div className="pl-4 lg:pl-8 mt-8 lg:mt-0">
            {/* First Paragraph */}
            <MagicText
              text={paragraph1Text}
              highlightWords={["Digital Experiences"]}
              className="text-2xl lg:text-3xl xl:text-4xl font-medium leading-relaxed mb-8"
            />

            {/* Second Paragraph */}
            <MagicText
              text={paragraph2Text}
              className="text-2xl lg:text-3xl xl:text-4xl font-medium leading-relaxed"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
