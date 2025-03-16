
import { motion } from 'framer-motion';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Award, 
  Calendar, 
  Clock, 
  Globe, 
  HeartHandshake, 
  Lightbulb, 
  Shield, 
  Sparkles, 
  Star, 
  Users
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Vikram Malhotra",
    role: "Chief Executive Officer",
    image: "/placeholder.svg",
    bio: "Vikram brings over 20 years of aviation industry experience, having previously led operations at major international airlines. His vision drives SkylineJet's commitment to excellence and innovation."
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Chief Operating Officer",
    image: "/placeholder.svg",
    bio: "With a background in aerospace engineering and business management, Priya oversees SkylineJet's day-to-day operations, ensuring seamless service delivery and operational efficiency."
  },
  {
    id: "3",
    name: "Rajesh Patel",
    role: "Chief Financial Officer",
    image: "/placeholder.svg",
    bio: "Rajesh's extensive experience in financial management within the luxury services sector helps SkylineJet maintain its strong financial foundation while pursuing strategic growth opportunities."
  },
  {
    id: "4",
    name: "Anika Singh",
    role: "Head of Customer Experience",
    image: "/placeholder.svg",
    bio: "Anika's passion for exceptional service drives SkylineJet's customer-centric approach. Her team ensures that every client journey exceeds expectations from booking to landing."
  },
  {
    id: "5",
    name: "Dr. Sanjay Mehta",
    role: "Director of Safety & Compliance",
    image: "/placeholder.svg",
    bio: "A former pilot and aviation safety expert, Dr. Mehta leads our comprehensive safety programs, maintaining SkylineJet's impeccable safety record through rigorous standards and protocols."
  },
  {
    id: "6",
    name: "Neha Kapoor",
    role: "Head of Sustainability",
    image: "/placeholder.svg",
    bio: "Neha spearheads SkylineJet's environmental initiatives, developing and implementing strategies to reduce our carbon footprint and promote sustainable practices across the organization."
  }
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              About <span className="text-gradient gold-glow">SkylineJet</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Redefining private aviation in India with our commitment to luxury, safety, and exceptional service.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold font-display mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2015, SkylineJet emerged from a vision to transform the private aviation landscape in India. We recognized the need for a service that combined world-class luxury with the efficiency and flexibility that discerning travelers demand.
              </p>
              <p className="text-muted-foreground mb-4">
                Starting with just two aircraft and a small team of aviation enthusiasts, we've grown to become one of India's premier private jet and helicopter charter companies, operating a diverse fleet of meticulously maintained aircraft.
              </p>
              <p className="text-muted-foreground mb-6">
                Our journey has been defined by our unwavering commitment to safety, personalized service, and sustainable operations. As we continue to grow, we remain dedicated to exceeding our clients' expectations and setting new standards in private aviation.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-2xl font-bold">10,000+</span>
                  <span className="text-sm text-muted-foreground">Happy Clients</span>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-2xl font-bold">8+</span>
                  <span className="text-sm text-muted-foreground">Years of Service</span>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-2xl font-bold">20+</span>
                  <span className="text-sm text-muted-foreground">Countries Served</span>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-2xl font-bold">35,000+</span>
                  <span className="text-sm text-muted-foreground">Flight Hours</span>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-2xl font-bold">4.9/5</span>
                  <span className="text-sm text-muted-foreground">Customer Rating</span>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-2xl font-bold">100%</span>
                  <span className="text-sm text-muted-foreground">Safety Record</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden"
            >
              <img 
                src="/placeholder.svg" 
                alt="SkylineJet Headquarters" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-white">
                  <h3 className="font-semibold mb-1">SkylineJet Headquarters</h3>
                  <p className="text-sm opacity-90">Mumbai, India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        <section className="bg-card/20 backdrop-blur-sm py-20 mb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The core principles that guide everything we do at SkylineJet, from how we serve our clients to how we engage with our communities.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Safety First</h3>
                <p className="text-muted-foreground">
                  Safety is non-negotiable. We exceed industry standards with rigorous protocols, continuous training, and state-of-the-art technology to ensure the highest level of safety for our clients.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Exceptional Service</h3>
                <p className="text-muted-foreground">
                  We anticipate our clients' needs and exceed their expectations through personalized attention to detail, responsiveness, and a passion for creating extraordinary experiences.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace forward-thinking approaches to private aviation, continuously seeking new technologies and solutions that enhance our clients' experience and operational efficiency.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <HeartHandshake className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  We are committed to environmental responsibility, implementing sustainable practices, investing in fuel-efficient aircraft, and offering carbon offset programs for our clients.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Our Leadership Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals who lead SkylineJet with vision, expertise, and passion.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        <section className="bg-card/20 backdrop-blur-sm py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Certifications & Recognitions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our commitment to excellence has earned us industry recognition and prestigious certifications.
              </p>
            </motion.div>
            
            <Tabs defaultValue="certifications" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="certifications">Certifications</TabsTrigger>
                  <TabsTrigger value="awards">Awards & Recognition</TabsTrigger>
                  <TabsTrigger value="partners">Partners & Affiliations</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="certifications">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((item) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 * item }}
                      className="bg-card/40 backdrop-blur-sm border border-border/40 rounded-xl p-6 flex flex-col items-center text-center"
                    >
                      <Award className="h-12 w-12 text-primary mb-4" />
                      <h3 className="font-medium">IS-BAO Stage 3</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        International Standard for Business Aircraft Operations
                      </p>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="awards">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((item) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * item }}
                      className="bg-card/40 backdrop-blur-sm border border-border/40 rounded-xl p-6"
                    >
                      <div className="flex items-start">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                          <Star className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Best Private Jet Charter Service</h3>
                          <p className="text-sm text-muted-foreground mb-1">
                            Luxury Travel Awards 2023
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Recognized for exceptional service quality and client satisfaction.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="partners">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.05 * item }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-20 h-20 bg-card/40 rounded-full flex items-center justify-center mb-3">
                        <img 
                          src="/placeholder.svg" 
                          alt={`Partner ${item}`} 
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-center">Partner Organization</h3>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-20">
          <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold font-display mb-4">
                  Join the SkylineJet Family
                </h2>
                <p className="text-muted-foreground mb-6">
                  Whether you're interested in our services, career opportunities, or partnership possibilities, we'd love to hear from you. Contact us today to discover how SkylineJet can elevate your aviation experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Contact Us
                  </Button>
                  <Button variant="outline">
                    Career Opportunities
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="hidden md:block"
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Contact SkylineJet"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
