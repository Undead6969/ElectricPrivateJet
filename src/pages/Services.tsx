import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import { motion } from 'framer-motion';
import { Leaf, Shield, Headphones, Star, Timer, Coffee } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20" 
            style={{ backgroundImage: 'url(/lovable-uploads/8534d732-88cc-48c8-9696-42ed6eb6a103.png)' }} 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-3"
              >
                Premium Services
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                Elevate Your <span className="text-gradient gold-glow">Travel Experience</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the pinnacle of luxury aviation with our range of premium services, 
                combining cutting-edge electric aircraft with unmatched comfort and sustainability.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-night-900/50 to-background z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32">
              {[
                {
                  icon: Leaf,
                  title: "Electric Fleet",
                  description: "Zero-emission flights with unmatched comfort and modern amenities.",
                  features: ["Zero emissions", "Whisper-quiet operation", "Modern amenities"],
                  price: "₹15,000/hour"
                },
                {
                  icon: Shield,
                  title: "VIP Security",
                  description: "Enhanced security measures and private terminals ensure discretion.",
                  features: ["Private terminals", "Secure transport", "Confidential planning"],
                  price: "Included"
                },
                {
                  icon: Headphones,
                  title: "24/7 Concierge",
                  description: "Dedicated support for all your travel needs and arrangements.",
                  features: ["Personal assistant", "Travel planning", "On-call support"],
                  price: "Included"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="glass-card p-8 rounded-xl backdrop-blur-sm hover:shadow-lg transition-all"
                >
                  <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-muted-foreground">
                        <Star className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="font-medium text-primary">{service.price}</div>
                </motion.div>
              ))}
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold font-display mb-4">
                    Luxury <span className="text-gradient gold-glow">Amenities</span>
                  </h2>
                  <p className="text-muted-foreground">
                    Every detail crafted for the ultimate travel experience
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Coffee,
                    title: "Gourmet Dining",
                    description: "Exquisite meals and refreshments served at your convenience"
                  },
                  {
                    icon: Timer,
                    title: "Flexible Scheduling",
                    description: "Depart on your terms with our adaptive booking system"
                  },
                  {
                    icon: Star,
                    title: "Premium Comfort",
                    description: "Luxurious seating and cabin amenities for ultimate relaxation"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="glass-card p-6 rounded-lg backdrop-blur-sm hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/20 p-2 rounded-full mr-4">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
