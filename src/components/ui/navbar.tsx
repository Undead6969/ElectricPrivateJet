
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAdmin, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Our Fleet", href: "/fleet" },
    { name: "Membership", href: "/membership" },
    { name: "About", href: "/about" },
    { name: "News & Media", href: "/news" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/80 backdrop-blur-md py-2 shadow-md"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-display text-xl font-bold text-foreground">
            SKYLINE<span className="text-primary">JET</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(item.href) ? "text-primary" : "text-foreground/80"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+917338666982"
            className="flex items-center text-sm text-foreground/80 hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4 mr-2" />
            +91 7338666982
          </a>
          
          {user ? (
            <div className="flex items-center space-x-3">
              {isAdmin && (
                <Link to="/admin">
                  <Button variant="outline" size="sm">
                    Admin
                  </Button>
                </Link>
              )}
              <Link to="/profile">
                <Button variant="outline" size="sm">
                  Profile
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={signOut}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <Link to="/auth">
              <Button variant="outline" className="font-medium">
                Login
              </Button>
            </Link>
          )}
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-card/80 backdrop-blur-xl">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <span className="font-display text-xl font-bold">
                  SKYLINE<span className="text-primary">JET</span>
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              <nav className="flex flex-col space-y-6 mb-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      isActive(item.href) ? "text-primary" : "text-foreground/80"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto space-y-4">
                <a
                  href="tel:+917338666982"
                  className="flex items-center text-foreground/80 hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  +91 7338666982
                </a>

                {user ? (
                  <div className="flex flex-col space-y-2">
                    {isAdmin && (
                      <Link to="/admin" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button className="w-full" variant="outline">
                          Admin Dashboard
                        </Button>
                      </Link>
                    )}
                    <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full" variant="outline">
                        Profile
                      </Button>
                    </Link>
                    <Button 
                      variant="ghost" 
                      className="w-full"
                      onClick={() => {
                        signOut();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Link
                    to="/auth"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full"
                  >
                    <Button className="w-full">Login</Button>
                  </Link>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
