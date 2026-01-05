import { Link, Rocket, Mountain, Dumbbell, Leaf, Zap } from "lucide-react";

const LogosSection = () => {
  const logos = [
    { name: "Northlink", icon: Link },
    { name: "Submit14", icon: Rocket },
    { name: "Adventure", icon: Mountain },
    { name: "Fitfinder", icon: Dumbbell },
    { name: "Greeninfina", icon: Leaf },
    { name: "JapanElectronics", icon: Zap },
  ];

  // Double the logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="relative bg-background">
      {/* Content container with margins matching border lines */}
      <div className="mx-6 md:mx-12">
        {/* Two column layout aligned to 30%/70% grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] min-h-[80px]">
          {/* Left Column - Text (30%) */}
          <div className="flex items-center py-5 md:py-6 pr-6 lg:pr-8">
            <p className="text-sm text-muted-foreground italic">
              Trusted by thousands of
              <br />
              companies around the world
            </p>
          </div>

          {/* Right Column - Logos Marquee (70%) */}
          <div className="flex items-center overflow-hidden py-5 md:py-6 pl-6 lg:pl-8">
            <div className="flex animate-marquee">
              {duplicatedLogos.map((logo, index) => {
                const IconComponent = logo.icon;
                return (
                  <div
                    key={`${logo.name}-${index}`}
                    className="flex items-center gap-2 text-foreground shrink-0 mx-6 lg:mx-8"
                  >
                    <IconComponent size={18} strokeWidth={1.5} />
                    <span className="font-medium text-sm whitespace-nowrap">
                      {logo.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
