import { Facebook, Linkedin, Instagram, Users } from "lucide-react";

interface TeamMemberProps {
    image: string;
    name: string;
    role: string;
    imagePosition?: string;
}

const TeamMember = ({ image, name, role, imagePosition = '50% 50%' }: TeamMemberProps) => {
    return (
        <div
            style={{ width: '100%', maxWidth: '403.91px', background: '#FFF' }}
            className="flex flex-col items-center justify-center p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group"
        >
            <div
                style={{
                    width: '100%',
                    height: '312.41px',
                }}
                className="mb-6 rounded-sm overflow-hidden"
            >
                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: imagePosition
                    }}
                    className="transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            {/* Using w-full and flex to align text as per design - usually left aligned or center? 
                Image 1 shows text left aligned relative to the image? 
                Actually image 1 shows text aligns with the left edge of the image.
            */}
            <div className="w-full">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-2xl font-bold mb-1 text-black">{name}</h3>
                        <p className="text-muted-foreground text-sm">{role}</p>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground mt-1">
                        {/* Icons from original code */}
                        <a href="https://www.facebook.com/aucess" className="hover:text-[#FF5757] transition-colors" target="_blank" rel="noopener noreferrer"><Facebook className="w-4 h-4" /></a>
                        <a href="https://www.linkedin.com/company/aucess" className="hover:text-[#FF5757] transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin className="w-4 h-4" /></a>
                        <a href="https://www.instagram.com/aucess" className="hover:text-[#FF5757] transition-colors" target="_blank" rel="noopener noreferrer"><Instagram className="w-4 h-4" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Team = () => {
    const team = [
        {
            name: "Zain Israr",
            role: "Founder & CEO",
            image: "https://ik.imagekit.io/luod4wmv7/PHOTO-2026-01-14-20-51-25.jpg",
            imagePosition: "50% 15%"
        },
        {
            name: "Wajid Abbas",
            role: "Founder & CTO",
            image: "https://ik.imagekit.io/luod4wmv7/image-gen%20(8).jpg"
        }
    ];

    return (
        <section className="relative w-full border-b border-border">
            <div className="mx-6 md:mx-12">
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
                    {/* Left Column */}
                    <div className="pt-20 pb-20 pr-4 lg:pr-6 pl-4 lg:pl-8 border-r border-border min-h-[600px] relative">
                        <div className="sticky top-32">
                            <div className="flex items-center gap-4">
                                <Users className="text-[#FF5757] w-5 h-5" />
                                <span className="text-[#FF5757] font-bold tracking-wider uppercase">MEET OUR TEAM</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="pt-20 pb-20 pl-4 lg:pl-8 pr-4 lg:pr-8">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">The Minds Behind Our Success</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-16 max-w-2xl">
                            Our team at Aucess is a diverse group of designers, developers, strategists, and marketers who are driven by a passion for creativity and innovation. We work collaboratively to transform your digital ideas into reality.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                            {team.map((member, index) => (
                                <TeamMember key={index} {...member} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
