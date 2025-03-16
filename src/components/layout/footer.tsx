
import { Link } from 'react-router-dom';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-night-900 border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-display text-white font-bold">
                Jet<span className="text-primary">Stream</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Elevating private aviation with cutting-edge technology, exceptional service, and sustainable practices.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <PhoneCall className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="text-foreground">+91-11-40845858</p>
                  <p className="text-sm text-muted-foreground">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="text-foreground">info@jetstream.com</p>
                  <p className="text-sm text-muted-foreground">Email us</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="text-foreground">Mumbai, India</p>
                  <p className="text-sm text-muted-foreground">Headquarters</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  News & Media
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/jet-charter" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Jet Charter
                </Link>
              </li>
              <li>
                <Link to="/helicopter-charter" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Helicopter Charter
                </Link>
              </li>
              <li>
                <Link to="/empty-legs" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Empty Legs
                </Link>
              </li>
              <li>
                <Link to="/buy-aircraft" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Buy Aircraft
                </Link>
              </li>
              <li>
                <Link to="/sell-aircraft" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Sell Aircraft
                </Link>
              </li>
              <li>
                <Link to="/maintenance" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <div className="space-y-3">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-card/50 border-border focus-visible:ring-primary"
                />
                <Button className="ml-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our <Link to="/privacy-policy" className="text-primary">Privacy Policy</Link>.
              </p>
            </div>
            
            <div className="mt-6">
              <h4 className="text-base font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-night-800 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-night-800 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-night-800 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-night-800 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {currentYear} JetStream. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
