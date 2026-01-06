import { Instagram, Twitter, Linkedin, Facebook, MapPin, Phone, Mail, Send, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const menuLinks = [
    { label: "Home", href: "#", active: true },
    { label: "About Us", href: "#" },
    { label: "Services", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Blog", href: "#" },
  ];

  const resourceLinks = [
    { label: "Style guide", href: "#" },
    { label: "Licenses", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "404 Error", href: "#" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="relative bg-muted">
      
      {/* Top Section */}
      <div className="relative z-20 border-t border-border">
        <div className="mx-6 md:mx-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.5fr_auto] gap-8 lg:gap-0 py-16">
            {/* Newsletter */}
            <div className="md:border-r md:border-border md:pr-8 lg:pr-12">
              <h3 className="text-xl font-semibold text-foreground mb-3">Join Our Newsletter</h3>
              <p className="text-muted-foreground mb-6">
                Stay updated with the latest news, insights, and offers.
              </p>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="rounded-r-none border-r-0 focus-visible:ring-0 bg-transparent"
                />
                <Button className="rounded-l-none px-4">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Contact */}
            <div className="md:border-r md:border-border md:px-8 lg:px-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    1234 Digital Avenue, Suite 567,<br />
                    Tech City, 12345, Country
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">+1 (555) 987-6543</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">contact@winztechagency.com</span>
                </div>
              </div>
            </div>

            {/* Menu & Resources */}
            <div className="md:px-8 lg:px-12">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">Menu</h3>
                  <ul className="space-y-3">
                    {menuLinks.map((link) => (
                      <li key={link.label}>
                        <a 
                          href={link.href}
                          className={`transition-colors ${link.active ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">Resources</h3>
                  <ul className="space-y-3">
                    {resourceLinks.map((link) => (
                      <li key={link.label}>
                        <a 
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-row md:flex-col gap-3 md:pl-8 md:border-l md:border-border">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 border border-border rounded-lg flex items-center justify-center text-foreground hover:bg-background transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Large Logo Section */}
      <div className="border-t border-border relative overflow-hidden">
        <div className="mx-6 md:mx-12 py-8 lg:py-12">
          <div className="relative flex items-center" style={{ height: '175px', aspectRatio: '1218/175' }}>
            <h2 className="text-[15vw] md:text-[12vw] lg:text-[180px] font-bold text-foreground leading-none tracking-[-0.04em] select-none whitespace-nowrap">
              WINZTECH
            </h2>
            
            {/* Company Deck Badge */}
            <a 
              href="#"
              className="absolute right-[15%] md:right-[18%] lg:right-[22%] top-1/2 -translate-y-1/2 bg-primary text-primary-foreground py-3 px-6 rounded-full rotate-[-35deg] flex items-center gap-2 text-sm font-medium hover:opacity-90 transition-opacity shadow-lg"
            >
              Company Deck
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-6 md:mx-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-lg">©</span>
              <span>2025 WinzTech. All rights reserved</span>
            </div>
            <span>Power by Webflow</span>
            <span>Design & develop by PIXOORA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
