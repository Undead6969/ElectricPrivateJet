
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Clock, 
  Plane, 
  CreditCard, 
  Leaf,
  Headphones
} from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  delay: number 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="glass-card p-6 rounded-xl hover:shadow-gold transition-all duration-300"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold font-display mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="features">
      <div className="absolute inset-0 bg-gradient-radial from-night-900/50 to-background z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-3"
          >
            Why Choose Us
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold font-display mb-4"
          >
            Elevating <span className="text-gradient gold-glow">Private Aviation</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground"
          >
            Experience the pinnacle of private jet travel with our cutting-edge technology,
            exceptional service, and unwavering commitment to safety and sustainability.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={ShieldCheck}
            title="Uncompromised Safety"
            description="Our aircraft adhere to the most stringent safety standards with regular maintenance checks and experienced crew."
            delay={0.1}
          />
          
          <FeatureCard
            icon={Clock}
            title="Time Efficiency"
            description="Skip long security lines and wait times. Arrive minutes before your flight and depart on your schedule."
            delay={0.2}
          />
          
          <FeatureCard
            icon={Plane}
            title="Aircraft Variety"
            description="From light jets to ultra-long-range aircraft, choose the perfect match for your journey's requirements."
            delay={0.3}
          />
          
          <FeatureCard
            icon={CreditCard}
            title="Transparent Pricing"
            description="No hidden fees or surprise costs. Our pricing is straightforward and competitive for the value provided."
            delay={0.4}
          />
          
          <FeatureCard
            icon={Leaf}
            title="Sustainable Options"
            description="Choose eco-friendly alternatives with our carbon offset program and Sustainable Aviation Fuel options."
            delay={0.5}
          />
          
          <FeatureCard
            icon={Headphones}
            title="24/7 Concierge"
            description="Our dedicated team is available around the clock to assist with any requests or changes to your itinerary."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
