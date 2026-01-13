import { useRef, useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
}

const ProjectCard = ({ image, title, description }: ProjectCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [hoverPhase, setHoverPhase] = useState<'idle' | 'white' | 'dark'>('idle');

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isHovered) {
            setHoverPhase('white');
            timer = setTimeout(() => {
                setHoverPhase('dark');
            }, 200);
        } else {
            setHoverPhase('idle');
        }
        return () => clearTimeout(timer);
    }, [isHovered]);

    return (
        <div
            className="group cursor-pointer flex-shrink-0 relative flex flex-col items-start gap-5 p-5 rounded-2xl border border-border overflow-hidden transition-all duration-300"
            style={{
                width: 'fit-content', // Allow container to fit the content width
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Layers */}

            {/* Default White Background (Always present but covered by others) */}
            <div className="absolute inset-0 bg-white transition-colors duration-300" />

            {/* White Noise Phase */}
            <div
                className="absolute inset-0 transition-opacity duration-200 pointer-events-none"
                style={{
                    background: '#F1EFE9',
                    opacity: hoverPhase === 'white' ? 1 : 0,
                    zIndex: 1,
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                        opacity: 0.3,
                    }}
                />
            </div>

            {/* Dark Noise Phase */}
            <div
                className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: '#1a1a1a',
                    opacity: hoverPhase === 'dark' ? 1 : 0,
                    zIndex: 2,
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                        opacity: 0.15,
                    }}
                />
            </div>

            {/* Content Layer (Above backgrounds) */}
            <div className="relative z-10 flex flex-col items-start gap-5">
                {/* Image Container */}
                <div
                    className="overflow-hidden rounded-xl bg-muted border-4 border-transparent group-hover:border-white/10 transition-colors duration-300"
                    style={{
                        width: '323.98px',
                        height: '251.8px',
                        maxWidth: '324px',
                        aspectRatio: '323.98/251.80'
                    }}
                >
                    <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full max-w-[324px]">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <h3
                                className={`text-xl font-bold mb-2 tracking-tight transition-colors duration-300 ${hoverPhase === 'dark' ? 'text-white' : 'text-foreground'
                                    }`}
                            >
                                {title}
                            </h3>
                            <p
                                className={`text-sm leading-relaxed transition-colors duration-300 ${hoverPhase === 'dark' ? 'text-white/70' : 'text-muted-foreground'
                                    }`}
                            >
                                {description}
                            </p>
                        </div>
                        <div
                            className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${hoverPhase === 'dark'
                                ? 'border-white/30 text-white'
                                : 'border-border text-foreground'
                                }`}
                        >
                            <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
