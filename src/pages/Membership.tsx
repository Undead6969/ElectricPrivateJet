import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { Check } from 'lucide-react';
import { Membership } from '@/lib/types';

// Mock data
const mockMemberships: Membership[] = [
  {
    id: '1',
    name: 'Basic',
    description: 'Essential private aviation services for occasional travelers',
    price_monthly: 999,
    price_yearly: 9990,
    is_popular: false,
    benefits: [
      'Access to charter flights',
      'Basic concierge service',
      '24/7 customer support',
      'Standard catering options',
      'Flexible booking (72 hrs notice)'
    ],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Premium',
    description: 'Enhanced private aviation experience with added flexibility',
    price_monthly: 2999,
    price_yearly: 29990,
    is_popular: true,
    benefits: [
      'Priority access to fleet',
      'Premium concierge service',
      'Complimentary upgrades when available',
      'Premium catering options',
      'Flexible booking (48 hrs notice)',
      'Dedicated customer manager',
      'Access to partner lounges'
    ],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Elite',
    description: 'Ultimate private aviation experience with guaranteed availability',
    price_monthly: 5999,
    price_yearly: 59990,
    is_popular: false,
    benefits: [
      'Guaranteed aircraft availability',
      'Elite concierge service',
      'Complimentary upgrades',
      'Custom catering options',
      'Flexible booking (24 hrs notice)',
      'Dedicated customer manager',
      'Global lounge access',
      'Helicopter transfers',
      'Family member benefits'
    ],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

const MembershipPage = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { user } = useAuth();
  const [memberships, setMemberships] = useState<Membership[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setMemberships(mockMemberships);
      setIsLoading(false);
    }, 1000);
    
    window.scrollTo(0, 0);
    
    return () => clearTimeout(timer);
  }, []);

  const handleError = (error: any) => {
    toast.error('Failed to load membership plans');
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    }),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-3">
                Exclusive Access
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                <span className="text-gradient gold-glow">Membership</span> Plans
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our exclusive membership program and unlock premium benefits, priority services, and exceptional flying experiences tailored to your needs.
              </p>
            </motion.div>
          </div>
        </section>
        
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-12">
              <div className="bg-card/30 backdrop-blur-sm rounded-full p-1 inline-flex items-center">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    !isYearly
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-foreground'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    isYearly
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-foreground'
                  }`}
                >
                  Yearly <span className="text-xs opacity-75">(Save 20%)</span>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 mb-16">
              {isLoading ? (
                Array(3)
                  .fill(null)
                  .map((_, i) => (
                    <div key={i} className="h-[600px] bg-card/40 animate-pulse rounded-xl"></div>
                  ))
              ) : (
                memberships?.map((plan, index) => (
                  <motion.div
                    key={plan.id}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className={`relative overflow-hidden rounded-xl border backdrop-blur-sm transition-all ${
                      plan.is_popular
                        ? 'border-primary/50 bg-gradient-to-b from-primary/5 to-card/40 shadow-gold/20 scale-105 lg:scale-105 z-10'
                        : 'border-border/40 bg-card/30 hover:border-primary/30 hover:shadow-lg'
                    }`}
                  >
                    {plan.is_popular && (
                      <div className="absolute -right-12 top-6 w-40 rotate-45 bg-primary py-1 text-center text-xs font-medium text-primary-foreground">
                        Most Popular
                      </div>
                    )}
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-display font-bold">{plan.name}</h3>
                      <p className="text-muted-foreground mt-2 mb-6 min-h-[50px]">{plan.description}</p>
                      
                      <div className="mb-6">
                        <p className="text-4xl font-bold">
                          ₹{isYearly ? Math.round(plan.price_yearly).toLocaleString() : Math.round(plan.price_monthly).toLocaleString()}
                          <span className="text-sm text-muted-foreground font-normal">
                            /{isYearly ? 'year' : 'month'}
                          </span>
                        </p>
                        {isYearly && (
                          <p className="text-sm text-primary mt-1">
                            Save ₹{Math.round(plan.price_monthly * 12 - plan.price_yearly).toLocaleString()} per year
                          </p>
                        )}
                      </div>
                      
                      <div className="border-t border-border pt-6 mb-8">
                        <ul className="space-y-4">
                          {Array.isArray(plan.benefits) && plan.benefits.map((benefit, i) => (
                            <li key={i} className="flex">
                              <Check className="h-5 w-5 text-primary flex-shrink-0 mr-3" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {user ? (
                        <Button
                          className={`w-full py-6 ${
                            plan.is_popular
                              ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                              : 'bg-card hover:bg-card/80 border border-border'
                          }`}
                        >
                          Choose {plan.name}
                        </Button>
                      ) : (
                        <Link to="/auth">
                          <Button
                            className={`w-full py-6 ${
                              plan.is_popular
                                ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                                : 'bg-card hover:bg-card/80 border border-border'
                            }`}
                          >
                            Sign up to Subscribe
                          </Button>
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-night-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Membership <span className="text-gradient gold-glow">Benefits</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Our membership plans offer exclusive benefits designed to enhance your private aviation experience. From priority booking to complimentary upgrades, we ensure a seamless journey every time.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card/20 backdrop-blur-sm rounded-lg p-6 border border-border/40"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15L8.5 8L15 11.5L16 16L12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Priority Booking</h3>
                <p className="text-muted-foreground">
                  Guaranteed aircraft availability with priority access to our fleet, even during peak travel seasons.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="bg-card/20 backdrop-blur-sm rounded-lg p-6 border border-border/40"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8H17C18.1046 8 19 8.89543 19 10V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V10C5 8.89543 5.89543 8 7 8H8M16 8H8M16 8V6C16 4.89543 15.1046 4 14 4H10C8.89543 4 8 4.89543 8 6V8M12 12V15M10 15H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Complimentary Upgrades</h3>
                <p className="text-muted-foreground">
                  Enjoy aircraft upgrades when available, giving you access to higher-tier jets for your journeys.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-card/20 backdrop-blur-sm rounded-lg p-6 border border-border/40"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5L5 19M21.1213 8.12132C22.2929 6.94975 22.2929 5.05025 21.1213 3.87868C19.9497 2.70711 18.0502 2.70711 16.8787 3.87868C15.7071 5.05025 15.7071 6.94975 16.8787 8.12132C18.0502 9.29289 19.9497 9.29289 21.1213 8.12132ZM7.12132 20.1213C8.29289 18.9497 8.29289 17.0502 7.12132 15.8787C5.94975 14.7071 4.05025 14.7071 2.87868 15.8787C1.70711 17.0502 1.70711 18.9497 2.87868 20.1213C4.05025 21.2929 5.94975 21.2929 7.12132 20.1213Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Rescheduling</h3>
                <p className="text-muted-foreground">
                  Change or reschedule your flights without penalties, giving you ultimate flexibility for your travel plans.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-card/20 backdrop-blur-sm rounded-lg p-6 border border-border/40"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Catering</h3>
                <p className="text-muted-foreground">
                  Enjoy gourmet meals and premium beverages customized to your preferences during your flights.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-card/20 backdrop-blur-sm rounded-lg p-6 border border-border/40"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dedicated Concierge</h3>
                <p className="text-muted-foreground">
                  A personal concierge is assigned to handle all your travel arrangements, ensuring a seamless experience.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-card/20 backdrop-blur-sm rounded-lg p-6 border border-border/40"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.933 5H5V19H19V12M14 3.5L20.5 10M14 3.5V10H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Empty Leg Deals</h3>
                <p className="text-muted-foreground">
                  Exclusive access to empty leg flights at significantly reduced rates, perfect for flexible travel plans.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Frequently Asked <span className="text-gradient gold-glow">Questions</span>
              </h2>
              <p className="text-muted-foreground">
                Get answers to common questions about our membership programs
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto grid gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card/20 backdrop-blur-sm rounded-lg p-6 border border-border/40"
              >
                <h3 className="text-xl font-semibold mb-2">How does membership pricing work?</h3>
                <p className="text-muted-foreground">
                  Our membership plans are available with monthly or annual billing. Annual plans offer approximately 20% savings compared to monthly billing. You can change your plan or cancel at any time.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="bg-card/20 backdrop-blur-sm rounded-lg p-6 border border-border/40"
              >
                <h3 className="text-xl font-semibold mb-2">Can I upgrade my membership plan?</h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade your membership plan at any time. The price difference will be prorated based on the remaining time in your current billing cycle.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-card/20 backdrop-blur-sm rounded-lg p-6 border border-border/40"
              >
                <h3 className="text-xl font-semibold mb-2">Is there a minimum commitment period?</h3>
                <p className="text-muted-foreground">
                  No, there is no minimum commitment period. You can cancel your membership at any time. For annual plans, we offer a prorated refund if you cancel before your term is complete.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-card/20 backdrop-blur-sm rounded-lg p-6 border border-border/40"
              >
                <h3 className="text-xl font-semibold mb-2">How do I access my membership benefits?</h3>
                <p className="text-muted-foreground">
                  After signing up, you'll get immediate access to your membership portal where you can view and use all your benefits. You'll also receive a welcome package with details on how to make the most of your membership.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-3">
                Join Today
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Ready to <span className="text-gradient gold-glow">Elevate</span> Your Flying Experience?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Choose a membership plan that fits your needs and start enjoying the exclusive benefits of flying with JetStream.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  View Membership Plans
                </Button>
                <Link to="/contact">
                  <Button variant="outline" className="px-8 py-6 border-primary text-primary hover:bg-primary/10">
                    Contact Sales Team
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

export default MembershipPage;
