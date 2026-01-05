import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "/about", active: false },
  { label: "Services", href: "/services", active: false },
  { label: "Portfolio", href: "/portfolio", active: false },
  { label: "Pages", href: "#", hasDropdown: true, active: false },
];

interface NavbarProps {
  isScrolled?: boolean;
}

const Navbar = ({ isScrolled = false }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
    >
      {/* Desktop - with left/right padding, no vertical lines in header */}
      <div className="hidden lg:flex h-20 border-b border-border relative px-12">

        {/* Left column - Logo only */}
        <div className="w-1/2 flex items-center pl-4">
          <a href="/" className="flex items-center">
            <img src="/Aucess.svg" alt="Aucess" className="h-12 w-auto" />
          </a>
        </div>

        {/* Right column - Nav & CTA */}
        <div className="w-1/2 flex items-center justify-between px-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${link.active ? "text-accent" : "text-foreground/80 hover:text-foreground"
                    }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              </li>
            ))}
          </ul>
          <Button className="rounded-none px-6">Contact</Button>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden px-6 border-b border-border">
        <nav className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <img src="/Aucess.svg" alt="Aucess" className="h-12 w-auto" />
          </a>
          <button
            className="p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-background border-b border-border">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center justify-between px-6 py-3 text-foreground hover:bg-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                </li>
              ))}
              <li className="px-6 py-3">
                <Button className="w-full rounded-none">Contact</Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;