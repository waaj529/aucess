import { Facebook, Linkedin, Instagram, Users } from "lucide-react";

interface TeamMemberProps {
    image: string;
    name: string;
    role: string;
}

const TeamMember = ({ image, name, role }: TeamMemberProps) => {
    return (
        <div
            style={{ width: '403.91px', height: '436.41px', background: '#FFF' }}
            className="flex flex-col items-center justify-center p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group"
        >
            <div
                style={{
                    width: '355.91px',
                    height: '312.41px',
                }}
                className="mb-6 rounded-sm overflow-hidden"
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        background: `url(${image}) lightgray 50% 50% / cover no-repeat`
                    }}
                    className="transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            {/* Using w-full and flex to align text as per design - usually left aligned or center? 
                Image 1 shows text left aligned relative to the image? 
                Actually image 1 shows text aligns with the left edge of the image.
            */}
            <div className="w-[355.91px]">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-2xl font-bold mb-1 text-black">{name}</h3>
                        <p className="text-muted-foreground text-sm">{role}</p>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground mt-1">
                        {/* Icons from original code */}
                        <a href="#" className="hover:text-[#FF5757] transition-colors"><Facebook className="w-4 h-4" /></a>
                        <a href="#" className="hover:text-[#FF5757] transition-colors"><Linkedin className="w-4 h-4" /></a>
                        <a href="#" className="hover:text-[#FF5757] transition-colors"><Instagram className="w-4 h-4" /></a>
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
            role: "CEO/ AI Engineer",
            image: "https://res.cloudinary.com/dnvia0wsm/image/upload/v1767891571/image-gen_39_w8f4pw.webp"
        },
        {
            name: "Wajid Abbas",
            role: "Full stack Web developer",
            image: "https://res.cloudinary.com/dnvia0wsm/image/upload/v1767891674/image-gen_38_y6omnz.webp"
        },
        {
            name: "David Johnson",
            role: "DevOps Engineer at WinzTech",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Emily Davis",
            role: "Software Engineer at WinzTech",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section className="relative w-full border-b border-border">
            <div className="mx-6 md:mx-12">
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
                    {/* Left Column */}
                    <div className="pt-20 pb-20 pr-4 lg:pr-6 pl-4 lg:pl-8 border-r border-border">
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
