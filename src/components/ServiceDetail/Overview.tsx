import { motion } from "motion/react";
import { Service } from "@/data/services";

const Overview = ({ service }: { service: Service }) => {
    if (!service.overview) return null;

    return (
        <section className="relative py-20">
            <div className="relative z-20 mx-6 md:mx-12">
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12 lg:gap-0">

                    {/* Left Column - Empty for spacing/grid adherence */}
                    <div className="relative z-20 pr-4 lg:pr-6 pl-4 lg:pl-8 hidden lg:block">
                        {/* Potential for side notes or navigation */}
                    </div>

                    {/* Right Column */}
                    <div className="relative z-20 pl-4 lg:pl-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold mb-6"
                        >
                            Overview
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12"
                        >
                            {service.overview}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full h-[400px] md:h-[500px] overflow-hidden"
                        >
                            <img
                                src={service.image}
                                alt={`${service.title} Overview`}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Overview;
