import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "About Us", href: "/about", hasDropdown: false },
  { label: "Services", href: "/services", hasDropdown: false },
  { label: "Portfolio", href: "/portfolio", hasDropdown: false },
];

interface NavbarProps {
  isScrolled?: boolean;
}

const Navbar = ({ isScrolled = false }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Helper to determine if a link is active
  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname === path;
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background"
    >
      {/* Desktop - with left/right padding, no vertical lines in header */}
      <div className="hidden lg:flex h-20 border-b border-l border-r border-border relative mx-12">

        {/* Left column - Logo only */}
        <div className="w-1/2 flex items-center pl-4">
          <Link to="/" className="flex items-center">
            <img src="/Aucess.svg" alt="Aucess" className="h-12 w-auto" loading="eager" decoding="sync" />
          </Link>
        </div>

        {/* Right column - Nav & CTA */}
        <div className="w-1/2 flex items-center justify-between px-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${isActive(link.href) ? "text-accent" : "text-foreground/80 hover:text-foreground"
                    }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact">
            <Button className="rounded-none px-6">Contact</Button>
          </Link>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden mx-6 md:mx-12 border-b border-l border-r border-border">
        <nav className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src="/Aucess.svg" alt="Aucess" className="h-12 w-auto" loading="eager" decoding="sync" />
          </Link>
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
                  <Link
                    to={link.href}
                    className={`flex items-center justify-between px-6 py-3 transition-colors ${isActive(link.href) ? "text-accent" : "text-foreground hover:bg-secondary"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                </li>
              ))}
              <li className="px-6 py-3">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full rounded-none">Contact</Button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;