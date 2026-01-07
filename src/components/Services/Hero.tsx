import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section className="relative w-full border-b border-border">
            <div className="mx-6 md:mx-12">
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
                    {/* Left Column */}
                    <div className="pt-20 pb-20 pr-4 lg:pr-6 pl-4 lg:pl-8 border-r border-border min-h-[600px] relative flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-[2px] bg-[#FF5757]"></div>
                            <span className="text-[#FF5757] font-bold tracking-wider uppercase">SERVICES</span>
                        </div>

                        {/* Image from screenshot 1 */}
                        <div className="w-full h-64 bg-gray-200 mt-4 overflow-hidden rounded-sm relative">
                            {/* Placeholder image resembling the people working in the screenshot */}
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Team working"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="pt-32 pb-20 pl-4 lg:pl-8 pr-4 lg:pr-8 flex flex-col justify-center">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
                            Shape The Future Of Your <br />
                            Brand With WinzTech
                        </h1>
                        <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                            From stunning websites and captivating branding to powerful SEO, marketing strategies, and
                            custom app development, WinzTech helps businesses thrive online.
                        </p>

                        <Button className="w-fit bg-black text-white hover:bg-gray-800 rounded-none px-8 py-6 text-base">
                            Start Your Project
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
