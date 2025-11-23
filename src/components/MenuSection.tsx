import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RecipeModal from "@/components/RecipeModal";

// Breakfast images
import aluParatha from "@/assets/breakfast/alu-paratha.jpg";
import paneerParatha from "@/assets/breakfast/paneer-paratha.jpg";
import puriSabji from "@/assets/breakfast/puri-sabji.jpg";
import idli from "@/assets/breakfast/idli.jpg";
import masalaDosa from "@/assets/breakfast/masala-dosa.jpg";
import uppama from "@/assets/breakfast/uppama.jpg";
import vegMaggie from "@/assets/breakfast/veg-maggie.jpg";
import tea from "@/assets/breakfast/tea.jpg";

// Menu images
import regularThali from "@/assets/menu/regular-thali.jpg";
import paneerMasala from "@/assets/menu/paneer-masala.jpg";
import pulao from "@/assets/menu/pulao.jpg";
import vegBiryani from "@/assets/menu/veg-biryani.jpg";
import mushroomMasala from "@/assets/menu/mushroom-masala.jpg";
import kadiChaval from "@/assets/menu/kadi-chaval.jpg";
import rajmaChawal from "@/assets/menu/rajma-chawal.jpg";

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  image?: string;
  ingredients?: string[];
  preparation?: string[];
}

interface MenuCategory {
  title: string;
  description?: string;
  items: MenuItem[];
  badge?: string;
  showImages?: boolean;
}

const MenuSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const openModal = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const menuCategories: MenuCategory[] = [
    {
      title: "Breakfast Menu",
      description: "Start your day delicious",
      showImages: true,
      items: [
        {
          name: "Alu Paratha",
          price: "₹50",
          description: "2 Pieces with curd and pickle",
          image: aluParatha,
          ingredients: ["Wheat Flour", "Potatoes", "Onion", "Green Chili", "Spices"],
          preparation: [
            "Boil and mash the potatoes.",
            "Sauté onions, green chilies, and spices.",
            "Mix the sautéed ingredients with mashed potatoes to make the filling.",
            "Roll out the dough, add the filling, and seal it.",
            "Cook on a tawa with ghee until golden brown.",
          ],
        },
        {
          name: "Paneer Paratha",
          price: "₹60",
          description: "1 Piece",
          image: paneerParatha,
          ingredients: ["Wheat Flour", "Paneer", "Onion", "Green Chili", "Spices"],
          preparation: [
            "Crumble the paneer.",
            "Mix paneer with finely chopped onions, green chilies, and spices.",
            "Roll out the dough, add the paneer filling, and seal it.",
            "Cook on a tawa with ghee until golden brown on both sides.",
          ],
        },
        {
          name: "Puri with Sabji",
          price: "₹60",
          description: "5 Pieces",
          image: puriSabji,
          ingredients: ["Wheat Flour", "Potatoes", "Tomatoes", "Ginger", "Spices"],
          preparation: [
            "Knead the dough for puris and let it rest.",
            "Prepare the sabji by cooking potatoes and tomatoes with spices.",
            "Roll out small circles from the dough.",
            "Deep fry the puris until they puff up and turn golden brown.",
            "Serve hot with sabji.",
          ],
        },
        {
          name: "Idli with Chutney & Sambar",
          price: "₹50",
          description: "5 Pieces",
          image: idli,
          ingredients: ["Rice", "Urad Dal", "Fenugreek Seeds", "Toor Dal", "Vegetables", "Spices"],
          preparation: [
            "Soak rice and urad dal, then grind to a smooth batter.",
            "Ferment the batter overnight.",
            "Steam the idlis in an idli maker.",
            "Prepare sambar with toor dal and vegetables.",
            "Prepare chutney with coconut and spices.",
            "Serve hot.",
          ],
        },
        {
          name: "Masala Dosa with Chutney",
          price: "₹60",
          image: masalaDosa,
          ingredients: ["Rice", "Urad Dal", "Potatoes", "Onion", "Spices"],
          preparation: [
            "Prepare dosa batter and ferment it.",
            "Prepare the potato masala filling.",
            "Spread the batter on a hot tawa to make a thin dosa.",
            "Add the filling and fold the dosa.",
            "Serve hot with chutney and sambar.",
          ],
        },
        {
          name: "Uppama",
          price: "₹40",
          image: uppama,
          ingredients: ["Semolina (Rava)", "Onion", "Green Chili", "Mustard Seeds", "Vegetables"],
          preparation: [
            "Roast the semolina until lightly golden.",
            "Sauté mustard seeds, onions, green chilies, and vegetables.",
            "Add water and bring to a boil.",
            "Slowly add the roasted semolina while stirring continuously.",
            "Cook until the upma is thick and cooked through.",
          ],
        },
        {
          name: "Vegetable Maggie",
          price: "₹40",
          image: vegMaggie,
          ingredients: ["Maggie Noodles", "Mixed Vegetables", "Maggie Masala"],
          preparation: [
            "Boil water and add the Maggie noodles and masala.",
            "Add chopped mixed vegetables.",
            "Cook for 2-3 minutes until the noodles are cooked.",
            "Serve hot.",
          ],
        },
        {
          name: "Tea",
          price: "₹10",
          image: tea,
          ingredients: ["Tea Leaves", "Water", "Milk", "Sugar", "Ginger/Cardamom (optional)"],
          preparation: [
            "Boil water with tea leaves and ginger/cardamom.",
            "Add milk and sugar.",
            "Bring to a boil again.",
            "Strain and serve hot.",
          ],
        },
      ],
    },
    {
      title: "Regular Thali",
      description: "Complete homestyle meal",
      badge: "Most Popular",
      showImages: true,
      items: [
        {
          name: "Regular Thali",
          price: "₹80",
          description: "4 Roti, Sabji, Dal, Rice, Salad",
          image: regularThali,
          ingredients: ["Wheat Flour", "Seasonal Vegetables", "Lentils", "Rice", "Salad ingredients"],
          preparation: [
            "Prepare soft rotis from wheat flour.",
            "Cook a seasonal vegetable sabji with spices.",
            "Cook dal with tempering.",
            "Steam fluffy rice.",
            "Prepare a fresh salad.",
            "Assemble the thali and serve.",
          ],
        },
      ],
    },
    {
      title: "Optional Menu",
      description: "Prior intimation preferable",
      showImages: true,
      items: [
        {
          name: "Paneer Masala / Chili Paneer",
          price: "₹130",
          image: paneerMasala,
          ingredients: ["Paneer", "Onion", "Tomatoes", "Capsicum", "Spices", "Sauces"],
          preparation: [
            "Cut paneer into cubes.",
            "For Paneer Masala: Make a gravy with onions, tomatoes, and spices, then add paneer.",
            "For Chili Paneer: Sauté paneer with capsicum, onions, and sauces.",
            "Garnish with fresh coriander and serve hot.",
          ],
        },
        {
          name: "Pulao",
          price: "₹80",
          image: pulao,
          ingredients: ["Basmati Rice", "Mixed Vegetables", "Whole Spices", "Ghee"],
          preparation: [
            "Wash and soak the rice.",
            "Sauté whole spices in ghee.",
            "Add mixed vegetables and sauté.",
            "Add rice, water, and salt.",
            "Cook until the rice is fluffy and aromatic.",
          ],
        },
        {
          name: "Veg Biryani",
          price: "₹120",
          image: vegBiryani,
          ingredients: ["Basmati Rice", "Mixed Vegetables", "Yogurt", "Biryani Masala", "Mint Leaves"],
          preparation: [
            "Parboil the rice.",
            "Marinate vegetables in yogurt and biryani masala.",
            "Layer the rice and marinated vegetables in a pot.",
            "Cook on low heat (dum) until done.",
            "Garnish with fried onions and mint leaves.",
          ],
        },
        {
          name: "Mushroom Masala",
          price: "₹120",
          image: mushroomMasala,
          ingredients: ["Mushrooms", "Onion", "Tomatoes", "Ginger-Garlic Paste", "Spices"],
          preparation: [
            "Clean and slice the mushrooms.",
            "Make a gravy with onions, tomatoes, and spices.",
            "Add the mushrooms and cook until tender.",
            "Garnish with coriander and serve hot.",
          ],
        },
        {
          name: "Kadi Chaval",
          price: "₹80",
          image: kadiChaval,
          ingredients: ["Yogurt", "Besan (Gram Flour)", "Spices", "Rice"],
          preparation: [
            "Prepare a mixture of yogurt and besan.",
            "Cook the mixture with spices until it thickens to form kadi.",
            "Prepare steamed rice.",
            "Serve the kadi over the rice.",
          ],
        },
        {
          name: "Rajma Chaval",
          price: "₹80",
          image: rajmaChawal,
          ingredients: ["Rajma (Kidney Beans)", "Onion", "Tomatoes", "Spices", "Rice"],
          preparation: [
            "Soak and boil the rajma until soft.",
            "Prepare a masala with onions, tomatoes, and spices.",
            "Add the boiled rajma to the masala and simmer.",
            "Serve hot with steamed rice.",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <section id="menu" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our <span className="text-primary">Menu</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quality food with authentic taste at reasonable prices
            </p>
          </div>

          <div className="space-y-16">
            {menuCategories.map((category, idx) => (
              <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <h3 className="text-3xl font-bold text-foreground">{category.title}</h3>
                      {category.badge && (
                        <Badge className="bg-primary text-primary-foreground">
                          {category.badge}
                        </Badge>
                      )}
                    </div>
                    {category.description && (
                      <p className="text-muted-foreground">{category.description}</p>
                    )}
                  </div>
                </div>

                {category.showImages ? (
                  <div className={`grid gap-6 ${
                    category.items.length === 1 
                      ? 'md:grid-cols-1 max-w-md mx-auto' 
                      : category.items.length <= 3
                      ? 'sm:grid-cols-2 lg:grid-cols-3'
                      : 'sm:grid-cols-2 lg:grid-cols-4'
                  }`}>
                    {category.items.map((item, itemIdx) => (
                      <Card 
                        key={itemIdx}
                        className="bg-card border-border hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all duration-300 overflow-hidden group cursor-pointer"
                        onClick={() => openModal(item)}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                          <div className="absolute bottom-3 right-3">
                            <span className="bg-primary text-primary-foreground font-bold px-3 py-1.5 rounded-full text-sm shadow-lg">
                              {item.price}
                            </span>
                          </div>
                        </div>
                        <CardContent className="pt-4 pb-4">
                          <h4 className="font-semibold text-foreground text-lg mb-1">{item.name}</h4>
                          {item.description && (
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="bg-card border-border hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        {category.items.map((item, itemIdx) => (
                          <div 
                            key={itemIdx} 
                            className="flex justify-between items-start gap-2 pb-3 border-b border-border/50 last:border-0 last:pb-0"
                          >
                            <div className="flex-1">
                              <h4 className="font-medium text-foreground">{item.name}</h4>
                              {item.description && (
                                <p className="text-sm text-muted-foreground mt-1">
                                  {item.description}
                                </p>
                              )}
                            </div>
                            <span className="font-semibold text-primary whitespace-nowrap">
                              {item.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-muted/30 border-primary/20 max-w-3xl mx-auto">
              <CardContent className="py-6">
                <p className="text-muted-foreground">
                  <span className="text-primary font-semibold">Special Offer:</span> Discount bumper offer applicable to monthly regular customers 
                  (26 days out of 30/31 days in a month)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <RecipeModal isOpen={isModalOpen} onClose={closeModal} item={selectedItem} />
    </>
  );
};

export default MenuSection;
