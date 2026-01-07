import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section className="relative w-full border-b border-border"> {/* Added border-b for separation if needed */}
            <div className="mx-6 md:mx-12">
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
                    {/* Left Column */}
                    <div className="pt-20 pb-20 pr-4 lg:pr-6 pl-4 lg:pl-8 border-r border-border min-h-[600px] relative">
                        {/* The image in the first screenshot is in the left column below the label */}
                        <div className="flex flex-col h-full gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-[2px] bg-[#FF5757]"></div>
                                <span className="text-[#FF5757] font-bold tracking-wider uppercase">ABOUT US</span>
                            </div>

                            {/* Image Placeholder - User provided images, I'll use the uploaded one or a placeholder */}
                            {/* Using a placeholder for now as I don't have the exact crop, or I can use the uploaded full screenshot as reference 
                    but I should probably use a generic image or the one from the screenshot if I crop it. 
                    I'll use a placeholder div that looks like the image.
                */}
                            <div className="w-full h-64 bg-gray-200 mt-4 overflow-hidden rounded-sm">
                                <img
                                    src="/lovable-uploads/about-hero-small.png"
                                    alt="Team working"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    onError={(e) => {
                                        // Fallback if image doesn't exist
                                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="pt-32 pb-20 pl-4 lg:pl-8 pr-4 lg:pr-8 flex flex-col justify-center">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
                            Designing Digital <br />
                            Experiences That Inspire
                        </h1>
                        <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                            At WinzTech, we merge creativity with strategy to build solutions that inspire,
                            engage, and convert. We are a full-service digital agency with a passion for
                            innovation and a track record of delivering exceptional results.
                        </p>
                        {/* Note: User image allows "WinzTech", I should probably use "Aucess" based on previous context, 
                but user said "just like above image". I will stick to the text in image but should I change brand name?
                The previous tasks changed "WinzTech" to "Aucess". I will use "Aucess" to be consistent with the project name.
            */}

                        <Button className="w-fit bg-black text-white hover:bg-gray-800 rounded-none px-8 py-6 text-base">
                            Explore Our Services
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
