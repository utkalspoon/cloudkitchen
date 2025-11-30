import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to enjoy delicious homestyle food?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card border-border hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all duration-300 animate-fade-in">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">Order by phone</p>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => window.location.href = 'tel:7008749781'}
                >
                  7008749781
                </Button>
                <p className="text-sm text-muted-foreground mt-2">Liza</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="pt-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Vrajdham Appartment-2, B-Block<br />
                  9th Floor, Room No. 902<br />
                  Near Ujala Circle, Sarkhej<br />
                  Ahmedabad, Gujarat
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="pt-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Service</h3>
                <p className="text-muted-foreground mb-4">
                  Take Away Available
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    Coming Soon on Zomato
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    Coming Soon on Swiggy
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-primary/20 max-w-2xl mx-auto">
            <CardContent className="py-8">
              <p className="text-lg text-foreground mb-4 font-medium">
                Customer satisfaction is our main priority
              </p>
              <p className="text-muted-foreground">
                Quality with tasty food at reasonable prices
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
