
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/ui/navbar';
import Hero from '@/components/home/hero';
import Features from '@/components/home/features';
import FleetPreview from '@/components/home/fleet-preview';
import Sustainability from '@/components/home/sustainability';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <Features />
        
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-night-900/50 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <img 
                  src="https://images.unsplash.com/photo-1579446565308-427218a2c60e?q=80&w=2070&auto=format&fit=crop" 
                  alt="JetStream Experience" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-3">
                  Unlock the Power of Every Minute
                </span>
                <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                  Master Private Aviation with Our Exclusive <span className="text-gradient gold-glow">Blockchain Technology</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Experience the next generation of private aviation with our innovative blockchain integration. 
                  From secure document verification to transparent maintenance records and enhanced safety protocols, 
                  we're redefining private jet travel for the digital age.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span className="text-foreground">Secure aircraft documentation and verification</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span className="text-foreground">Transparent maintenance tracking and records</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span className="text-foreground">Advanced flight planning with ML integration</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span className="text-foreground">Verified carbon offset initiatives</span>
                  </div>
                </div>
                <Link to="/membership">
                  <Button 
                    className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold"
                  >
                    Join Our Membership
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        
        <FleetPreview />
        
        <Sustainability />
        
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/80"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-3">
                Start Your Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Ready to <span className="text-gradient gold-glow">Experience</span> the Difference?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're booking a private jet, exploring aircraft ownership, or seeking maintenance services,
                we're here to elevate your aviation experience.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/jet-charter">
                  <Button className="px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold">
                    Book a Flight
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="px-8 py-6 border-primary text-primary hover:bg-primary/10">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
