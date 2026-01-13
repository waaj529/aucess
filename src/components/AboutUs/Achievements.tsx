import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);

    const awards = [
        {
            image: "https://images.unsplash.com/photo-1533227297464-60f2a8f91f14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Best Design 2023",
            organization: "Luminous Interactive"
        },
        {
            image: "https://images.unsplash.com/photo-1565514020125-998ac55a4358?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Innovation Award",
            organization: "Tech Giants"
        },
        {
            image: "https://images.unsplash.com/photo-1622675363311-3e1904c4d488?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Agency of the Year",
            organization: "Digital World"
        },
        {
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Top Rated Plus",
            organization: "Upwork"
        },
        {
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Level 2 Seller",
            organization: "Fiverr"
        },
        {
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "PSEB Registered",
            organization: "Pakistan Software Export Board"
        },
        {
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Registered LLC",
            organization: "United States"
        }
    ];

    useEffect(() => {
        const section = sectionRef.current;
        const trigger = triggerRef.current;
        const cardsContainer = cardsContainerRef.current;

        if (!section || !trigger || !cardsContainer) return;

        const getScrollAmount = () => {
            const containerWidth = cardsContainer.scrollWidth;
            const parentWidth = cardsContainer.parentElement?.clientWidth || window.innerWidth;
            return -(containerWidth - parentWidth + 200);
        };

        const timeoutId = setTimeout(() => {
            const ctx = gsap.context(() => {
                gsap.to(cardsContainer, {
                    x: getScrollAmount,
                    ease: "none",
                    scrollTrigger: {
                        trigger: trigger,
                        start: "top top",
                        end: () => `+=${cardsContainer.scrollWidth - (cardsContainer.parentElement?.clientWidth || window.innerWidth) + 200}`,
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                });
            }, section);

            (sectionRef as any).gsapContext = ctx;
        }, 100);

        const handleResize = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("resize", handleResize);
            ScrollTrigger.getAll().forEach(st => st.kill());
            if ((sectionRef as any).gsapContext) {
                (sectionRef as any).gsapContext.revert();
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full border-b border-border bg-background">
            <div ref={triggerRef} className="min-h-screen overflow-hidden relative">
                <div className="mx-6 md:mx-12 h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] h-full">
                        {/* Left Column - Sticky Label */}
                        <div className="lg:row-span-2 pt-20 pb-20 pr-4 lg:pr-6 pl-4 lg:pl-8 border-r border-border relative z-20">
                            <div className="sticky top-32">
                                <div className="flex items-center gap-4">
                                    <Award className="text-[#FF5757] w-5 h-5" />
                                    <span className="text-[#FF5757] font-bold tracking-wider uppercase">OUR ACHIEVEMENTS</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Title & Description */}
                        <div className="pt-20 pb-12 pl-4 lg:pl-8 pr-4 lg:pr-8 relative z-20">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">Recognized For Excellence</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                At Aucess, our passion for innovation and commitment to excellence have earned us accolades in the digital industry. Here are just a few of the awards and recognitions we've received for our work.
                            </p>
                        </div>

                        {/* Cards Container - Horizontal Scroll */}
                        <div className="lg:col-start-2 pl-4 lg:pl-8 overflow-hidden pb-24 pt-8 relative z-20">
                            <div
                                ref={cardsContainerRef}
                                className="flex gap-8 pr-24 w-max"
                            >
                                {awards.map((award, index) => (
                                    <div
                                        key={index}
                                        className="group perspective-1000 flex-shrink-0 w-[300px] aspect-[3/4]"
                                    >
                                        <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                                            {/* Front Side */}
                                            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden bg-gray-100 border border-border">
                                                <img
                                                    src={award.image}
                                                    alt={award.title}
                                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                                />
                                            </div>

                                            {/* Back Side */}
                                            <div
                                                className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-lg p-6 flex flex-col justify-center items-center text-center shadow-lg border border-border"
                                            >
                                                <h3 className="text-2xl font-bold mb-2 text-black leading-tight">
                                                    Awarded by <br />
                                                    <span className="text-[#FF5757]">{award.organization}</span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
