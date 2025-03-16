
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Aircraft, Profile, Booking, NewsArticle } from '@/lib/types';

const Admin = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect non-admin users
    if (user && !isAdmin) {
      toast.error('Access denied. Admin privileges required.');
      navigate('/');
    } else if (!user) {
      toast.error('Please sign in to access this page.');
      navigate('/auth');
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [user, isAdmin, navigate]);
  
  const { data: users, isLoading: usersLoading } = useQuery({
    queryKey: ['admin-users'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Profile[];
    },
    enabled: !!user && isAdmin,
  });
  
  const { data: bookings, isLoading: bookingsLoading } = useQuery({
    queryKey: ['admin-bookings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('bookings')
        .select('*, profiles(first_name, last_name, email)')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as (Booking & { profiles: Pick<Profile, 'first_name' | 'last_name' | 'email'> })[];
    },
    enabled: !!user && isAdmin,
  });
  
  const { data: aircraft, isLoading: aircraftLoading } = useQuery({
    queryKey: ['admin-aircraft'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('aircraft')
        .select('*')
        .order('name', { ascending: true });
      
      if (error) throw error;
      return data as Aircraft[];
    },
    enabled: !!user && isAdmin,
  });
  
  const { data: news, isLoading: newsLoading } = useQuery({
    queryKey: ['admin-news'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      return data as NewsArticle[];
    },
    enabled: !!user && isAdmin,
  });
  
  const updateBookingStatus = async (id: string, status: 'pending' | 'confirmed' | 'cancelled') => {
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ status })
        .eq('id', id);
      
      if (error) throw error;
      toast.success(`Booking status updated to ${status}`);
    } catch (error: any) {
      toast.error(`Failed to update booking: ${error.message}`);
    }
  };
  
  const updateUserRole = async (id: string, role: 'user' | 'admin') => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ role })
        .eq('id', id);
      
      if (error) throw error;
      toast.success(`User role updated to ${role}`);
    } catch (error: any) {
      toast.error(`Failed to update user role: ${error.message}`);
    }
  };
  
  const updateAircraftStatus = async (id: string, status: 'available' | 'maintenance' | 'booked' | 'unavailable') => {
    try {
      const { error } = await supabase
        .from('aircraft')
        .update({ status })
        .eq('id', id);
      
      if (error) throw error;
      toast.success(`Aircraft status updated to ${status}`);
    } catch (error: any) {
      toast.error(`Failed to update aircraft status: ${error.message}`);
    }
  };
  
  if (!user || !isAdmin) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Admin <span className="text-gradient gold-glow">Dashboard</span>
            </h1>
            
            <Tabs defaultValue="users" className="w-full">
              <TabsList className="mb-8 grid w-full grid-cols-4 rounded-lg bg-card/30 p-1">
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="bookings">Bookings</TabsTrigger>
                <TabsTrigger value="aircraft">Aircraft</TabsTrigger>
                <TabsTrigger value="news">News & Media</TabsTrigger>
              </TabsList>
              
              <TabsContent value="users" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold">User Management</h2>
                  <div className="flex gap-4">
                    <Input placeholder="Search users..." className="w-60" />
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Search
                    </Button>
                  </div>
                </div>
                
                <div className="bg-card/20 backdrop-blur-sm rounded-lg border border-border/40 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-card/40 border-b border-border">
                          <th className="px-6 py-4 text-left text-sm font-medium">Name</th>
                          <th className="px-6 py-4 text-left text-sm font-medium">Email</th>
                          <th className="px-6 py-4 text-left text-sm font-medium">Role</th>
                          <th className="px-6 py-4 text-left text-sm font-medium">Joined</th>
                          <th className="px-6 py-4 text-right text-sm font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/40">
                        {usersLoading ? (
                          <tr>
                            <td colSpan={5} className="px-6 py-4 text-center">Loading users...</td>
                          </tr>
                        ) : users && users.length > 0 ? (
                          users.map((profile) => (
                            <tr key={profile.id} className="hover:bg-card/40 transition-colors">
                              <td className="px-6 py-4">{profile.first_name} {profile.last_name}</td>
                              <td className="px-6 py-4">{profile.email}</td>
                              <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  profile.role === 'admin' 
                                    ? 'bg-primary/20 text-primary' 
                                    : 'bg-muted text-muted-foreground'
                                }`}>
                                  {profile.role}
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                {new Date(profile.created_at).toLocaleDateString()}
                              </td>
                              <td className="px-6 py-4 text-right">
                                <Select 
                                  defaultValue={profile.role}
                                  onValueChange={(value) => updateUserRole(profile.id, value as 'user' | 'admin')}
                                >
                                  <SelectTrigger className="w-32">
                                    <SelectValue placeholder="Select role" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="user">User</SelectItem>
                                    <SelectItem value="admin">Admin</SelectItem>
                                  </SelectContent>
                                </Select>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={5} className="px-6 py-4 text-center">No users found</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="bookings" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold">Booking Management</h2>
                  <div className="flex gap-4">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="confirmed">Confirmed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Search bookings..." className="w-60" />
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Search
                    </Button>
                  </div>
                </div>
                
                <div className="bg-card/20 backdrop-blur-sm rounded-lg border border-border/40 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-card/40 border-b border-border">
                          <th className="px-6 py-4 text-left text-sm font-medium">Customer</th>
                          <th className="px-6 py-4 text-left text-sm font-medium">Route</th>
                          <th className="px-6 py-4 text-left text-sm font-medium">Date</th>
                          <th className="px-6 py-4 text-left text-sm font-medium">Status</th>
                          <th className="px-6 py-4 text-right text-sm font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/40">
                        {bookingsLoading ? (
                          <tr>
                            <td colSpan={5} className="px-6 py-4 text-center">Loading bookings...</td>
                          </tr>
                        ) : bookings && bookings.length > 0 ? (
                          bookings.map((booking) => (
                            <tr key={booking.id} className="hover:bg-card/40 transition-colors">
                              <td className="px-6 py-4">
                                {booking.profiles?.first_name} {booking.profiles?.last_name}
                              </td>
                              <td className="px-6 py-4">
                                {booking.origin} to {booking.destination}
                              </td>
                              <td className="px-6 py-4">
                                {new Date(booking.departure_date).toLocaleDateString()}
                              </td>
                              <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  booking.status === 'confirmed' 
                                    ? 'bg-green-100 text-green-800' 
                                    : booking.status === 'cancelled'
                                    ? 'bg-red-100 text-red-800'
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {booking.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-right">
                                <Select 
                                  defaultValue={booking.status}
                                  onValueChange={(value) => 
                                    updateBookingStatus(booking.id, value as 'pending' | 'confirmed' | 'cancelled')
                                  }
                                >
                                  <SelectTrigger className="w-32">
                                    <SelectValue placeholder="Select status" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="confirmed">Confirmed</SelectItem>
                                    <SelectItem value="cancelled">Cancelled</SelectItem>
                                  </SelectContent>
                                </Select>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={5} className="px-6 py-4 text-center">No bookings found</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="aircraft" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold">Aircraft Management</h2>
                  <div className="flex gap-4">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Filter by type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="jet">Jets</SelectItem>
                        <SelectItem value="helicopter">Helicopters</SelectItem>
                        <SelectItem value="sustainable">Sustainable</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Add New Aircraft
                    </Button>
                  </div>
                </div>
                
                <div className="bg-card/20 backdrop-blur-sm rounded-lg border border-border/40 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-card/40 border-b border-border">
                          <th className="px-6 py-4 text-left text-sm font-medium">Aircraft</th>
                          <th className="px-6 py-4 text-left text-sm font-medium">Type</th>
                          <th className="px-6 py-4 text-left text-sm font-medium">Capacity</th>
                          <th className="px-6 py-4 text-left text-sm font-medium">Status</th>
                          <th className="px-6 py-4 text-right text-sm font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/40">
                        {aircraftLoading ? (
                          <tr>
                            <td colSpan={5} className="px-6 py-4 text-center">Loading aircraft...</td>
                          </tr>
                        ) : aircraft && aircraft.length > 0 ? (
                          aircraft.map((item) => (
                            <tr key={item.id} className="hover:bg-card/40 transition-colors">
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <div className="h-10 w-10 flex-shrink-0 rounded bg-card/50 mr-3">
                                    {item.image_url && (
                                      <img
                                        src={item.image_url}
                                        alt={item.name}
                                        className="h-10 w-10 rounded object-cover"
                                      />
                                    )}
                                  </div>
                                  <div>
                                    <div className="font-medium">{item.name}</div>
                                    <div className="text-xs text-muted-foreground">{item.manufacturer}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  item.aircraft_type === 'jet' 
                                    ? 'bg-blue-100 text-blue-800' 
                                    : item.aircraft_type === 'helicopter'
                                    ? 'bg-purple-100 text-purple-800'
                                    : 'bg-green-100 text-green-800'
                                }`}>
                                  {item.aircraft_type}
                                </span>
                              </td>
                              <td className="px-6 py-4">{item.capacity} passengers</td>
                              <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  item.status === 'available' 
                                    ? 'bg-green-100 text-green-800' 
                                    : item.status === 'maintenance'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : item.status === 'booked'
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-red-100 text-red-800'
                                }`}>
                                  {item.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-right">
                                <Select 
                                  defaultValue={item.status}
                                  onValueChange={(value) => 
                                    updateAircraftStatus(
                                      item.id, 
                                      value as 'available' | 'maintenance' | 'booked' | 'unavailable'
                                    )
                                  }
                                >
                                  <SelectTrigger className="w-32">
                                    <SelectValue placeholder="Select status" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="available">Available</SelectItem>
                                    <SelectItem value="maintenance">Maintenance</SelectItem>
                                    <SelectItem value="booked">Booked</SelectItem>
                                    <SelectItem value="unavailable">Unavailable</SelectItem>
                                  </SelectContent>
                                </Select>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={5} className="px-6 py-4 text-center">No aircraft found</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="news" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold">News & Media</h2>
                  <div className="flex gap-4">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Filter by category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="company">Company</SelectItem>
                        <SelectItem value="industry">Industry</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="sustainability">Sustainability</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Create New Article
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {newsLoading ? (
                    Array(3).fill(null).map((_, index) => (
                      <div key={index} className="h-64 bg-card/20 animate-pulse rounded-lg"></div>
                    ))
                  ) : news && news.length > 0 ? (
                    news.map((article) => (
                      <div 
                        key={article.id} 
                        className="bg-card/20 backdrop-blur-sm rounded-lg border border-border/40 overflow-hidden"
                      >
                        <div className="h-40 bg-card/40">
                          {article.image_url && (
                            <img
                              src={article.image_url}
                              alt={article.title}
                              className="h-full w-full object-cover"
                            />
                          )}
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              article.category === 'company' 
                                ? 'bg-blue-100 text-blue-800' 
                                : article.category === 'industry'
                                ? 'bg-purple-100 text-purple-800'
                                : article.category === 'technology'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-green-100 text-green-800'
                            }`}>
                              {article.category}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {new Date(article.published_at).toLocaleDateString()}
                            </span>
                          </div>
                          <h3 className="font-semibold line-clamp-2 mb-2">{article.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                            {article.content}
                          </p>
                          <div className="flex justify-between">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="destructive" size="sm">Delete</Button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-3 py-8 text-center text-muted-foreground">
                      No news articles found
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
