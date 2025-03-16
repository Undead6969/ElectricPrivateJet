
import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Profile } from '@/lib/types';

// Mock users for demonstration
const MOCK_USERS = [
  {
    id: "1",
    email: "admin@electricprivatejet.com",
    password: "admin123!",
    profile: {
      id: "1",
      first_name: "Admin",
      last_name: "User",
      email: "admin@electricprivatejet.com",
      phone: "+917338666982",
      role: "admin" as const,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  },
  {
    id: "2",
    email: "user@skylinejet.com",
    password: "user123",
    profile: {
      id: "2",
      first_name: "Regular",
      last_name: "User",
      email: "user@skylinejet.com",
      phone: "+917338666983",
      role: "user" as const,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  }
];

interface AuthContextType {
  user: { id: string; email: string } | null;
  profile: Profile | null;
  isAdmin: boolean;
  isLoading: boolean;
  signUp: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<Profile>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check localStorage for stored auth
    const storedUser = localStorage.getItem('user');
    const storedProfile = localStorage.getItem('profile');
    
    if (storedUser && storedProfile) {
      const parsedUser = JSON.parse(storedUser);
      const parsedProfile = JSON.parse(storedProfile);
      
      setUser(parsedUser);
      setProfile(parsedProfile);
      setIsAdmin(parsedProfile.role === 'admin');
    }
    
    setIsLoading(false);
  }, []);

  const signUp = async (email: string, password: string, firstName: string, lastName: string) => {
    try {
      // Check if user already exists
      const existingUser = MOCK_USERS.find(u => u.email === email);
      if (existingUser) {
        throw new Error('User with this email already exists');
      }
      
      // Create new user
      const newUserId = String(Date.now());
      const newUser = {
        id: newUserId,
        email,
        password,
        profile: {
          id: newUserId,
          first_name: firstName,
          last_name: lastName,
          email,
          phone: null,
          role: 'user' as const,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      };
      
      // Add to mock users (in a real app, this would be an API call)
      MOCK_USERS.push(newUser);
      
      // Set user and profile
      setUser({ id: newUserId, email });
      setProfile(newUser.profile);
      setIsAdmin(false);
      
      // Store in localStorage
      localStorage.setItem('user', JSON.stringify({ id: newUserId, email }));
      localStorage.setItem('profile', JSON.stringify(newUser.profile));
      
      toast.success('Account created successfully!');
      navigate('/');
    } catch (error: any) {
      toast.error(error.message || 'Failed to create account');
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      // Find user
      const foundUser = MOCK_USERS.find(u => u.email === email && u.password === password);
      if (!foundUser) {
        throw new Error('Invalid email or password');
      }
      
      // Set user and profile
      setUser({ id: foundUser.id, email: foundUser.email });
      setProfile(foundUser.profile);
      setIsAdmin(foundUser.profile.role === 'admin');
      
      // Store in localStorage
      localStorage.setItem('user', JSON.stringify({ id: foundUser.id, email: foundUser.email }));
      localStorage.setItem('profile', JSON.stringify(foundUser.profile));
      
      toast.success('Signed in successfully!');
      navigate('/');
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign in');
      throw error;
    }
  };

  const signOut = async () => {
    try {
      // Clear state
      setUser(null);
      setProfile(null);
      setIsAdmin(false);
      
      // Clear localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('profile');
      
      toast.success('Signed out successfully!');
      navigate('/');
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign out');
      throw error;
    }
  };

  const updateProfile = async (updates: Partial<Profile>) => {
    try {
      if (!user || !profile) throw new Error('User not authenticated');

      // Update profile in state
      const updatedProfile = { ...profile, ...updates, updated_at: new Date().toISOString() };
      setProfile(updatedProfile);
      
      // Update profile in localStorage
      localStorage.setItem('profile', JSON.stringify(updatedProfile));
      
      // Update in MOCK_USERS (in a real app, this would be an API call)
      const userIndex = MOCK_USERS.findIndex(u => u.id === user.id);
      if (userIndex !== -1) {
        MOCK_USERS[userIndex].profile = updatedProfile;
      }
      
      toast.success('Profile updated successfully!');
    } catch (error: any) {
      toast.error(error.message || 'Failed to update profile');
      throw error;
    }
  };

  const value = {
    user,
    profile,
    isAdmin,
    isLoading,
    signUp,
    signIn,
    signOut,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}
