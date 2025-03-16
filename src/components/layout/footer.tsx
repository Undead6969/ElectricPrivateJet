
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="font-display text-2xl font-bold">
                SKYLINE<span className="text-primary">JET</span>
              </span>
            </Link>
            <p className="text-muted-foreground">
              Experience luxury aviation with our premium jet and helicopter charter services. Elevate your journey with efficiency, comfort, and style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/fleet" className="text-muted-foreground hover:text-primary transition-colors">Our Fleet</Link>
              <Link to="/membership" className="text-muted-foreground hover:text-primary transition-colors">Membership</Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link to="/news" className="text-muted-foreground hover:text-primary transition-colors">News & Media</Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span className="text-muted-foreground">
                  123 Aviation Way, Mumbai Airport, Mumbai, India 400099
                </span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a href="tel:+917338666982" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 7338666982
                </a>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:info@skylinejet.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@skylinejet.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter to receive the latest updates and special offers.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your email" 
                className="bg-card border-border" 
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 SkylineJet. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
