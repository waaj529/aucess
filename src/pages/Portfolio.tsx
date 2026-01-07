import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VerticalDividers from "@/components/VerticalDividers";
import LogosSection from "@/components/LogosSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProjectCard from "@/components/ui/ProjectCard";
import { Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

// Using the same projects data 
const projects = [
    {
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
        title: "E-Commerce",
        description: "Boost your online sales with sleek, user-friendly shopping experiences designed to convert.",
    },
    {
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop",
        title: "Landing Page",
        description: "Capture attention and drive action with stunning, high-converting landing pages.",
    },
    {
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop",
        title: "Food Delivery",
        description: "Delicious meals at your fingertips with seamless ordering and delivery tracking.",
    },
    {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
        title: "Analytics Dashboard",
        description: "Transform complex data into clear insights with intuitive visualization tools.",
    },
    {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
        title: "Finance App",
        description: "Empower users to manage their finances with smart, secure mobile solutions.",
    },
    {
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
        title: "Tech Platform",
        description: "Build the future with scalable, innovative technology solutions.",
    },
];

const Portfolio = () => {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground relative">
            <VerticalDividers />
            <Navbar />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative w-full border-b border-border">
                    <div className="mx-6 md:mx-12">
                        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
                            {/* Left Column */}
                            <div className="pt-20 pb-20 pr-4 lg:pr-6 pl-4 lg:pl-8 border-r border-border min-h-[600px] relative flex flex-col gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-[2px] bg-[#FF5757]"></div>
                                    <span className="text-[#FF5757] font-bold tracking-wider uppercase">PORTFOLIO</span>
                                </div>

                                <div className="w-full h-64 bg-gray-200 mt-4 overflow-hidden rounded-sm relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                                        alt="Team working together"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="pt-32 pb-20 pl-4 lg:pl-8 pr-4 lg:pr-8 flex flex-col justify-center">
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight mb-8">
                                    Our Work Speaks For Itself
                                </h1>
                                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
                                    Explore the projects we've had the privilege to work on. Each one reflects our commitment to delivering innovative, impactful, and beautifully designed digital solutions.
                                </p>

                                <Button className="w-fit bg-black text-white hover:bg-gray-800 rounded-none px-8 py-6 text-base">
                                    Contact Us Today
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Logos Section - Reused */}
                <LogosSection />

                {/* Portfolio Overview & List */}
                <section className="relative pb-24 md:pb-32 bg-muted">
                    <div className="relative z-20 mx-6 md:mx-12 border-t border-border">
                        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">

                            {/* Left Column - Sticky Label (30%) */}
                            <div className="relative z-20 hidden lg:block border-r border-border pr-6 pt-12 pl-4 lg:pl-8">
                                {/* Optional Sticky Content or just spacing */}
                            </div>

                            {/* Right Column - Overview Text (70%) */}
                            <div className="relative z-20 pl-4 lg:pl-8 pt-12 pb-24">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Portfolio Overview</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                                    At WinzTech, we've had the pleasure of working with a diverse range of clients, helping them achieve digital success through custom web design, development, branding, and digital marketing solutions. Below are just a few examples of the work we're proud to have delivered.
                                </p>
                            </div>
                        </div>

                        {/* Actual Work List Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] border-border">
                            {/* Left Column - "OUR WORK" Label (30%) */}
                            <div className="relative z-20 border-r border-border pr-6 pt-12 pl-4 lg:pl-8">
                                <div className="sticky top-32 flex items-start gap-2">
                                    <Monitor className="w-5 h-5 text-[#ff5757]" />
                                    <span className="text-[#ff5757] font-bold tracking-wide uppercase text-sm">
                                        Our Work
                                    </span>
                                </div>
                            </div>

                            {/* Right Column - Title & Vertical Cards (70%) */}
                            <div className="relative z-20 pl-4 lg:pl-8 pt-12">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight mb-6">
                                    Innovative Solutions That Speak For Themselves
                                </h2>
                                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-16 max-w-3xl">
                                    Every project we undertake is a reflection of our commitment to excellence and innovation. From the first concept to final delivery, we ensure that our work not only meets but exceeds expectations. Browse through our portfolio to see how we've helped businesses grow, innovate, and achieve success.
                                </p>

                                {/* Vertical Cards Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-24">
                                    {projects.map((project) => (
                                        <div key={project.title} className="flex justify-center md:justify-start">
                                            <ProjectCard
                                                image={project.image}
                                                title={project.title}
                                                description={project.description}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials - Reused */}
                <TestimonialsSection />
            </main>
            <Footer />
        </div>
    );
};

export default Portfolio;
