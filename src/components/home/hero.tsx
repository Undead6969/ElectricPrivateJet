
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BookingForm from './booking-form';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1, 
      y: 0,
      transition: { 
        delay: custom * 0.2,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    })
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/b9ff09e6-e9ba-4030-b471-4c405f3b5d0a.png)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      
      <div className="container mx-auto px-4 pt-28 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left space-y-6 max-w-2xl">
            {isLoaded && (
              <>
                <motion.div
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                >
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-3">
                    Sustainable Electric Aviation
                  </span>
                </motion.div>
                
                <motion.h1
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight"
                >
                  <span className="block text-gradient gold-glow">Eco-Friendly Flight</span>
                  <span className="block mt-2">Zero Emissions Travel</span>
                </motion.h1>
                
                <motion.p
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="text-lg md:text-xl text-gray-300 max-w-xl"
                >
                  Experience the future of aviation with our electric private jets. 
                  Zero emissions, reduced noise, and unparalleled luxury combined with 
                  cutting-edge sustainable technology.
                </motion.p>
                
                <motion.div
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="flex flex-wrap gap-4"
                >
                  <a href="#booking" className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all shadow-gold">
                    Book Now
                  </a>
                  <a href="#fleet" className="px-8 py-3 bg-transparent text-white border border-white/20 font-medium rounded-md hover:bg-white/10 transition-all">
                    Explore Fleet
                  </a>
                </motion.div>
              </>
            )}
          </div>
        
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="lg:mt-0 mt-8 w-full"
          >
            <BookingForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
