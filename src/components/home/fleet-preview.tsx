
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample fleet data
const fleetData = [
  {
    id: 1,
    name: "Gulfstream G650",
    category: "Ultra Long Range",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070&auto=format&fit=crop",
    passengers: 16,
    range: "7,000 nm",
    speed: "Mach 0.925",
    interior: "Luxurious cabin with 4-zone configuration",
    sustainable: false
  },
  {
    id: 2,
    name: "Cessna Citation X",
    category: "Super Midsize Jet",
    image: "https://images.unsplash.com/photo-1583362625802-1e7b2a98c393?q=80&w=2070&auto=format&fit=crop",
    passengers: 12,
    range: "3,460 nm",
    speed: "Mach 0.935",
    interior: "Comfortable cabin with advanced amenities",
    sustainable: true
  },
  {
    id: 3,
    name: "Bombardier Global 7500",
    category: "Ultra Long Range",
    image: "https://images.unsplash.com/photo-1565816447868-52ef4b4fb35b?q=80&w=2070&auto=format&fit=crop",
    passengers: 19,
    range: "7,700 nm",
    speed: "Mach 0.925",
    interior: "Sophisticated cabin with 4 living spaces",
    sustainable: false
  },
];

const AircraftCard = ({ aircraft, index }: { aircraft: any, index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card group rounded-xl overflow-hidden h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={aircraft.image} 
          alt={aircraft.name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
        />
        {aircraft.sustainable && (
          <div className="absolute top-2 right-2 bg-primary/90 text-xs font-medium px-2 py-1 rounded-full text-primary-foreground">
            Sustainable
          </div>
        )}
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-display font-semibold mb-1">{aircraft.name}</h3>
        <p className="text-primary text-sm font-medium mb-3">{aircraft.category}</p>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-sm">
          <div>
            <span className="text-muted-foreground">Passengers:</span>
            <span className="ml-1 text-foreground">{aircraft.passengers}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Range:</span>
            <span className="ml-1 text-foreground">{aircraft.range}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Speed:</span>
            <span className="ml-1 text-foreground">{aircraft.speed}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4">{aircraft.interior}</p>
        
        <div className="mt-auto">
          <Link 
            to={`/fleet/${aircraft.id}`}
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
          >
            View Details
            <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const FleetPreview = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section ref={sectionRef} id="fleet" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
        >
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-3">
              Our Fleet
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Explore <span className="text-gradient gold-glow">Our Aircraft</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              From light jets to ultra-long-range aircraft, our diverse fleet ensures the perfect match for your travel needs.
            </p>
          </div>
          
          <Link 
            to="/fleet"
            className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all shadow-gold"
          >
            View All Aircraft
            <ChevronRight className="ml-1 w-5 h-5" />
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetData.map((aircraft, index) => (
            <AircraftCard key={aircraft.id} aircraft={aircraft} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetPreview;
