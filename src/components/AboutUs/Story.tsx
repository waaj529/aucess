const Story = () => {
    return (
        <section className="relative w-full border-b border-border">
            <div className="mx-6 md:mx-12">
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
                    {/* Left Column */}
                    <div className="pt-20 pb-20 pr-4 lg:pr-6 pl-4 lg:pl-8 border-r border-border">
                        <div className="sticky top-32">
                            <div className="flex items-center gap-4">
                                {/* Icon or Line - Image 2 shows a small red outline icon */}
                                <div className="text-[#FF5757]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(180 12 12)" />
                                        {/* Actually it looks like a quote icon or similar. I'll use a simple outline shape or Lucide */}
                                    </svg>
                                </div>
                                {/* Wait, the icon in image 2 is a 'comma' or quote looking thing red outline. 
                       I will use a simple text label for now or Lucide 'Quote'
                   */}
                                <span className="text-[#FF5757] font-bold tracking-wider uppercase">OUR STORY</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="pt-20 pb-20 pl-4 lg:pl-8 pr-4 lg:pr-8">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                            At Aucess, our story began with a simple belief — that great design and smart digital strategy can transform businesses. What started as a small, passionate team has grown into a full-service digital agency trusted by brands across industries. From day one, our mission has been clear: to empower businesses with bold ideas, beautifully crafted websites, and performance-driven digital solutions. We believe in collaboration, creativity, and constant innovation — values that fuel every project we take on. Whether it's building a brand from scratch, launching a sleek e-commerce store, or developing a custom app, we bring the same level of passion, precision, and purpose to everything we do. At Aucess, we don't just create digital experiences — we help shape the future of our clients' success.
                        </p>

                        {/* Large Image */}
                        <div className="w-full h-[400px] bg-gray-100 rounded-sm overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                                alt="Team Collaboration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
