
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, Battery, Zap, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

// Updated fleet data with focus on electric aircraft
const fleetData = [
  {
    id: 1,
    name: "E-Gulfstream G650",
    category: "Long Range Electric Jet",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070&auto=format&fit=crop",
    passengers: 14,
    range: "1,200 km",
    speed: "750 km/h",
    interior: "Luxurious eco-friendly cabin with sustainable materials",
    sustainable: true,
    charging_time: "45 min",
    emissions: "Zero emissions"
  },
  {
    id: 2,
    name: "Eviation Alice",
    category: "Electric Commuter Aircraft",
    image: "https://images.unsplash.com/photo-1583362625802-1e7b2a98c393?q=80&w=2070&auto=format&fit=crop",
    passengers: 9,
    range: "815 km",
    speed: "480 km/h",
    interior: "Spacious cabin with panoramic windows and sustainable design",
    sustainable: true,
    charging_time: "30 min",
    emissions: "Zero emissions"
  },
  {
    id: 3,
    name: "E-Volt HeliTech",
    category: "Electric Helicopter",
    image: "https://images.unsplash.com/photo-1565816447868-52ef4b4fb35b?q=80&w=2070&auto=format&fit=crop",
    passengers: 6,
    range: "400 km",
    speed: "240 km/h",
    interior: "Ultra-quiet cabin with premium sustainable furnishings",
    sustainable: true,
    charging_time: "25 min",
    emissions: "Zero emissions"
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
          <div className="absolute top-2 right-2 bg-green-500/90 text-xs font-medium px-2 py-1 rounded-full text-white flex items-center">
            <Leaf className="w-3 h-3 mr-1" />
            Zero Emissions
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
          <div className="flex items-center">
            <Battery className="text-green-400 w-4 h-4 mr-1" />
            <span className="text-green-400">{aircraft.charging_time} charge</span>
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
              Electric Fleet
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Explore Our <span className="text-gradient gold-glow">Electric Aircraft</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              The future of aviation is electric. Experience our cutting-edge zero-emission aircraft that deliver luxury without the carbon footprint.
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
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="p-6 glass-card rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <Zap className="text-primary w-8 h-8 mr-2" />
              <h3 className="text-2xl font-bold">Sustainable Aviation Revolution</h3>
            </div>
            <p className="text-muted-foreground">
              Our electric aircraft produce zero direct emissions, substantially reduce noise pollution, and 
              feature significantly lower operating costs compared to traditional jets. Join us in revolutionizing 
              private aviation with sustainable, cutting-edge technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetPreview;
