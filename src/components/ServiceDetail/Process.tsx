import { motion } from "motion/react";
import { Service } from "@/data/services";
import { RefreshCcw } from "lucide-react";

const Process = ({ service }: { service: Service }) => {
    if (!service.process) return null;

    return (
        <section className="relative py-20 pb-32">
            <div className="relative z-20 mx-6 md:mx-12">
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12 lg:gap-0">

                    {/* Left Column - Label */}
                    <div className="relative z-20 pr-4 lg:pr-6 pl-4 lg:pl-8">
                        <div className="flex items-center gap-2 text-[#ff5757] mb-6 lg:mb-0">
                            <RefreshCcw className="w-5 h-5" />
                            <span className="text-[#ff5757] font-bold tracking-wider uppercase text-sm">
                                OUR WORK PROCESS
                            </span>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="relative z-20 pl-4 lg:pl-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            From Concept to Launch: Our {service.title} Approach
                        </h2>

                        <p className="text-muted-foreground mb-16 max-w-3xl">
                            At Aucess, we believe in a transparent, structured process that ensures every project we create is a perfect reflection of your brand while meeting the needs of your users.
                        </p>

                        <div className="space-y-12">
                            {service.process.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Process;
