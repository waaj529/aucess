import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VerticalDividers from "@/components/VerticalDividers";
import ContactSection from "@/components/ContactSection";
import { projects } from "@/data/work";
import { ArrowUpRight, Target, FileText, MessageSquare } from "lucide-react";

const WorkDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="min-h-screen bg-background relative font-sans">
            <VerticalDividers />
            <Navbar />

            <main className="pt-24 lg:pt-32">
                {/* Header Section */}
                <section className="relative z-20 mx-6 md:mx-12 border-b border-border">
                    <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
                        {/* Left Column */}
                        <div className="relative pr-4 lg:pr-12 pl-4 lg:pl-8 pb-12 lg:pb-0">
                            <div className="sticky top-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-px w-8 bg-[#ff5757]"></div>
                                    <span className="text-[#ff5757] font-bold tracking-wider uppercase text-xs md:text-sm">
                                        WHERE VISION MEETS EXECUTION
                                    </span>
                                </div>
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-auto object-cover aspect-[4/3] rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="lg:pl-12 lg:border-l border-border pr-4 lg:pr-12 pb-16 lg:pb-24">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-6 text-foreground tracking-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                                {project.description}
                            </p>

                            <button className="bg-foreground text-background px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacitygroup">
                                <span>Get Started Today</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Project Overview Section */}
                <section className="relative z-20 mx-6 md:mx-12 border-b border-border">
                    <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
                        {/* Left Column - Empty for spacing/alignment */}
                        <div className="hidden lg:block border-r border-border"></div>

                        {/* Right Column */}
                        <div className="lg:pl-12 pr-4 lg:pr-12 py-16 lg:py-24">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                                Project Overview Section – Detailed Breakdown
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                                {project.title} is a global e-commerce retailer specializing in fashion. Over the course of 3 months, we worked on a website redesign, focusing on mobile optimization and conversion rate optimization. Our goal was to modernize the site's design, enhance user experience, and streamline the checkout process to increase sales. The project included a complete visual overhaul, improved mobile responsiveness, and a seamless, user-friendly checkout process, ensuring the site would perform well across devices and boost conversion rates.
                            </p>

                            {/* Large Laptop Image */}
                            <div className="w-full rounded-2xl overflow-hidden mt-8">
                                <img
                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&auto=format&fit=crop"
                                    alt="Project Overview"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Challenge Section */}
                <section className="relative z-20 mx-6 md:mx-12 border-b border-border">
                    <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
                        {/* Left Column - Label */}
                        <div className="pt-16 lg:pt-24 lg:pr-12 lg:border-r border-border pl-4 lg:pl-8 pb-8 lg:pb-0">
                            <div className="sticky top-32 flex items-center gap-2">
                                <Target className="w-5 h-5 text-[#ff5757]" />
                                <span className="text-[#ff5757] font-bold tracking-wider uppercase text-sm">
                                    THE CHALLENGE
                                </span>
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="lg:pl-12 pr-4 lg:pr-12 py-16 lg:py-24">
                            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                                {project.challengeRef.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.challengeRef.images.map((img, idx) => (
                                    <div key={idx} className="rounded-xl overflow-hidden">
                                        <img
                                            src={img}
                                            alt={`Challenge ${idx + 1}`}
                                            className="w-full h-full object-cover aspect-[4/3]"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Solution Section */}
                <section className="relative z-20 mx-6 md:mx-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
                        {/* Left Column - Label */}
                        <div className="pt-16 lg:pt-24 lg:pr-12 lg:border-r border-border pl-4 lg:pl-8 pb-8 lg:pb-0">
                            <div className="sticky top-32 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-[#ff5757]" />
                                <span className="text-[#ff5757] font-bold tracking-wider uppercase text-sm">
                                    OUR SOLUTION
                                </span>
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="lg:pl-12 pr-4 lg:pr-12 py-16 lg:py-24">
                            <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line mb-12">
                                {project.solutionRef.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.solutionRef.images.slice(0, 2).map((img, idx) => (
                                    <div key={idx} className="rounded-xl overflow-hidden">
                                        <img
                                            src={img}
                                            alt={`Solution ${idx + 1}`}
                                            className="w-full h-full object-cover aspect-[3/2]"
                                        />
                                    </div>
                                ))}
                                {project.solutionRef.images[2] && (
                                    <div className="md:col-span-2 rounded-xl overflow-hidden">
                                        <img
                                            src={project.solutionRef.images[2]}
                                            alt="Solution Main"
                                            className="w-full h-full object-cover aspect-[2/1]"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Results & Impact Section */}
                <section className="relative z-20 mx-6 md:mx-12 border-b border-border">
                    <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
                        {/* Left Column - Label */}
                        <div className="pt-16 lg:pt-24 lg:pr-12 lg:border-r border-border pl-4 lg:pl-8 pb-8 lg:pb-0">
                            <div className="sticky top-32 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-[#ff5757]" />
                                <span className="text-[#ff5757] font-bold tracking-wider uppercase text-sm">
                                    RESULTS & IMPACT
                                </span>
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="lg:pl-12 pr-4 lg:pr-12 py-16 lg:py-24">
                            {project.resultsRef?.map((result, idx) => (
                                <div key={idx} className="mb-12 last:mb-0">
                                    {result.title && (
                                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                                            {result.title}
                                        </h3>
                                    )}
                                    <ul className="space-y-4">
                                        {result.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="w-3 h-3 rounded-full bg-[#ff5757] mt-2 flex-shrink-0" />
                                                <span className="text-lg text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Client Feedback Section */}
                <section className="relative z-20 mx-6 md:mx-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
                        {/* Left Column - Label */}
                        <div className="pt-16 lg:pt-24 lg:pr-12 lg:border-r border-border pl-4 lg:pl-8 pb-8 lg:pb-0">
                            <div className="sticky top-32 flex items-center gap-2">
                                <MessageSquare className="w-5 h-5 text-[#ff5757]" />
                                <span className="text-[#ff5757] font-bold tracking-wider uppercase text-sm">
                                    CLIENT FEEDBACK
                                </span>
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="lg:pl-12 pr-4 lg:pr-12 py-16 lg:py-24">
                            {project.clientFeedbackRef && (
                                <div className="bg-background p-8 md:p-12 rounded-lg shadow-sm">
                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={project.clientFeedbackRef.imageUrl}
                                                alt={project.clientFeedbackRef.author}
                                                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-lg md:text-xl text-foreground font-medium italic mb-8">
                                                "{project.clientFeedbackRef.quote}"
                                            </p>
                                            <div className="text-right">
                                                <div className="font-bold text-lg text-foreground">
                                                    {project.clientFeedbackRef.author}
                                                </div>
                                                <div className="text-muted-foreground text-sm uppercase tracking-wide">
                                                    {project.clientFeedbackRef.role}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <div className="border-t border-border">
                    <ContactSection />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default WorkDetails;
