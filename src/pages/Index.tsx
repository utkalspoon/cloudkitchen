import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <MenuSection />
        <Contact />
      </main>
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="mb-2">© 2024 Utkal Spoon Cloud Kitchen. All rights reserved.</p>
          <p className="text-sm">Taste and Quality meets Wellness</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
