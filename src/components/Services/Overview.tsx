const Overview = () => {
    return (
        <section className="relative w-full">
            <div className="mx-6 md:mx-12">
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
                    {/* Left Column - Empty for spacing/structure consistency */}
                    <div className="hidden lg:block border-r border-border min-h-[300px]"></div>

                    {/* Right Column */}
                    <div className="pt-20 pb-20 pl-4 lg:pl-8 pr-4 lg:pr-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Overview Of Services</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            At Aucess, we offer a full spectrum of digital services designed to elevate your brand and drive meaningful
                            results. Whether you're looking to launch a stunning website, build a strong brand identity, improve your online
                            visibility, or develop a custom app, our team is equipped with the expertise to help you succeed. We combine
                            cutting-edge design, strategic thinking, and innovative technology to create seamless, user-centric solutions
                            that help you connect with your audience and grow your business.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
