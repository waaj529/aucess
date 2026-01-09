import { motion } from "motion/react";
import { Service } from "@/data/services";
import { Layout, Smartphone, Search, User, Zap, Clock } from "lucide-react";

const getIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("design")) return <Layout className="w-8 h-8" />;
    if (t.includes("responsive")) return <Smartphone className="w-8 h-8" />;
    if (t.includes("seo")) return <Search className="w-8 h-8" />;
    if (t.includes("user")) return <User className="w-8 h-8" />;
    if (t.includes("loading") || t.includes("speed")) return <Zap className="w-8 h-8" />;
    if (t.includes("future") || t.includes("time")) return <Clock className="w-8 h-8" />;
    return <Layout className="w-8 h-8" />;
}

const KeyFeatures = ({ service }: { service: Service }) => {
    if (!service.features) return null;

    return (
        <section className="relative py-20">
            <div className="relative z-20 mx-6 md:mx-12">
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12 lg:gap-0">

                    {/* Left Column - Label */}
                    <div className="relative z-20 pr-4 lg:pr-6 pl-4 lg:pl-8">
                        <div className="flex items-center gap-2 text-[#ff5757] mb-6 lg:mb-0">
                            <Layout className="w-5 h-5" />
                            <span className="text-[#ff5757] font-bold tracking-wider uppercase text-sm">
                                KEY FEATURES
                            </span>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="relative z-20 pl-4 lg:pl-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            Why Choose Our {service.title} Services?
                        </h2>

                        <p className="text-muted-foreground mb-12 max-w-3xl">
                            At Aucess, we take a holistic approach, ensuring that every solution we create is not only visually stunning but also highly functional, user-friendly, and optimized for performance.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 border border-border bg-[#F9F9F7] rounded-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="mb-6 opacity-70">
                                        {getIcon(feature.title)}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
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

export default KeyFeatures;
