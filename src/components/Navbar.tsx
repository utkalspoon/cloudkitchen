import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">US</span>
            <span className="text-lg font-semibold text-foreground hidden sm:inline">
              Utkal Spoon
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground hidden sm:flex"
              onClick={() => window.location.href = 'tel:7008749781'}
            >
              <Phone className="mr-2 h-4 w-4" />
              Order Now
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card">
                <div className="flex flex-col gap-6 mt-8">
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-left text-lg text-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection('menu')}
                    className="text-left text-lg text-foreground hover:text-primary transition-colors"
                  >
                    Menu
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-left text-lg text-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                    onClick={() => window.location.href = 'tel:7008749781'}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Order Now
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
