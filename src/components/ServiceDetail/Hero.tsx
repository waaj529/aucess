import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Service } from "@/data/services";

const Hero = ({ service }: { service: Service }) => {
    return (
        <section className="relative pt-32 pb-20">
            <div className="relative z-20 mx-6 md:mx-12">
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12 lg:gap-0">

                    {/* Left Column */}
                    <div className="relative z-20 pr-4 lg:pr-6 pl-4 lg:pl-8 flex flex-col justify-end">
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-[2px] bg-[#ff5757]"></div>
                                <span className="text-[#ff5757] font-bold tracking-wider uppercase text-sm leading-tight max-w-[150px]">
                                    TAILORED TO YOUR BRAND'S SUCCESS
                                </span>
                            </div>
                        </div>
                        {/* Small Image specific to design reference, using service image as placeholder or specific asset if available */}
                        <div className="relative overflow-hidden w-full h-[300px] hidden lg:block">
                            <img
                                src={service.image}
                                alt="Service Preview"
                                className="w-full h-full object-cover grayscale opacity-80"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="relative z-20 pl-4 lg:pl-8 flex flex-col justify-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-[1.1]"
                        >
                            {service.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
                        >
                            {service.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-semibold text-lg hover:bg-foreground/90 transition-colors">
                                Get Started Today
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
