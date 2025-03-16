
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Check, X, User, Plane, Calendar, Clock, AlertTriangle, BarChart2 } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Profile, Aircraft, Booking, NewsArticle } from '@/lib/types';

// Mock data for Admin page
const MOCK_PROFILES: Profile[] = [
  {
    id: "1",
    first_name: "John",
    last_name: "Doe",
    email: "john@example.com",
    phone: "+91 7338666982",
    role: "admin",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "2",
    first_name: "Jane",
    last_name: "Smith",
    email: "jane@example.com",
    phone: "+91 7338666983",
    role: "user",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

const MOCK_BOOKINGS: (Booking & { profile: Pick<Profile, "first_name" | "last_name" | "email"> })[] = [
  {
    id: "1",
    user_id: "2",
    origin: "New York",
    destination: "Los Angeles",
    departure_date: new Date().toISOString(),
    return_date: new Date(Date.now() + 86400000 * 7).toISOString(),
    passengers: 4,
    aircraft_type: "jet",
    status: "pending",
    special_requests: "Gluten-free meal",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    profile: {
      first_name: "Jane",
      last_name: "Smith",
      email: "jane@example.com"
    }
  },
  {
    id: "2",
    user_id: "3",
    origin: "London",
    destination: "Paris",
    departure_date: new Date().toISOString(),
    return_date: null,
    passengers: 2,
    aircraft_type: "helicopter",
    status: "confirmed",
    special_requests: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    profile: {
      first_name: "Robert",
      last_name: "Johnson",
      email: "robert@example.com"
    }
  }
];

const MOCK_AIRCRAFT: Aircraft[] = [
  {
    id: "1",
    name: "G-450",
    model: "Gulfstream G-450",
    manufacturer: "Gulfstream",
    year: 2016,
    capacity: 14,
    range_km: 8056,
    cruising_speed_kmh: 904,
    image_url: "https://images.unsplash.com/photo-1583266584190-0daaa8b84bed?q=80&w=1975&auto=format&fit=crop",
    aircraft_type: "jet",
    status: "available",
    description: "Luxurious mid-size business jet for transcontinental travel.",
    price_per_hour: 5600,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "2",
    name: "Bell 429",
    model: "Bell 429",
    manufacturer: "Bell",
    year: 2019,
    capacity: 7,
    range_km: 722,
    cruising_speed_kmh: 278,
    image_url: "https://images.unsplash.com/photo-1622038492134-5c7ce80ae10e?q=80&w=1970&auto=format&fit=crop",
    aircraft_type: "helicopter",
    status: "maintenance",
    description: "Modern light twin-engine helicopter with spacious cabin and advanced avionics.",
    price_per_hour: 3200,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

const MOCK_NEWS: NewsArticle[] = [
  {
    id: "1",
    title: "Introducing Our New Sustainable Aviation Initiative",
    content: "We're excited to announce our commitment to reduce carbon emissions by 50% by 2030 through a new fleet of sustainable aircraft and carbon offset programs.",
    category: "company",
    published_at: new Date().toISOString(),
    image_url: "https://images.unsplash.com/photo-1599753631706-7b1579937690?q=80&w=2070&auto=format&fit=crop",
    author: "Emma Richards",
    is_featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "2",
    title: "Private Aviation Market Growth Surges Post-Pandemic",
    content: "Industry analysts report a 25% increase in private jet usage as businesses and wealthy individuals seek safer and more convenient travel options.",
    category: "industry",
    published_at: new Date().toISOString(),
    image_url: "https://images.unsplash.com/photo-1558023567-33b89d176d83?q=80&w=2070&auto=format&fit=crop",
    author: "Michael Wong",
    is_featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

const AdminPage = () => {
  const { user, profile, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<(Booking & { profile: Pick<Profile, "first_name" | "last_name" | "email"> })[]>([]);
  const [pendingBookings, setPendingBookings] = useState<(Booking & { profile: Pick<Profile, "first_name" | "last_name" | "email"> })[]>([]);
  const [users, setUsers] = useState<Profile[]>([]);
  const [aircraft, setAircraft] = useState<Aircraft[]>([]);
  const [maintenanceAircraft, setMaintenanceAircraft] = useState<Aircraft[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Redirect if not admin
    if (!isAdmin) {
      toast.error('Admin access only');
      navigate('/');
      return;
    }

    // Load mock data
    const loadData = async () => {
      try {
        setUsers(MOCK_PROFILES);
        setBookings(MOCK_BOOKINGS);
        setPendingBookings(MOCK_BOOKINGS.filter(b => b.status === "pending"));
        setAircraft(MOCK_AIRCRAFT);
        setMaintenanceAircraft(MOCK_AIRCRAFT.filter(a => a.status === "maintenance"));
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading admin data:', error);
        toast.error('Failed to load admin data');
      }
    };

    loadData();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [isAdmin, navigate]);

  const handleApproveBooking = (id: string) => {
    const updatedBookings = bookings.map(booking => 
      booking.id === id ? { ...booking, status: "confirmed" as const } : booking
    );
    setBookings(updatedBookings);
    setPendingBookings(updatedBookings.filter(b => b.status === "pending"));
    toast.success('Booking approved');
  };

  const handleRejectBooking = (id: string) => {
    const updatedBookings = bookings.map(booking => 
      booking.id === id ? { ...booking, status: "cancelled" as const } : booking
    );
    setBookings(updatedBookings);
    setPendingBookings(updatedBookings.filter(b => b.status === "pending"));
    toast.success('Booking rejected');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-28 pb-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading admin panel...</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-10">
            Admin <span className="text-gradient gold-glow">Dashboard</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <DashboardCard 
              title="Total Users"
              value={users.length.toString()}
              icon={<User className="h-6 w-6" />}
              description="Active account holders"
              trend="+5% from last month"
              trendUp={true}
            />
            
            <DashboardCard 
              title="Available Aircraft"
              value={aircraft.filter(a => a.status === "available").length.toString()}
              icon={<Plane className="h-6 w-6" />}
              description="Ready for booking"
              trend="-1 from last week"
              trendUp={false}
            />
            
            <DashboardCard 
              title="Pending Bookings"
              value={pendingBookings.length.toString()}
              icon={<Calendar className="h-6 w-6" />}
              description="Awaiting approval"
              trend="+3 from yesterday"
              trendUp={false}
            />
            
            <DashboardCard 
              title="Maintenance"
              value={maintenanceAircraft.length.toString()}
              icon={<AlertTriangle className="h-6 w-6" />}
              description="Aircraft in maintenance"
              trend="Unchanged"
              trendUp={true}
            />
          </div>
          
          <Tabs defaultValue="bookings" className="mb-8">
            <TabsList className="w-full md:w-auto">
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="aircraft">Aircraft</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="statistics">Statistics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="bookings" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Booking Requests</CardTitle>
                  <CardDescription>Manage and process customer booking requests</CardDescription>
                </CardHeader>
                <CardContent>
                  {pendingBookings.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No pending bookings
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {pendingBookings.map(booking => (
                        <div key={booking.id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg">
                          <div>
                            <div className="font-medium">{booking.profile.first_name} {booking.profile.last_name}</div>
                            <div className="text-sm text-muted-foreground mb-2">{booking.origin} to {booking.destination}</div>
                            <div className="text-xs">
                              {new Date(booking.departure_date).toLocaleDateString()} • {booking.passengers} passengers
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 mt-3 md:mt-0">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="text-destructive border-destructive hover:bg-destructive/10"
                              onClick={() => handleRejectBooking(booking.id)}
                            >
                              <X className="w-4 h-4 mr-1" /> Reject
                            </Button>
                            <Button 
                              size="sm"
                              onClick={() => handleApproveBooking(booking.id)}
                            >
                              <Check className="w-4 h-4 mr-1" /> Approve
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="users" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage user accounts and permissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2">User</th>
                          <th className="text-left py-3 px-2">Email</th>
                          <th className="text-left py-3 px-2">Role</th>
                          <th className="text-left py-3 px-2">Joined</th>
                          <th className="text-left py-3 px-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map(user => (
                          <tr key={user.id} className="border-b">
                            <td className="py-3 px-2">
                              <div className="flex items-center">
                                <Avatar className="h-8 w-8 mr-2">
                                  <AvatarFallback>{user.first_name?.charAt(0) || 'U'}</AvatarFallback>
                                </Avatar>
                                <span>{user.first_name} {user.last_name}</span>
                              </div>
                            </td>
                            <td className="py-3 px-2">{user.email}</td>
                            <td className="py-3 px-2">
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                user.role === 'admin' ? 'bg-primary/20 text-primary' : 'bg-slate-100 text-slate-800'
                              }`}>
                                {user.role}
                              </span>
                            </td>
                            <td className="py-3 px-2">{new Date(user.created_at).toLocaleDateString()}</td>
                            <td className="py-3 px-2">
                              <Button variant="ghost" size="sm">Edit</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="aircraft" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Fleet Management</CardTitle>
                  <CardDescription>Manage your aircraft fleet</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {aircraft.map(aircraft => (
                      <div key={aircraft.id} className="border rounded-lg overflow-hidden">
                        <div className="aspect-video relative overflow-hidden">
                          <img 
                            src={aircraft.image_url || "https://placehold.co/400x300?text=No+Image"} 
                            alt={aircraft.name}
                            className="w-full h-full object-cover"
                          />
                          <div className={`absolute top-2 right-2 px-2 py-1 text-xs rounded ${
                            aircraft.status === 'available' ? 'bg-green-500 text-white' :
                            aircraft.status === 'maintenance' ? 'bg-yellow-500 text-white' :
                            aircraft.status === 'booked' ? 'bg-blue-500 text-white' :
                            'bg-red-500 text-white'
                          }`}>
                            {aircraft.status}
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium">{aircraft.name}</h3>
                          <p className="text-sm text-muted-foreground">{aircraft.model}</p>
                          <div className="text-xs mt-2 space-y-1">
                            <div>Capacity: {aircraft.capacity} passengers</div>
                            <div>Range: {aircraft.range_km} km</div>
                            <div>Hourly Rate: ₹{aircraft.price_per_hour.toLocaleString()}</div>
                          </div>
                          <div className="mt-3">
                            <Button variant="outline" size="sm">Manage</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="border border-dashed rounded-lg flex items-center justify-center h-64">
                      <Button variant="ghost">+ Add New Aircraft</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="content" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Content Management</CardTitle>
                  <CardDescription>Manage website content and news articles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">News Articles</h3>
                      <Button size="sm">Add New Article</Button>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-2">Title</th>
                            <th className="text-left py-3 px-2">Category</th>
                            <th className="text-left py-3 px-2">Author</th>
                            <th className="text-left py-3 px-2">Published</th>
                            <th className="text-left py-3 px-2">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {MOCK_NEWS.map(article => (
                            <tr key={article.id} className="border-b">
                              <td className="py-3 px-2">
                                <div className="font-medium">{article.title}</div>
                              </td>
                              <td className="py-3 px-2">
                                <span className="text-xs px-2 py-1 rounded-full bg-slate-100">
                                  {article.category}
                                </span>
                              </td>
                              <td className="py-3 px-2">{article.author}</td>
                              <td className="py-3 px-2">{new Date(article.published_at).toLocaleDateString()}</td>
                              <td className="py-3 px-2">
                                <div className="flex space-x-2">
                                  <Button variant="ghost" size="sm">Edit</Button>
                                  <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="statistics" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Business Analytics</CardTitle>
                  <CardDescription>Review business performance and trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Monthly Revenue (₹)</h3>
                      <div className="h-64 flex items-center justify-center border rounded-lg">
                        <div className="flex items-center">
                          <BarChart2 className="h-5 w-5 mr-2 text-muted-foreground" />
                          <span className="text-muted-foreground">Chart Visualization Placeholder</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Fleet Utilization (%)</h3>
                      <div className="h-64 flex items-center justify-center border rounded-lg">
                        <div className="flex items-center">
                          <BarChart2 className="h-5 w-5 mr-2 text-muted-foreground" />
                          <span className="text-muted-foreground">Chart Visualization Placeholder</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

interface DashboardCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description: string;
  trend: string;
  trendUp: boolean;
}

const DashboardCard = ({ title, value, icon, description, trend, trendUp }: DashboardCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
          </div>
          <div className="bg-primary/20 p-2 rounded-full">
            {icon}
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
        <div className={`text-xs mt-3 ${trendUp ? 'text-green-500' : 'text-red-500'}`}>
          {trend}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
