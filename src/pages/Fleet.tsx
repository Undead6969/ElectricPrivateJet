
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Battery, Leaf, Timer, Zap } from 'lucide-react';
import { Aircraft } from '@/lib/types';

// Updated aircraft data with focus on electric options
const MOCK_AIRCRAFT: Aircraft[] = [
  {
    id: "1",
    name: "E-Gulfstream G650",
    model: "Electric G650",
    manufacturer: "Eco Gulfstream",
    year: 2025,
    capacity: 14,
    range_km: 1200,
    cruising_speed_kmh: 750,
    image_url: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070&auto=format&fit=crop",
    aircraft_type: "electric-jet",
    status: "available",
    description: "The electric variant of the classic Gulfstream, redesigned with cutting-edge battery technology and sustainable materials throughout the cabin. Offers a premium electric flying experience with zero emissions.",
    price_per_hour: 22000,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "2",
    name: "Eviation Alice",
    model: "Alice Commercial",
    manufacturer: "Eviation",
    year: 2024,
    capacity: 9,
    range_km: 815,
    cruising_speed_kmh: 480,
    image_url: "https://images.unsplash.com/photo-1583362625802-1e7b2a98c393?q=80&w=2070&auto=format&fit=crop",
    aircraft_type: "electric-jet",
    status: "available",
    description: "The world's first all-electric commuter aircraft designed from the ground up for sustainability. Features an innovative design with panoramic views and whisper-quiet operation.",
    price_per_hour: 15000,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "3",
    name: "E-Volt HeliTech",
    model: "EV-480",
    manufacturer: "HeliTech Green",
    year: 2024,
    capacity: 6,
    range_km: 400,
    cruising_speed_kmh: 240,
    image_url: "https://images.unsplash.com/photo-1565816447868-52ef4b4fb35b?q=80&w=2070&auto=format&fit=crop",
    aircraft_type: "electric-helicopter",
    status: "available",
    description: "A revolutionary electric helicopter offering near-silent operation and zero emissions. Perfect for city transportation and scenic tours with its panoramic glass cabin.",
    price_per_hour: 12500,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "4",
    name: "Heart Aerospace ES-30",
    model: "ES-30",
    manufacturer: "Heart Aerospace",
    year: 2026,
    capacity: 30,
    range_km: 400,
    cruising_speed_kmh: 350,
    image_url: "https://images.unsplash.com/photo-1559741240-11a5ffb68ee8?auto=format&fit=crop",
    aircraft_type: "electric-jet",
    status: "coming-soon",
    description: "A 30-passenger regional electric aircraft with impressive range capabilities. Features a spacious cabin, reduced noise, and zero emissions operation. Perfect for corporate and group travel.",
    price_per_hour: 28000,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "5",
    name: "Lilium Jet",
    model: "Lilium eVTOL",
    manufacturer: "Lilium",
    year: 2025,
    capacity: 6,
    range_km: 250,
    cruising_speed_kmh: 280,
    image_url: "https://images.unsplash.com/photo-1517476904352-988d32f55b7a?auto=format&fit=crop",
    aircraft_type: "electric-jet",
    status: "available",
    description: "The Lilium Jet is an all-electric vertical take-off and landing aircraft with 36 electric engines embedded in its flaps. Offers the flexibility of helicopter-like takeoff with the efficiency of fixed-wing flight.",
    price_per_hour: 18000,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "6",
    name: "E-Citation X",
    model: "E-Citation X Plus",
    manufacturer: "Eco Cessna",
    year: 2024,
    capacity: 12,
    range_km: 800,
    cruising_speed_kmh: 700,
    image_url: "https://images.unsplash.com/photo-1583029901628-8039767c7ad0?auto=format&fit=crop",
    aircraft_type: "electric-jet",
    status: "available",
    description: "The electric version of the iconic Citation X, combining legendary performance with zero-emission operation. Features state-of-the-art avionics and a luxurious, sustainably appointed cabin.",
    price_per_hour: 19500,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "7",
    name: "Legacy Gulfstream G650",
    model: "G650ER",
    manufacturer: "Gulfstream",
    year: 2022,
    capacity: 19,
    range_km: 13890,
    cruising_speed_kmh: 956,
    image_url: "https://images.unsplash.com/photo-1598027575102-10b147e11475?auto=format&fit=crop",
    aircraft_type: "fossil-jet",
    status: "available",
    description: "The conventional Gulfstream G650 represents the pinnacle of traditional fossil fuel luxury aviation. Features an ultra-long range, spacious cabin with multiple living areas, and exceptional performance.",
    price_per_hour: 15800,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "8",
    name: "Bell 429 GlobalRanger",
    model: "429 GlobalRanger",
    manufacturer: "Bell",
    year: 2021,
    capacity: 7,
    range_km: 761,
    cruising_speed_kmh: 278,
    image_url: "https://images.unsplash.com/photo-1583854608682-94147497bd27?auto=format&fit=crop",
    aircraft_type: "fossil-helicopter",
    status: "available",
    description: "A conventional fuel helicopter with exceptional performance and comfort. Features a spacious cabin, advanced avionics, and versatile configuration options for executive transport.",
    price_per_hour: 8500,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

const Fleet = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  
  const filteredAircraft = selectedTab === 'all' 
    ? MOCK_AIRCRAFT 
    : MOCK_AIRCRAFT.filter(aircraft => aircraft.aircraft_type === selectedTab);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Our <span className="text-gradient gold-glow">Electric Fleet</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of electric aircraft, from luxurious jets to advanced helicopters. 
              We're leading the way in sustainable aviation with zero-emission technology.
            </p>
          </motion.div>
          
          <Tabs defaultValue="all" value={selectedTab} onValueChange={setSelectedTab} className="mb-12">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="electric-jet">Electric Jets</TabsTrigger>
                <TabsTrigger value="electric-helicopter">E-Volt</TabsTrigger>
                <TabsTrigger value="fossil-jet">Legacy Jets</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAircraft.map((aircraft) => (
                  <AircraftCard key={aircraft.id} aircraft={aircraft} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="electric-jet" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAircraft.map((aircraft) => (
                  <AircraftCard key={aircraft.id} aircraft={aircraft} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="electric-helicopter" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAircraft.map((aircraft) => (
                  <AircraftCard key={aircraft.id} aircraft={aircraft} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="fossil-jet" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAircraft.map((aircraft) => (
                  <AircraftCard key={aircraft.id} aircraft={aircraft} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center">
                <div className="bg-green-500/20 p-3 rounded-full mb-4">
                  <Leaf className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Zero Emissions</h3>
                <p className="text-muted-foreground">
                  Our electric aircraft produce zero direct carbon emissions, helping to reduce the environmental impact of private aviation.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center">
                <div className="bg-blue-500/20 p-3 rounded-full mb-4">
                  <Zap className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rapid Charging</h3>
                <p className="text-muted-foreground">
                  Advanced battery technology allows for quick turnaround times with charging speeds as fast as 30-45 minutes for most aircraft.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center">
                <div className="bg-purple-500/20 p-3 rounded-full mb-4">
                  <Timer className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lower Operating Costs</h3>
                <p className="text-muted-foreground">
                  Electric propulsion significantly reduces maintenance complexity and fuel costs, creating savings we pass on to our members.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">
                Need Help Choosing the Right Electric Aircraft?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Our sustainable aviation experts are ready to help you select the perfect aircraft for your needs, whether it's a business trip, leisure travel, or special occasion.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6">
                  Contact an Expert
                </Button>
                <Button variant="outline" className="px-8 py-6">
                  Download Fleet Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

interface AircraftCardProps {
  aircraft: Aircraft;
}

const AircraftCard = ({ aircraft }: AircraftCardProps) => {
  const isElectric = aircraft.aircraft_type.includes('electric');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden hover:shadow-lg transition-all h-full flex flex-col"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={aircraft.image_url || "/placeholder.svg"} 
          alt={aircraft.name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        {isElectric && (
          <div className="absolute top-2 right-2 bg-green-500/90 text-xs font-medium px-2 py-1 rounded-full text-white flex items-center">
            <Leaf className="w-3 h-3 mr-1" />
            Zero Emissions
          </div>
        )}
        {aircraft.status === 'coming-soon' && (
          <div className="absolute top-2 left-2 bg-primary/90 text-xs font-medium px-2 py-1 rounded-full text-primary-foreground">
            Coming Soon
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{aircraft.name}</h3>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            aircraft.aircraft_type === 'electric-jet' 
              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
              : aircraft.aircraft_type === 'electric-helicopter'
              ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
              : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
          }`}>
            {aircraft.aircraft_type === 'electric-jet' ? 'Electric Jet' : 
             aircraft.aircraft_type === 'electric-helicopter' ? 'E-Volt' : 
             aircraft.aircraft_type === 'fossil-jet' ? 'Legacy Jet' : 'Legacy Helicopter'}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {aircraft.description}
        </p>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Capacity</span>
            <span className="text-sm font-medium">{aircraft.capacity} passengers</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Range</span>
            <span className="text-sm font-medium">{(aircraft.range_km)} km</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Cruising Speed</span>
            <span className="text-sm font-medium">{aircraft.cruising_speed_kmh} km/h</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Manufacturer</span>
            <span className="text-sm font-medium">{aircraft.manufacturer}</span>
          </div>
        </div>
        
        {isElectric && (
          <div className="flex items-center mb-4 text-sm space-x-2">
            <Battery className="text-green-400 w-4 h-4" />
            <span className="text-green-400">
              {aircraft.aircraft_type === 'electric-jet' ? '45 min charging' : '30 min charging'}
            </span>
          </div>
        )}
        
        <div className="flex justify-between items-center pt-4 border-t border-border/40 mt-auto">
          <div>
            <span className="text-xs text-muted-foreground">Starting from</span>
            <div className="text-primary font-bold">₹{aircraft.price_per_hour.toLocaleString()}/hour</div>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Book Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Fleet;
