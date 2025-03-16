
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown, Menu, X, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut, isAdmin } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-display text-white font-bold">
            Jet<span className="text-primary">Stream</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-foreground hover:text-primary flex items-center px-2 py-1">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-card/95 backdrop-blur-sm border-border">
              <DropdownMenuItem>
                <Link to="/jet-charter" className="w-full">Jet Charter</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/helicopter-charter" className="w-full">Helicopter Charter</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/empty-legs" className="w-full">Empty Legs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/sustainable-aviation" className="w-full">Sustainable Aviation</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-foreground hover:text-primary flex items-center px-2 py-1">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-card/95 backdrop-blur-sm border-border">
              <DropdownMenuItem>
                <Link to="/buy-aircraft" className="w-full">Buy Aircraft</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/sell-aircraft" className="w-full">Sell Aircraft</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/maintenance" className="w-full">Maintenance</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/fleet-management" className="w-full">Fleet Management</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/fleet" className="text-foreground hover:text-primary px-2 py-1">
            Our Fleet
          </Link>
          
          <Link to="/membership" className="text-foreground hover:text-primary px-2 py-1">
            Membership
          </Link>
          
          <Link to="/about" className="text-foreground hover:text-primary px-2 py-1">
            About
          </Link>
          
          <Link to="/news" className="text-foreground hover:text-primary px-2 py-1">
            News & Media
          </Link>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <a href="tel:+917338666982" className="flex items-center text-foreground hover:text-primary">
            <Phone className="h-4 w-4 mr-2" />
            <span>+91-7338666982</span>
          </a>
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card/95 backdrop-blur-sm border-border">
                <DropdownMenuItem>
                  <Link to="/profile" className="w-full">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/bookings" className="w-full">My Bookings</Link>
                </DropdownMenuItem>
                {isAdmin && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link to="/admin" className="w-full">Admin Dashboard</Link>
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Login
              </Button>
            </Link>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[80vh] py-4 border-b border-border' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 space-y-4">
          <div className="space-y-2">
            <h3 className="text-primary font-medium text-sm">Products</h3>
            <div className="pl-4 space-y-2">
              <Link to="/jet-charter" className="block text-foreground hover:text-primary">Jet Charter</Link>
              <Link to="/helicopter-charter" className="block text-foreground hover:text-primary">Helicopter Charter</Link>
              <Link to="/empty-legs" className="block text-foreground hover:text-primary">Empty Legs</Link>
              <Link to="/sustainable-aviation" className="block text-foreground hover:text-primary">Sustainable Aviation</Link>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-primary font-medium text-sm">Services</h3>
            <div className="pl-4 space-y-2">
              <Link to="/buy-aircraft" className="block text-foreground hover:text-primary">Buy Aircraft</Link>
              <Link to="/sell-aircraft" className="block text-foreground hover:text-primary">Sell Aircraft</Link>
              <Link to="/maintenance" className="block text-foreground hover:text-primary">Maintenance</Link>
              <Link to="/fleet-management" className="block text-foreground hover:text-primary">Fleet Management</Link>
            </div>
          </div>
          
          <Link to="/fleet" className="block text-foreground hover:text-primary">Our Fleet</Link>
          <Link to="/membership" className="block text-foreground hover:text-primary">Membership</Link>
          <Link to="/about" className="block text-foreground hover:text-primary">About</Link>
          <Link to="/news" className="block text-foreground hover:text-primary">News & Media</Link>
          
          <div className="space-y-3 pt-3 border-t border-border">
            <a href="tel:+917338666982" className="flex items-center text-foreground hover:text-primary">
              <Phone className="h-4 w-4 mr-2" />
              <span>+91-7338666982</span>
            </a>
            
            {user ? (
              <div className="space-y-2">
                <Link to="/profile" className="block text-foreground hover:text-primary">My Profile</Link>
                <Link to="/bookings" className="block text-foreground hover:text-primary">My Bookings</Link>
                {isAdmin && (
                  <Link to="/admin" className="block text-foreground hover:text-primary">Admin Dashboard</Link>
                )}
                <Button 
                  onClick={() => signOut()}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link to="/auth" className="block">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
