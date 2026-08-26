import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const openWA = () => {
    const waNum = "917008749781";
    const waMsg = "Hi! I'd like to place an order from Utkal Spoon Cloud Kitchen.";
    window.open(`https://wa.me/${waNum}?text=${encodeURIComponent(waMsg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
      </div>

      <div className="container relative z-10 px-4 pt-28 pb-12">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 border border-primary/50 text-xs md:text-sm font-bold text-primary mb-6 shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
              <span className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0 animate-pulse"></span>
              Now Open · Sarkhej, Ahmedabad
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-primary drop-shadow-[0_0_30px_rgba(255,100,20,0.35)]">Utkal Spoon</span>
              <br />
              <span className="text-foreground">Cloud Kitchen</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-semibold tracking-wide">
              Taste and Quality meets Wellness
            </p>
            <p className="text-lg md:text-xl text-muted-foreground italic">
              Ghar ka Quality Khana ka majja le lo...
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center pt-8 px-2 sm:px-0">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all w-full sm:w-auto"
              onClick={() => window.location.href = 'tel:7008749781'}
              aria-label="Call to order now"
            >
              <Phone className="mr-2 h-5 w-5" />
              Order Now
            </Button>
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold px-8 py-6 text-lg shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] transition-all w-full sm:w-auto"
              onClick={openWA}
              aria-label="Order on WhatsApp"
            >
              <MessageCircle className="mr-2 h-5 w-5 fill-current" />
              WhatsApp Order
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/50 hover:bg-primary/10 text-foreground font-semibold px-8 py-6 text-lg w-full sm:w-auto backdrop-blur-sm"
              onClick={() => {
                const menuElement = document.getElementById('menu');
                if (menuElement) {
                  menuElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              aria-label="Scroll to menu section"
            >
              View Menu
            </Button>
          </div>

          <div className="pt-6">
            <p className="text-sm text-muted-foreground mb-3">Also order on:</p>
            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 px-2 sm:px-0">
              <a href="https://www.swiggy.com/city/ahmedabad/utaklcloud-kitchen-prahlad-nagar-rest1422492" target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FC8019] text-white font-bold hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(252,128,25,0.4)] transition-all w-full sm:w-auto">
                <svg width="22" height="22" viewBox="0 0 50 50" fill="none"><rect width="50" height="50" rx="10" fill="white"/><path d="M25 8C15.611 8 8 15.611 8 25C8 34.389 15.611 42 25 42C34.389 42 42 34.389 42 25C42 15.611 34.389 8 25 8ZM25 14C25 14 32 18.5 32 25C32 28.866 28.866 32 25 32C21.134 32 18 28.866 18 25C18 22.567 19.209 20.418 21.068 19.12" stroke="#FC8019" strokeWidth="2.5" strokeLinecap="round"/><circle cx="25" cy="25" r="4" fill="#FC8019"/></svg>
                Swiggy
              </a>
              <a href="http://zoma.to/r/22376644" target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#E23744] text-white font-bold hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(226,55,68,0.4)] transition-all w-full sm:w-auto">
                <svg width="22" height="22" viewBox="0 0 50 50" fill="none"><rect width="50" height="50" rx="10" fill="white"/><path d="M12 16H38L22 32H38" stroke="#E23744" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Zomato
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pb-12">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>Take Away Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span>WhatsApp Orders Welcome</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Strip */}
      <div className="relative z-10 w-full bg-card/90 backdrop-blur-md border-y border-primary/20 py-10 px-4 mt-auto">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="hover:-translate-y-1 transition-transform">
              <div className="text-3xl mb-2">🏠</div>
              <div className="font-bold text-foreground">Home Style</div>
              <div className="text-sm text-muted-foreground">Fresh, wholesome</div>
            </div>
            <div className="hover:-translate-y-1 transition-transform">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-bold text-foreground">Quick Delivery</div>
              <div className="text-sm text-muted-foreground">Via Swiggy & Zomato</div>
            </div>
            <div className="hover:-translate-y-1 transition-transform">
              <div className="text-3xl mb-2">💚</div>
              <div className="font-bold text-foreground">Hygienic & Pure</div>
              <div className="text-sm text-muted-foreground">Quality guaranteed</div>
            </div>
            <div className="hover:-translate-y-1 transition-transform">
              <div className="text-3xl mb-2">💰</div>
              <div className="font-bold text-foreground">Budget Friendly</div>
              <div className="text-sm text-muted-foreground">Meals from ₹15</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
