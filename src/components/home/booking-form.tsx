
import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, MapPin, Users, Clock, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { motion } from 'framer-motion';

// Airport list
const airportsList = [
  { label: "Mumbai - Chhatrapati Shivaji (BOM)", value: "bom" },
  { label: "Delhi - Indira Gandhi (DEL)", value: "del" },
  { label: "Bangalore - Kempegowda (BLR)", value: "blr" },
  { label: "Hyderabad - Rajiv Gandhi (HYD)", value: "hyd" },
  { label: "Chennai - Chennai Int'l (MAA)", value: "maa" },
  { label: "Goa - Dabolim (GOI)", value: "goi" },
  { label: "Jaipur - Jaipur Int'l (JAI)", value: "jai" },
  { label: "Ahmedabad - Sardar Vallabhbhai Patel (AMD)", value: "amd" },
  { label: "Kolkata - Netaji Subhas Chandra Bose (CCU)", value: "ccu" },
  { label: "Kochi - Cochin Int'l (COK)", value: "cok" },
  { label: "Pune - Pune Airport (PNQ)", value: "pnq" },
  { label: "Lucknow - Chaudhary Charan Singh (LKO)", value: "lko" }
];

const BookingForm = () => {
  const [selectedTab, setSelectedTab] = useState('electric-jet');
  const [tripType, setTripType] = useState('one-way');
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [passengers, setPassengers] = useState('1');
  const [time, setTime] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      type: selectedTab,
      tripType,
      departure,
      arrival,
      departureDate: departureDate ? format(departureDate, 'yyyy-MM-dd') : null,
      returnDate: returnDate ? format(returnDate, 'yyyy-MM-dd') : null,
      passengers,
      time,
    });
    // Handle search logic
  };

  return (
    <div id="booking" className="glass-card rounded-xl overflow-hidden animate-fade-in">
      <Tabs defaultValue="electric-jet" onValueChange={setSelectedTab} className="w-full">
        <div className="bg-muted/50 p-1">
          <TabsList className="grid grid-cols-3 h-12 bg-transparent">
            <TabsTrigger 
              value="electric-jet" 
              className={`text-sm font-medium ${selectedTab === 'electric-jet' ? 'bg-primary text-primary-foreground' : 'bg-transparent'}`}
            >
              <motion.div 
                className="flex items-center justify-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.5H8C7.17 16.5 6.5 15.83 6.5 15V4.5C6.5 3.67 7.17 3 8 3H22C22.83 3 23.5 3.67 23.5 4.5V15C23.5 15.83 22.83 16.5 22 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 16.5V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 16.5H20V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M0.5 7.5H6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.5 4.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12H6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 9V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M0.5 16.5H6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>ELECTRIC JET</span>
              </motion.div>
            </TabsTrigger>
            <TabsTrigger 
              value="fossil-jet" 
              className={`text-sm font-medium ${selectedTab === 'fossil-jet' ? 'bg-primary text-primary-foreground' : 'bg-transparent'}`}
            >
              <motion.div 
                className="flex items-center justify-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.5H8C7.17 16.5 6.5 15.83 6.5 15V4.5C6.5 3.67 7.17 3 8 3H22C22.83 3 23.5 3.67 23.5 4.5V15C23.5 15.83 22.83 16.5 22 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 16.5V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 16.5H20V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M0.5 7.5H6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.5 4.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12H6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 9V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M0.5 16.5H6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>FOSSIL JET</span>
              </motion.div>
            </TabsTrigger>
            <TabsTrigger 
              value="e-volt" 
              className={`text-sm font-medium ${selectedTab === 'e-volt' ? 'bg-primary text-primary-foreground' : 'bg-transparent'}`}
            >
              <motion.div 
                className="flex items-center justify-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.5 9.5L12 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 9.5L12 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 7L18 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 7L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13L4 7H20L12 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8L6 4H18L12 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>E-VOLT</span>
              </motion.div>
            </TabsTrigger>
          </TabsList>
        </div>
        
        <div className="p-6">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="relative flex items-center">
                  <input
                    type="radio"
                    id="one-way"
                    name="trip-type"
                    value="one-way"
                    checked={tripType === 'one-way'}
                    onChange={() => setTripType('one-way')}
                    className="sr-only"
                  />
                  <label
                    htmlFor="one-way"
                    className={`flex items-center cursor-pointer px-3 py-1 rounded-full text-sm ${
                      tripType === 'one-way'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted/30 text-foreground'
                    }`}
                  >
                    {tripType === 'one-way' && <Check className="w-3 h-3 mr-1.5" />}
                    One-way
                  </label>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="relative flex items-center">
                  <input
                    type="radio"
                    id="round-trip"
                    name="trip-type"
                    value="round-trip"
                    checked={tripType === 'round-trip'}
                    onChange={() => setTripType('round-trip')}
                    className="sr-only"
                  />
                  <label
                    htmlFor="round-trip"
                    className={`flex items-center cursor-pointer px-3 py-1 rounded-full text-sm ${
                      tripType === 'round-trip'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted/30 text-foreground'
                    }`}
                  >
                    {tripType === 'round-trip' && <Check className="w-3 h-3 mr-1.5" />}
                    Round trip
                  </label>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="relative flex items-center">
                  <input
                    type="radio"
                    id="multi-trip"
                    name="trip-type"
                    value="multi-trip"
                    checked={tripType === 'multi-trip'}
                    onChange={() => setTripType('multi-trip')}
                    className="sr-only"
                  />
                  <label
                    htmlFor="multi-trip"
                    className={`flex items-center cursor-pointer px-3 py-1 rounded-full text-sm ${
                      tripType === 'multi-trip'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted/30 text-foreground'
                    }`}
                  >
                    {tripType === 'multi-trip' && <Check className="w-3 h-3 mr-1.5" />}
                    Multi trip
                  </label>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <div className="flex items-center h-12 px-4 border border-border bg-card/60 rounded-md">
                  <MapPin className="w-5 h-5 text-muted-foreground mr-2" />
                  <Select value={departure} onValueChange={setDeparture}>
                    <SelectTrigger className="border-0 h-full p-0 focus:ring-0 focus:ring-offset-0 bg-transparent">
                      <SelectValue placeholder="From which airport?" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border max-h-[300px]">
                      {airportsList.map((airport) => (
                        <SelectItem 
                          key={airport.value} 
                          value={airport.value}
                          className="focus:bg-accent"
                        >
                          {airport.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex items-center h-12 px-4 border border-border bg-card/60 rounded-md">
                  <MapPin className="w-5 h-5 text-muted-foreground mr-2" />
                  <Select value={arrival} onValueChange={setArrival}>
                    <SelectTrigger className="border-0 h-full p-0 focus:ring-0 focus:ring-offset-0 bg-transparent">
                      <SelectValue placeholder="To which airport?" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border max-h-[300px]">
                      {airportsList.map((airport) => (
                        <SelectItem 
                          key={airport.value} 
                          value={airport.value}
                          className="focus:bg-accent"
                        >
                          {airport.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <div className="flex items-center h-12 border border-border bg-card/60 rounded-md">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full h-full justify-start text-left font-normal",
                          !departureDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-5 w-5 text-muted-foreground" />
                        {departureDate ? (
                          format(departureDate, "dd MMM yyyy")
                        ) : (
                          <span>Departure date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                      <Calendar
                        mode="single"
                        selected={departureDate}
                        onSelect={setDepartureDate}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              
              {tripType === 'round-trip' && (
                <div className="relative">
                  <div className="flex items-center h-12 border border-border bg-card/60 rounded-md">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full h-full justify-start text-left font-normal",
                            !returnDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-5 w-5 text-muted-foreground" />
                          {returnDate ? (
                            format(returnDate, "dd MMM yyyy")
                          ) : (
                            <span>Return date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                        <Calendar
                          mode="single"
                          selected={returnDate}
                          onSelect={setReturnDate}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              )}
              
              <div className="relative">
                <div className="flex items-center h-12 px-4 border border-border bg-card/60 rounded-md">
                  <Users className="w-5 h-5 text-muted-foreground mr-2" />
                  <Select value={passengers} onValueChange={setPassengers}>
                    <SelectTrigger className="border-0 h-full p-0 focus:ring-0 focus:ring-offset-0 bg-transparent">
                      <SelectValue placeholder="Passengers" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <SelectItem 
                          key={num} 
                          value={num.toString()}
                          className="focus:bg-accent"
                        >
                          {num} {num === 1 ? 'Passenger' : 'Passengers'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {tripType !== 'round-trip' && (
                <div className="relative">
                  <div className="flex items-center h-12 px-4 border border-border bg-card/60 rounded-md">
                    <Clock className="w-5 h-5 text-muted-foreground mr-2" />
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger className="border-0 h-full p-0 focus:ring-0 focus:ring-offset-0 bg-transparent">
                        <SelectValue placeholder="Preferred time" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        {['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'].map((t) => (
                          <SelectItem 
                            key={t} 
                            value={t}
                            className="focus:bg-accent"
                          >
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex justify-end">
              <Button
                type="submit"
                className="w-full md:w-auto px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground transition-all"
              >
                Search Flights
              </Button>
            </div>

            {selectedTab === 'electric-jet' && (
              <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
                <div className="text-xs text-muted-foreground mr-2">
                  Additional options:
                </div>
                <div className="flex items-center">
                  <label 
                    htmlFor="carbon-offset" 
                    className="inline-flex items-center cursor-pointer"
                  >
                    <input 
                      id="carbon-offset" 
                      type="checkbox" 
                      className="sr-only" 
                      defaultChecked
                    />
                    <div className="relative w-9 h-5 bg-muted rounded-full transition-colors group-data-[state=checked]:bg-primary">
                      <div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform group-data-[state=checked]:translate-x-4"></div>
                    </div>
                    <span className="ml-2 text-xs text-primary">Fast charging at destination</span>
                  </label>
                </div>
                
                <div className="flex items-center ml-4">
                  <label 
                    htmlFor="sustainable-fuel" 
                    className="inline-flex items-center cursor-pointer"
                  >
                    <input 
                      id="sustainable-fuel" 
                      type="checkbox" 
                      className="sr-only" 
                    />
                    <div className="relative w-9 h-5 bg-muted rounded-full transition-colors">
                      <div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform"></div>
                    </div>
                    <span className="ml-2 text-xs text-primary">Extended range upgrade</span>
                  </label>
                </div>
              </div>
            )}
            
            {selectedTab === 'fossil-jet' && (
              <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
                <div className="text-xs text-muted-foreground mr-2">
                  Making it green:
                </div>
                <div className="flex items-center">
                  <label 
                    htmlFor="carbon-offset-fossil" 
                    className="inline-flex items-center cursor-pointer"
                  >
                    <input 
                      id="carbon-offset-fossil" 
                      type="checkbox" 
                      className="sr-only" 
                    />
                    <div className="relative w-9 h-5 bg-muted rounded-full transition-colors">
                      <div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform"></div>
                    </div>
                    <span className="ml-2 text-xs text-primary">Carbon offset program</span>
                  </label>
                </div>
                
                <div className="flex items-center ml-4">
                  <label 
                    htmlFor="sustainable-fuel-fossil" 
                    className="inline-flex items-center cursor-pointer"
                  >
                    <input 
                      id="sustainable-fuel-fossil" 
                      type="checkbox" 
                      className="sr-only" 
                    />
                    <div className="relative w-9 h-5 bg-muted rounded-full transition-colors">
                      <div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform"></div>
                    </div>
                    <span className="ml-2 text-xs text-primary">Use SAF biofuel blend</span>
                  </label>
                </div>
              </div>
            )}
          </form>
        </div>
      </Tabs>
    </div>
  );
};

export default BookingForm;
