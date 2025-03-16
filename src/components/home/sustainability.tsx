
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Droplet, ZapIcon, BarChart3, Globe } from 'lucide-react';

const SustainabilityFeature = ({ 
  icon: Icon, 
  title, 
  description, 
  color = "green" 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  color?: string; 
}) => {
  const featureRef = useRef(null);
  const isInView = useInView(featureRef, { once: true, margin: "-50px" });
  
  const colorVariants: Record<string, string> = {
    green: "bg-green-500/20 text-green-500",
    blue: "bg-blue-500/20 text-blue-500",
    yellow: "bg-yellow-500/20 text-yellow-500",
    purple: "bg-purple-500/20 text-purple-500",
  };
  
  return (
    <motion.div
      ref={featureRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="flex items-start"
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${colorVariants[color]}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-display font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

const Sustainability = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-night-900/30 to-background z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 text-xs font-medium bg-green-500/20 text-green-500 rounded-full mb-3">
                Eco-Friendly Aviation
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-display mb-6"
            >
              Committed to <span className="text-gradient gold-glow">Sustainable</span> Aviation
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              We're pioneering a new era of private aviation that balances luxury with responsibility.
              Our sustainable initiatives are designed to reduce environmental impact without compromising on the exceptional experience we deliver.
            </motion.p>
            
            <div className="space-y-6">
              <SustainabilityFeature
                icon={Leaf}
                title="Sustainable Aviation Fuel (SAF)"
                description="Our fleet increasingly uses SAF, reducing carbon emissions by up to 80% compared to conventional jet fuel."
                color="green"
              />
              
              <SustainabilityFeature
                icon={ZapIcon}
                title="Electric & Hydrogen Aircraft"
                description="We're investing in the next generation of electric and hydrogen-powered aircraft for short-range flights."
                color="yellow"
              />
              
              <SustainabilityFeature
                icon={BarChart3}
                title="Carbon Offset Programs"
                description="Offset your flight's carbon footprint through our verified carbon reduction projects around the world."
                color="blue"
              />
              
              <SustainabilityFeature
                icon={Globe}
                title="Blockchain-Verified Green Initiatives"
                description="Transparent tracking of sustainability efforts through blockchain technology."
                color="purple"
              />
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 mix-blend-overlay"></div>
            <img 
              src="https://images.unsplash.com/photo-1530194788550-21b376cd3c2d?q=80&w=2070&auto=format&fit=crop" 
              alt="Sustainable Aviation" 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-display font-semibold mb-2">Our Impact</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-green-500">30%</p>
                    <p className="text-sm text-muted-foreground">Carbon Reduction</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">20+</p>
                    <p className="text-sm text-muted-foreground">Green Aircraft</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
