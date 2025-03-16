import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
          
          <div className="relative z-10 flex items-center justify-center min-h-[60vh]">
            <div className="glass-card p-12 rounded-xl backdrop-blur-sm text-center max-w-lg mx-4">
              <div className="mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h1 className="text-6xl font-bold mb-4">
                <span className="text-gradient gold-glow">404</span>
              </h1>
              <p className="text-2xl text-foreground mb-4">Destination Not Found</p>
              <p className="text-muted-foreground mb-8">The flight path you're looking for seems to be outside our service routes. Let's get you back to familiar skies.</p>
              <button
                onClick={() => navigate('/')}
                className="bg-primary text-primary-foreground shadow-gold px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
              >
                Return to Home
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
