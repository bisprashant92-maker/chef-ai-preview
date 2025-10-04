import { Clock, ChefHat, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Recipe {
  id: number;
  title: string;
  image: string;
  time: string;
  difficulty: string;
  cuisine: string;
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full w-8 h-8 bg-background/80 backdrop-blur-sm hover:bg-background"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>
        <div className="absolute bottom-2 left-2">
          <Badge className="bg-background/80 backdrop-blur-sm text-foreground">
            {recipe.cuisine}
          </Badge>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{recipe.title}</h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="w-4 h-4" />
            <span>{recipe.difficulty}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RecipeCard;
