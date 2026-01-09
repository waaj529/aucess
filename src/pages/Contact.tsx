import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VerticalDividers from "@/components/VerticalDividers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground relative">
            <VerticalDividers />
            <Navbar />
            <main className="pt-20">
                {/* Main Contact Section */}
                <section className="relative w-full">
                    <div className="mx-6 md:mx-12 border-b border-border">
                        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
                            {/* Left Column - Sticky/Sidebar content */}
                            <div className="flex flex-col border-r border-border pt-20 pb-20 pr-6 pl-8 gap-12 relative w-full lg:w-auto">
                                {/* First Sidebar Item */}
                                <div className="flex flex-col gap-6 sticky top-32">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-[2px] bg-[#FF5757]"></div>
                                        <span className="text-[#FF5757] font-bold tracking-wider uppercase text-sm">LET'S START A CONVERSATION</span>
                                    </div>
                                    <div className="w-48 h-32 overflow-hidden rounded-sm mt-2">
                                        <img
                                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60"
                                            alt="Team meeting"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Form Content */}
                            <div className="pt-20 pb-20 pl-4 lg:pl-16 pr-4 lg:pr-8 flex flex-col">
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight mb-8">
                                    We'd Love To Hear From You
                                </h1>
                                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mb-16">
                                    Reach out to us through the form below, and we'll respond as soon as possible. Let's start creating something great together!
                                </p>

                                <form className="w-full max-w-4xl space-y-12">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="space-y-2">
                                            <Input
                                                placeholder="Name"
                                                className="border-0 border-b border-border rounded-none px-0 py-2 text-lg focus-visible:ring-0 focus-visible:border-foreground bg-transparent placeholder:text-muted-foreground/70"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Input
                                                placeholder="Email"
                                                type="email"
                                                className="border-0 border-b border-border rounded-none px-0 py-2 text-lg focus-visible:ring-0 focus-visible:border-foreground bg-transparent placeholder:text-muted-foreground/70"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="space-y-2">
                                            <Input
                                                placeholder="Company Name"
                                                className="border-0 border-b border-border rounded-none px-0 py-2 text-lg focus-visible:ring-0 focus-visible:border-foreground bg-transparent placeholder:text-muted-foreground/70"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Input
                                                placeholder="Phone"
                                                type="tel"
                                                className="border-0 border-b border-border rounded-none px-0 py-2 text-lg focus-visible:ring-0 focus-visible:border-foreground bg-transparent placeholder:text-muted-foreground/70"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="space-y-2">
                                            <Select>
                                                <SelectTrigger className="border-0 border-b border-border rounded-none px-0 py-2 text-lg focus:ring-0 shadow-none bg-transparent text-muted-foreground/70 w-full text-left font-normal">
                                                    <SelectValue placeholder="Select A Service" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="web-design">Web Design</SelectItem>
                                                    <SelectItem value="development">Development</SelectItem>
                                                    <SelectItem value="seo">SEO</SelectItem>
                                                    <SelectItem value="branding">Branding</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Select>
                                                <SelectTrigger className="border-0 border-b border-border rounded-none px-0 py-2 text-lg focus:ring-0 shadow-none bg-transparent text-muted-foreground/70 w-full text-left font-normal">
                                                    <SelectValue placeholder="Budget" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="<5k">Less than $5k</SelectItem>
                                                    <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                                                    <SelectItem value="10k-50k">$10k - $50k</SelectItem>
                                                    <SelectItem value="50k+">$50k+</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Input
                                            placeholder="About Project"
                                            className="border-0 border-b border-border rounded-none px-0 py-2 text-lg focus-visible:ring-0 focus-visible:border-foreground bg-transparent placeholder:text-muted-foreground/70"
                                        />
                                    </div>

                                    <div className="pt-4 flex flex-col items-start gap-8">
                                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-8 py-6 text-base font-medium">
                                            Send Message
                                        </Button>

                                        <p className="text-muted-foreground">
                                            Not interested to submit the form? <a href="#" className="text-foreground font-semibold hover:underline">book a call</a>
                                        </p>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Details Section */}
                <section className="relative w-full bg-muted/30">
                    <div className="mx-6 md:mx-12 border-b border-border">
                        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
                            {/* Left Column Label */}
                            <div className="hidden lg:flex flex-col border-r border-border pt-16 pb-16 pr-6 pl-8">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full border border-[#FF5757] flex items-center justify-center">
                                        <div className="w-1.5 h-2.5 border-r border-[#FF5757] rotate-45 transform translate-y-[-1px]"></div>
                                    </div>
                                    <span className="text-[#FF5757] font-bold tracking-wider uppercase text-sm">OUR CONTACT DETAILS</span>
                                </div>
                            </div>

                            {/* Right Column Details */}
                            <div className="pt-16 pb-16 pl-4 lg:pl-16 pr-4 lg:pr-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    {/* United States */}
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-3xl font-bold">United States</h3>
                                        <div className="flex flex-col gap-3 text-muted-foreground text-lg">
                                            <p>123 Digital Avenue, Suite 567</p>
                                            <p>Email: contact@yourcompany.com</p>
                                            <p>Phone: +1 (555) 987-6543</p>
                                        </div>
                                    </div>

                                    {/* Australia */}
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-3xl font-bold">Australia</h3>
                                        <div className="flex flex-col gap-3 text-muted-foreground text-lg">
                                            <p>456 Creative Street, Level 8 Sydney NSW 2000</p>
                                            <p>Email: contact@yourcompany.com</p>
                                            <p>Phone: +61 (2) 9012 3456</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Faces Behind Success Section */}
                <section className="relative w-full">
                    <div className="mx-6 md:mx-12 border-b border-border">
                        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
                            {/* Left Column Label */}
                            <div className="hidden lg:flex flex-col border-r border-border pt-16 pb-16 pr-6 pl-8">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full border border-[#FF5757] flex items-center justify-center">
                                        <div className="w-2 h-1.5 border-b border-l border-[#FF5757] -rotate-45 transform translate-y-[-1px]"></div>
                                    </div>
                                    <span className="text-[#FF5757] font-bold tracking-wider uppercase text-sm">THE FACES BEHIND OUR SUCCESS</span>
                                </div>
                            </div>

                            {/* Right Column Image */}
                            <div className="pt-0 pb-0 pl-0 border-l lg:border-l-0 border-border">
                                <div className="w-full h-[500px] md:h-[600px] relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&auto=format&fit=crop&q=80"
                                        alt="Team collaboration"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default Contact;
