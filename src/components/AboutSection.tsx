import React from "react";
import { Clock } from "lucide-react";
import { MagicText } from "./ui/magic-text";
import { TextReveal } from "./TextReveal";
import clsx from "clsx";

const AboutSection = () => {
  const text = "At Aucess, We Build AI Solutions That Grow Your Business. We Start By Understanding Your Needs — Analyzing Requirements, Defining Clear Goals, And Recommending The Right Technology For Your Project. Our Team Stays Ahead Of The Curve, Researching The Latest Trends To Build, Train, And Test Solutions Before A Seamless Deployment. From Startups To Enterprises, We Deliver Smart, Reliable AI That Just Works.";

  return (
    <section className="relative bg-muted">
      <div className="relative z-20 mx-6 md:mx-12">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
          {/* Left Column - Sticky Label */}
          <div className="hidden lg:block">
            <div className="sticky top-32 pr-4 lg:pr-6 pl-4 lg:pl-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#ff5757]" />
                <span className="text-sm font-bold tracking-wider uppercase text-[#ff5757]">Who We Are</span>
              </div>
            </div>
          </div>

          {/* Mobile Label */}
          <div className="lg:hidden pr-4 pl-4 mb-8 pt-24">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#ff5757]" />
              <span className="text-sm font-bold tracking-wider uppercase text-[#ff5757]">Who We Are</span>
            </div>
          </div>

          {/* Right Column - Text Reveal */}
          <div className="pl-4 lg:pl-8">
            <TextReveal body={text} className="relative h-[200vh] w-full">
              {(tokens) => (
                <div className="sticky top-0 flex h-screen items-center">
                  <p className="text-[24px] md:text-[30px] lg:text-[36px] font-normal leading-relaxed text-black font-dm-sans">
                    {tokens.map((token, index) => (
                      <React.Fragment key={index}>
                        <TextReveal.Token index={index}>
                          {(isActive) => (
                            <span
                              className={clsx(
                                {
                                  "opacity-10": !isActive,
                                  "opacity-100": isActive
                                },
                                "transition-opacity duration-300"
                              )}
                            >
                              {token}
                            </span>
                          )}
                        </TextReveal.Token>
                        {' '}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              )}
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
