import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RecipeModal from "@/components/RecipeModal";

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

const vegItems: MenuItem[] = [
  {name:"Alu Paratha [2 Pc]",price:"₹100",description:"Authentic tawa parathas stuffed with spiced potato filling.",ingredients:["Wheat Flour", "Potatoes", "Onion", "Green Chili", "Spices", "Butter", "Ghee"],image:"/assets/breakfast/alu-paratha.jpg"},
  {name:"Paneer Paratha [1 Pc]",price:"₹100",description:"Spiced cottage cheese stuffed flatbread.",ingredients:["Wheat Flour", "Paneer", "Onion", "Green Chili", "Spices", "Butter"],image:"/assets/breakfast/paneer-paratha.jpg"},
  {name:"Puri [5 Pc] & Alu Sabji [1 Plate]",price:"₹129",description:"Golden puffed puris with hot, spiced potato curry.",ingredients:["Wheat Flour", "Potatoes", "Tomatoes", "Ginger", "Curry Leaves", "Spices", "Oil"],image:"/assets/breakfast/puri-sabji.jpg"},
  {name:"Puri [5 Pc] & Chhole [1 Plate]",price:"₹159",description:"Deep-fried puris served with spiced chickpea curry.",ingredients:["Kabuli Chana", "Onions", "Tomatoes", "Chole Masala", "Wheat Flour", "Oil"],image:"/assets/puri_chhole_1787721850703.jpg"},
  {name:"Idli [4 Pc], Chutney, Sambar [1 Plate]",price:"₹139",description:"Soft steamed rice cakes with coconut chutney and sambar.",ingredients:["Idli Batter", "Coconut", "Green Chilies", "Toor Dal", "Vegetables", "Spices"],image:"/assets/breakfast/idli.jpg"},
  {name:"Masala Dosa, Chutney [1 Plate]",price:"₹110",description:"Crispy dosa stuffed with spiced potato filling served with coconut chutney.",ingredients:["Rice", "Urad Dal", "Potatoes", "Onions", "Mustard Seeds", "Coconut"],image:"/assets/masala_dosa_real.jpg"},
  {name:"Uppama [1 Plate]",price:"₹109",description:"Roasted semolina cooked with ghee, mustard seeds, and mixed veggies.",ingredients:["Semolina", "Mustard Seeds", "Curry Leaves", "Onions", "Mixed Vegetables", "Ghee"],image:"/assets/breakfast/uppama.jpg"},
  {name:"Vegetable Maggie [1 Plate]",price:"₹100",description:"Classic Maggi noodles tossed with fresh vegetables and spices.",ingredients:["Maggi Noodles", "Mixed Vegetables", "Onions", "Tomatoes", "Maggi Masala", "Oil"],image:"/assets/breakfast/veg-maggie.jpg"},
  {name:"Tea [1 Cup]",price:"₹25",description:"Freshly brewed Indian masala tea with milk and ginger.",ingredients:["Tea Leaves", "Water", "Milk", "Sugar", "Fresh Ginger", "Cardamom"],image:"/assets/masala_chai_1787721943337.jpg"},
  {name:"Poha [1 Plate]",price:"₹99",description:"Flattened rice sautéed with onions, turmeric, peanuts, and curry leaves.",ingredients:["Flattened Rice", "Onions", "Peanuts", "Green Chilies", "Turmeric", "Curry Leaves"],image:"/assets/poha_plate_1787722857312.jpg"},
  {name:"Paneer Masala [1 Plate]",price:"₹239",description:"Rich cottage cheese cubes in a spiced tomato-onion gravy.",ingredients:["Paneer", "Onions", "Tomatoes", "Ginger-Garlic Paste", "Garam Masala", "Cream", "Butter"],image:"/assets/menu/paneer-masala.jpg"},
  {name:"Chili Paneer [1 Plate]",price:"₹239",description:"Crispy paneer tossed in spicy Indo-Chinese sauce with peppers.",ingredients:["Paneer", "Capsicum", "Onions", "Soy Sauce", "Green Chilies", "Garlic", "Cornflour"],image:"/assets/chili_paneer_plate_1787722878931.jpg"},
  {name:"Paneer Bhurji [1 Plate]",price:"₹149",description:"Scrambled cottage cheese with onions, tomatoes, and spices.",ingredients:["Paneer", "Onions", "Tomatoes", "Capsicum", "Green Chilies", "Turmeric", "Coriander"],image:"/assets/paneer_bhurji_plate_1787722901917.jpg"},
  {name:"Pulao [1 Plate]",price:"₹189",description:"Fragrant basmati rice cooked with mixed vegetables and ghee.",ingredients:["Basmati Rice", "Mixed Vegetables", "Whole Spices", "Ghee", "Cashews"],image:"/assets/menu/pulao.jpg"},
  {name:"Roti [4 Pc] & Seasonal Veg Sabji [1 Plate]",price:"₹139",description:"4 soft rotis served with fresh seasonal vegetable curry.",ingredients:["Wheat Flour", "Mixed Vegetables", "Onion-Tomato Masala", "Spices"],image:"/assets/menu/regular-thali.jpg"},
  {name:"Dal Fry [1 Bowl]",price:"₹119",description:"Tempered yellow lentils cooked with cumin, garlic, and ghee.",ingredients:["Toor Dal", "Onions", "Tomatoes", "Garlic", "Cumin Seeds", "Ghee", "Red Chili"],image:"/assets/dal_fry_bowl_real.jpg"},
  {name:"Chaval [1 Bowl]",price:"₹99",description:"Steamed fluffy premium basmati rice.",ingredients:["Premium Basmati Rice", "Water", "Salt"],image:"https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&auto=format&fit=crop"},
  {name:"Chhole [1 Bowl]",price:"₹119",description:"Spiced chickpea curry in a rich onion-tomato gravy.",ingredients:["Kabuli Chana", "Onions", "Tomatoes", "Ginger-Garlic", "Chole Masala", "Ghee"],image:"/assets/chhole_bowl_real.jpg"},
  {name:"Rajma Chaval [1 Plate]",price:"₹179",description:"Kidney bean curry served with steamed basmati rice.",ingredients:["Kidney Beans", "Onions", "Tomatoes", "Ginger-Garlic", "Rajma Masala", "Basmati Rice", "Ghee"],image:"/assets/menu/rajma-chawal.jpg"},
  {name:"Roti [1 Pc]",price:"₹15",description:"Single hot and soft whole wheat roti.",ingredients:["Whole Wheat Flour", "Water", "Ghee (optional)"],image:"/assets/single_roti_1787721905664.jpg"},
  {name:"Vegetable Sabji [1 Plate]",price:"₹99",description:"Stir-fried seasonal mixed vegetables.",ingredients:["Mixed Vegetables", "Mustard Seeds", "Onions", "Green Chilies", "Turmeric", "Spices"],image:"/assets/veg_sabji_mix.jpg"},
  {name:"Dahi Bengan [1 Bowl]",price:"₹99",description:"Fried eggplants cooked in a rich, spiced yogurt gravy.",ingredients:["Eggplants", "Yogurt", "Mustard Seeds", "Panch Phoron Spices", "Curry Leaves"],image:"/assets/dahi_baingan_1787721833214.jpg"},
  {name:"Dahi Bhendi [1 Bowl]",price:"₹100",description:"Sautéed ladyfingers cooked in yogurt gravy.",ingredients:["Okra", "Yogurt", "Onions", "Ginger-Garlic", "Spices", "Oil"],image:"/assets/dahi_bhendi_1787721869512.jpg"},
  {name:"Sev Tomator [1 Plate]",price:"₹99",description:"Tangy tomato gravy topped with crispy sev.",ingredients:["Tomatoes", "Crispy Sev", "Ginger-Garlic Paste", "Chili Powder", "Garam Masala"],image:"/assets/sev_tamatar_1787721922487.jpg"},
  {name:"Dal & Chaval [1 Plate]",price:"₹179",description:"Classic homestyle dal fry combined with steamed rice.",ingredients:["Yellow Lentils", "Basmati Rice", "Onions", "Tomatoes", "Garlic", "Ghee"],image:"/assets/dal_chaval_plate_1787722922978.jpg"},
];

const nonVegItems: MenuItem[] = [
  {name:"Chicken Curry (5 Pc) Gravy [1 Bowl]",price:"₹201",description:"Tender chicken pieces simmered in a rich, aromatic curry gravy.",ingredients:["Chicken", "Onions", "Tomatoes", "Ginger-Garlic Paste", "Spices", "Coriander"],image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop"},
  {name:"Chicken Kasa (5 Pc) [1 Plate]",price:"₹220",description:"Slow-cooked dry chicken with thick, masala-coated pieces.",ingredients:["Chicken", "Onions", "Tomatoes", "Ginger-Garlic", "Dry Spices", "Mustard Oil"],image:"/assets/chicken_kasa_1787721886258.jpg"},
  {name:"Fish Curry Ruhu (2 Pc) Gravy [1 Bowl]",price:"₹179",description:"Authentic Rohu fish cooked in spicy mustard or tomato gravy.",ingredients:["Rohu Fish", "Mustard Oil", "Ginger-Garlic Paste", "Onions", "Spices", "Coriander"],image:"/assets/rohu_fish_curry_1787722943816.jpg"},
  {name:"Chicken Pakoda (8 Pc) [1 Plate]",price:"₹330",description:"Crispy golden-fried chicken fritters seasoned with spices.",ingredients:["Chicken", "Besan", "Ginger-Garlic Paste", "Chili Powder", "Cumin", "Coriander", "Oil"],image:"https://images.unsplash.com/photo-1562967914-608f82629710?w=600&auto=format&fit=crop"},
  {name:"Egg Curry (2 Eggs) Gravy [1 Bowl]",price:"₹126",description:"Hard-boiled eggs simmered in a rich onion-tomato gravy.",ingredients:["Eggs", "Onions", "Tomatoes", "Ginger-Garlic", "Spices", "Coriander"],image:"/assets/egg_curry_bowl_1787722967802.jpg"},
  {name:"Egg Bhurji (2 Eggs) [1 Plate]",price:"₹90",description:"Indian-style scrambled eggs with onions, chilies, and spices.",ingredients:["Eggs", "Onions", "Tomatoes", "Green Chilies", "Butter/Oil", "Spices"],image:"/assets/egg_bhurji_real.jpg"},
  {name:"Egg Omelette (2 Eggs) [1 Plate]",price:"₹91",description:"Fluffy 2-egg omelette with onions, tomatoes, and green chilies.",ingredients:["Eggs", "Onions", "Green Chilies", "Coriander", "Salt", "Pepper", "Butter"],image:"/assets/egg_omelette_real.jpg"},
  {name:"Boiled Egg (2 Eggs) [1 Plate]",price:"₹50",description:"Simple hard-boiled eggs with salt and pepper.",ingredients:["Eggs", "Water", "Salt", "Black Pepper"],image:"/assets/boiled_egg_real.jpg"},
];

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
      title: "Veg Items",
      description: "Authentic & Homestyle Pure Veg",
      badge: "Most Popular",
      showImages: true,
      items: vegItems,
    },
    {
      title: "Non-Veg Items",
      description: "Rich & Flavorful",
      showImages: true,
      items: nonVegItems,
    }
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
                  <div className={`grid gap-6 ${category.items.length === 1
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
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            openModal(item);
                          }
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label={`View recipe for ${item.name}`}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={item.image}
                            alt={`${item.name} - ${item.description || 'Delicious homestyle food'}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
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
                            <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
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
