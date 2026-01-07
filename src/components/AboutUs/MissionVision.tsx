import { Eye, Target } from "lucide-react";

const MissionVision = () => {
    return (
        <section className="relative w-full">
            <div className="mx-6 md:mx-12">

                {/* Mission Section */}
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] border-b border-border">
                    {/* Left Column */}
                    <div className="pt-20 pb-20 pr-4 lg:pr-6 pl-4 lg:pl-8 border-r border-border">
                        <div className="sticky top-32">
                            <div className="flex items-center gap-4">
                                <Eye className="text-[#FF5757] w-5 h-5" />
                                <span className="text-[#FF5757] font-bold tracking-wider uppercase">OUR MISSION</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="pt-20 pb-20 pl-4 lg:pl-8 pr-4 lg:pr-8">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            We exist to empower forward-thinking brands with digital experiences that captivate, convert, and create lasting value. By fusing creativity, technology, and strategy, we help our clients solve real problems and spark digital transformation.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Craft high-impact solutions that drive measurable results.",
                                "Partner closely with clients to turn bold ideas into reality.",
                                "Combine creative thinking with strategic execution.",
                                "Build purposeful digital products with real-world impact.",
                                "Elevate brands in a fast-evolving digital-first world."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#FF5757] mt-2 shrink-0" />
                                    <span className="text-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Vision Section */}
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] border-b border-border">
                    {/* Left Column */}
                    <div className="pt-20 pb-20 pr-4 lg:pr-6 pl-4 lg:pl-8 border-r border-border">
                        <div className="sticky top-32">
                            <div className="flex items-center gap-4">
                                <Target className="text-[#FF5757] w-5 h-5" />
                                <span className="text-[#FF5757] font-bold tracking-wider uppercase">OUR VISION</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="pt-20 pb-20 pl-4 lg:pl-8 pr-4 lg:pr-8">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Our vision is to be a globally trusted creative agency where innovation meets intention — helping brands navigate the digital age with confidence and clarity. We aim to set new standards in digital excellence and leave a mark through meaningful, strategic design.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Lead the future of digital by shaping what's next.",
                                "Inspire creativity that connects, empowers, and endures.",
                                "Set benchmarks for quality, performance, and innovation."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#FF5757] mt-2 shrink-0" />
                                    <span className="text-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MissionVision;
