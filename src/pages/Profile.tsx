
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/AuthContext';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if user is not logged in
    if (!user) {
      toast.error('Please sign in to access your profile');
      navigate('/auth');
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  if (!user) {
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
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Your <span className="text-gradient gold-glow">Profile</span>
            </h1>
            
            <div className="bg-card/20 backdrop-blur-sm rounded-lg p-8 border border-border/40 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-2xl font-bold text-primary mr-4">
                  {user.firstName?.charAt(0) || 'U'}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">
                    {user.firstName} {user.lastName}
                  </h2>
                  <p className="text-muted-foreground">{user.email}</p>
                  <p className="text-xs text-muted-foreground mt-1">Member since {new Date().toLocaleDateString()}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" value={user.firstName || ''} readOnly className="mt-1 bg-card/40" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" value={user.lastName || ''} readOnly className="mt-1 bg-card/40" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" value={user.email} readOnly className="mt-1 bg-card/40" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" value="+91 7338666982" readOnly className="mt-1 bg-card/40" />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button variant="outline" className="mr-3" onClick={() => navigate('/membership')}>
                  View Membership
                </Button>
                <Button onClick={handleLogout} variant="destructive">
                  Logout
                </Button>
              </div>
            </div>
            
            <div className="bg-card/20 backdrop-blur-sm rounded-lg p-8 border border-border/40 mb-8">
              <h2 className="text-xl font-semibold mb-4">My Bookings</h2>
              <div className="border border-border/40 rounded-lg">
                <div className="p-6 text-center text-muted-foreground">
                  You don't have any bookings yet.
                </div>
              </div>
            </div>
            
            <div className="bg-card/20 backdrop-blur-sm rounded-lg p-8 border border-border/40">
              <h2 className="text-xl font-semibold mb-4">Preferences</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="preferredAircraft">Preferred Aircraft</Label>
                  <Input id="preferredAircraft" placeholder="Not set" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="dietaryRequirements">Dietary Requirements</Label>
                  <Input id="dietaryRequirements" placeholder="Not set" className="mt-1" />
                </div>
                <div className="pt-2">
                  <Button>Save Preferences</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;
