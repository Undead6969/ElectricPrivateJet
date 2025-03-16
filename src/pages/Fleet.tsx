
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Aircraft } from '@/lib/types';

// Mock aircraft data
const MOCK_AIRCRAFT: Aircraft[] = [
  {
    id: "1",
    name: "Gulfstream G650",
    model: "G650",
    manufacturer: "Gulfstream",
    year: 2021,
    capacity: 16,
    range_km: 12964,
    cruising_speed_kmh: 956,
    image_url: "/placeholder.svg",
    aircraft_type: "jet",
    status: "available",
    description: "The Gulfstream G650 is an ultra-long-range business jet that combines speed, range, and comfort. With its spacious cabin and advanced technology, it offers an exceptional private flying experience.",
    price_per_hour: 12000,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "2",
    name: "Bombardier Global 7500",
    model: "Global 7500",
    manufacturer: "Bombardier",
    year: 2022,
    capacity: 14,
    range_km: 14260,
    cruising_speed_kmh: 982,
    image_url: "/placeholder.svg",
    aircraft_type: "jet",
    status: "available",
    description: "The Bombardier Global 7500 is designed for ultimate luxury and performance. With its four living spaces and exceptional range, it's perfect for international travel in complete comfort.",
    price_per_hour: 13500,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "3",
    name: "Cessna Citation Latitude",
    model: "Citation Latitude",
    manufacturer: "Cessna",
    year: 2020,
    capacity: 9,
    range_km: 5278,
    cruising_speed_kmh: 826,
    image_url: "/placeholder.svg",
    aircraft_type: "jet",
    status: "available",
    description: "The Cessna Citation Latitude is a midsize business jet that offers an impressive blend of comfort and efficiency. Its stand-up cabin and transcontinental range make it ideal for business or leisure travel.",
    price_per_hour: 6500,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "4",
    name: "Bell 429",
    model: "429 GlobalRanger",
    manufacturer: "Bell",
    year: 2021,
    capacity: 7,
    range_km: 761,
    cruising_speed_kmh: 278,
    image_url: "/placeholder.svg",
    aircraft_type: "helicopter",
    status: "available",
    description: "The Bell 429 GlobalRanger is a light, twin-engine helicopter with exceptional speed, range, and hover performance. Its spacious cabin makes it perfect for executive transport or special missions.",
    price_per_hour: 4500,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "5",
    name: "Airbus H160",
    model: "H160",
    manufacturer: "Airbus",
    year: 2022,
    capacity: 12,
    range_km: 857,
    cruising_speed_kmh: 287,
    image_url: "/placeholder.svg",
    aircraft_type: "helicopter",
    status: "available",
    description: "The Airbus H160 sets new standards for performance, cost-effectiveness, and passenger comfort. Its innovative technology and reduced sound levels make it an ideal choice for VIP transportation.",
    price_per_hour: 5800,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "6",
    name: "Lilium Jet",
    model: "Lilium Jet",
    manufacturer: "Lilium",
    year: 2023,
    capacity: 6,
    range_km: 300,
    cruising_speed_kmh: 280,
    image_url: "/placeholder.svg",
    aircraft_type: "sustainable",
    status: "available",
    description: "The Lilium Jet is an all-electric vertical take-off and landing aircraft, offering zero-emission travel for up to 6 passengers. Perfect for urban and regional transportation with minimal environmental impact.",
    price_per_hour: 3500,
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
              Our <span className="text-gradient gold-glow">Fleet</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of premium aircraft, from luxurious jets to advanced helicopters and sustainable options.
            </p>
          </motion.div>
          
          <Tabs defaultValue="all" value={selectedTab} onValueChange={setSelectedTab} className="mb-12">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="jet">Jets</TabsTrigger>
                <TabsTrigger value="helicopter">Helicopters</TabsTrigger>
                <TabsTrigger value="sustainable">Sustainable</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAircraft.map((aircraft) => (
                  <AircraftCard key={aircraft.id} aircraft={aircraft} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="jet" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAircraft.map((aircraft) => (
                  <AircraftCard key={aircraft.id} aircraft={aircraft} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="helicopter" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAircraft.map((aircraft) => (
                  <AircraftCard key={aircraft.id} aircraft={aircraft} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="sustainable" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAircraft.map((aircraft) => (
                  <AircraftCard key={aircraft.id} aircraft={aircraft} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">
              Need Help Choosing the Right Aircraft?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our aviation experts are ready to help you select the perfect aircraft for your needs, whether it's a business trip, leisure travel, or special occasion.
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
      </main>
      
      <Footer />
    </div>
  );
};

interface AircraftCardProps {
  aircraft: Aircraft;
}

const AircraftCard = ({ aircraft }: AircraftCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden hover:shadow-lg transition-all"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={aircraft.image_url || "/placeholder.svg"} 
          alt={aircraft.name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{aircraft.name}</h3>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            aircraft.aircraft_type === 'jet' 
              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
              : aircraft.aircraft_type === 'helicopter'
              ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
              : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
          }`}>
            {aircraft.aircraft_type === 'jet' ? 'Jet' : 
             aircraft.aircraft_type === 'helicopter' ? 'Helicopter' : 'Sustainable'}
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
            <span className="text-sm font-medium">{(aircraft.range_km / 1000).toFixed(1)} thousand km</span>
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
        
        <div className="flex justify-between items-center pt-4 border-t border-border/40">
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
