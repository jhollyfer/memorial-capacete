import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "História", href: "#historia" },
    { name: "Timeline", href: "#timeline" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Legado", href: "#legado" },
    { name: "Memorial", href: "#memorial" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-3 sm:py-4 bg-memorial-light/95 shadow-md backdrop-blur-sm"
        // isScrolled ? "bg-memorial-light/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="memorial-container">
        <div className="flex items-center justify-between">
          <Link to="#hero" className="flex items-center text-memorial-brown">
            <div className="w-10 h-10 rounded-full border-2 border-memorial-accent mr-2 flex items-center justify-center">
              <span className="font-bold text-lg">MC</span>
            </div>
            <div className="font-heading font-bold hidden sm:block">
              Memorial do Capacete
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-memorial-brown hover:text-memorial-accent transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-memorial-brown p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-memorial-brown hover:text-memorial-accent transition-colors px-2 py-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
