import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
      </div>
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-primary">Utkal Spoon</span>
              <br />
              <span className="text-foreground">Cloud Kitchen</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-medium">
              Taste and Quality meets Wellness
            </p>
            <p className="text-lg md:text-xl text-muted-foreground italic">
              Ghar ka Quality Khana ka majja le lo...
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all"
            >
              <Phone className="mr-2 h-5 w-5" />
              Order Now
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-primary/50 hover:bg-primary/10 text-foreground font-semibold px-8 py-6 text-lg"
            >
              View Menu
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span>Take Away Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span>Coming Soon on Zomato & Swiggy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
