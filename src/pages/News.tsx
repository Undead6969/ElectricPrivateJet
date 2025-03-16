
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { NewsArticle } from '@/lib/types';
import { Calendar, ChevronRight, Search } from 'lucide-react';

// Mock news data
const MOCK_NEWS: NewsArticle[] = [
  {
    id: "1",
    title: "SkylineJet Announces New Sustainable Fleet Addition",
    content: "We are proud to announce the addition of the new Lilium Jet to our fleet, marking our commitment to sustainable aviation. This all-electric aircraft offers zero-emission travel for up to 6 passengers, perfect for urban and regional transportation with minimal environmental impact.",
    image_url: "/placeholder.svg",
    author: "Rajiv Sharma",
    published_at: new Date(2023, 11, 15).toISOString(),
    is_featured: true,
    category: "company",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "2",
    title: "Private Aviation Market in India to Triple by 2028",
    content: "A recent industry report projects that the private aviation market in India will triple in size by 2028, driven by increasing demand from high-net-worth individuals and corporations seeking efficient travel solutions amidst growing connectivity challenges.",
    image_url: "/placeholder.svg",
    author: "Priya Kapoor",
    published_at: new Date(2023, 10, 22).toISOString(),
    is_featured: false,
    category: "industry",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "3",
    title: "The Future of Air Mobility: eVTOL Technology",
    content: "Electric Vertical Take-Off and Landing (eVTOL) aircraft are set to revolutionize urban air mobility. We explore the technology behind these innovative aircraft and how they could transform short-distance travel in congested urban environments.",
    image_url: "/placeholder.svg",
    author: "Dr. Vikram Mehta",
    published_at: new Date(2023, 9, 8).toISOString(),
    is_featured: false,
    category: "technology",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "4",
    title: "SkylineJet Partners with Carbon Offset Program",
    content: "As part of our ongoing commitment to environmental responsibility, SkylineJet has partnered with a leading carbon offset program. This initiative allows our clients to neutralize the carbon footprint of their flights through investments in verified environmental projects.",
    image_url: "/placeholder.svg",
    author: "Anita Desai",
    published_at: new Date(2023, 8, 17).toISOString(),
    is_featured: true,
    category: "sustainability",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "5",
    title: "SkylineJet Opens New Lounge at Mumbai Airport",
    content: "We are excited to announce the opening of our new exclusive lounge at Mumbai International Airport. The state-of-the-art facility offers premium amenities, private meeting rooms, and seamless transition to your private aircraft.",
    image_url: "/placeholder.svg",
    author: "Rahul Patel",
    published_at: new Date(2023, 7, 30).toISOString(),
    is_featured: false,
    category: "company",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "6",
    title: "Sustainable Aviation Fuel: A Game Changer for Private Aviation",
    content: "Sustainable Aviation Fuel (SAF) is emerging as a critical solution for reducing the environmental impact of private aviation. We examine the latest developments in SAF technology and how it's being adopted across the industry.",
    image_url: "/placeholder.svg",
    author: "Dr. Neha Singh",
    published_at: new Date(2023, 6, 12).toISOString(),
    is_featured: false,
    category: "sustainability",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

const News = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const featuredArticles = MOCK_NEWS.filter(article => article.is_featured);
  
  const filteredArticles = MOCK_NEWS.filter(article => {
    const matchesCategory = selectedTab === 'all' || article.category === selectedTab;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
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
              News & <span className="text-gradient gold-glow">Media</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest news, insights, and developments from SkylineJet and the private aviation industry.
            </p>
          </motion.div>
          
          {featuredArticles.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Featured Stories</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.slice(0, 2).map((article) => (
                  <FeaturedArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          )}
          
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <Tabs defaultValue="all" value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="company">Company</TabsTrigger>
                <TabsTrigger value="industry">Industry</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 w-full md:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))
            ) : (
              <div className="col-span-3 py-16 text-center">
                <p className="text-muted-foreground">No articles found matching your criteria.</p>
                <Button 
                  variant="link" 
                  className="mt-2"
                  onClick={() => {
                    setSelectedTab('all');
                    setSearchQuery('');
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="flex items-center gap-2">
              Load More <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="mt-20 bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-muted-foreground mb-6">
                  Stay informed with the latest news, industry insights, and exclusive offers from SkylineJet. Join our mailing list today.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input placeholder="Your email address" className="flex-grow" />
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap">
                    Subscribe Now
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <img 
                  src="/placeholder.svg" 
                  alt="Newsletter"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

interface ArticleCardProps {
  article: NewsArticle;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden hover:shadow-lg transition-all"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={article.image_url || "/placeholder.svg"} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            article.category === 'company' 
              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
              : article.category === 'industry'
              ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
              : article.category === 'technology'
              ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
              : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
          }`}>
            {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
          </span>
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date(article.published_at).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </div>
        </div>
        
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 h-14">
          {article.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {article.content}
        </p>
        
        <div className="flex justify-between items-center pt-3 border-t border-border/40">
          {article.author && (
            <div className="text-sm">
              By <span className="font-medium">{article.author}</span>
            </div>
          )}
          <Button variant="link" className="text-primary p-0">
            Read More
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden hover:shadow-lg transition-all"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-full">
          <img 
            src={article.image_url || "/placeholder.svg"} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              article.category === 'company' 
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
                : article.category === 'industry'
                ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                : article.category === 'technology'
                ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
            }`}>
              {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
            </span>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              {new Date(article.published_at).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </div>
          </div>
          
          <h3 className="font-semibold text-xl mb-4">
            {article.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 flex-grow">
            {article.content}
          </p>
          
          <div className="flex justify-between items-center pt-4 border-t border-border/40 mt-auto">
            {article.author && (
              <div className="text-sm">
                By <span className="font-medium">{article.author}</span>
              </div>
            )}
            <Button variant="link" className="text-primary p-0">
              Read Full Story
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default News;
