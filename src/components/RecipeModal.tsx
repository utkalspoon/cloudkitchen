import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  image?: string;
  ingredients?: string[];
  preparation?: string[];
}

interface RecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem | null;
}

const RecipeModal = ({ isOpen, onClose, item }: RecipeModalProps) => {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary mb-2">{item.name}</DialogTitle>
          {item.description && (
            <DialogDescription className="text-muted-foreground text-lg">
              {item.description}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-8 mt-4">
          <div>
            <img src={item.image} alt={item.name} className="rounded-lg w-full h-auto object-cover" />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {item.ingredients?.map((ingredient, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">{ingredient}</Badge>
                )) ?? <p className="text-muted-foreground">Ingredients not available.</p>}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Preparation</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                {item.preparation?.map((step, index) => (
                  <li key={index}>{step}</li>
                )) ?? <p className="text-muted-foreground">Preparation steps not available.</p>}
              </ol>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RecipeModal;
