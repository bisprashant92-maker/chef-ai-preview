import { useState } from 'react';
import { Mic, Search, Calendar, ShoppingCart, User, ChefHat, Utensils, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import VoiceAssistant from '@/components/VoiceAssistant';
import RecipeCard from '@/components/RecipeCard';
import MealPlan from '@/components/MealPlan';
import ShoppingList from '@/components/ShoppingList';

const Index = () => {
  const [showVoiceAssistant, setShowVoiceAssistant] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const featuredRecipes = [
    {
      id: 1,
      title: 'Creamy Pasta Carbonara',
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80',
      time: '30 min',
      difficulty: 'Easy',
      cuisine: 'Italian'
    },
    {
      id: 2,
      title: 'Chicken Tikka Masala',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80',
      time: '45 min',
      difficulty: 'Medium',
      cuisine: 'Indian'
    },
    {
      id: 3,
      title: 'Vegan Buddha Bowl',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
      time: '25 min',
      difficulty: 'Easy',
      cuisine: 'Healthy'
    }
  ];

  const categories = ['Italian', 'Indian', 'Chinese', 'Mexican', 'Thai', 'Vegan', 'Desserts'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-accent">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ChefHat className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Chef AI</h1>
            </div>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setShowVoiceAssistant(true)}
              className="rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all"
            >
              <Mic className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6 bg-card/80 backdrop-blur-sm">
            <TabsTrigger value="home" className="flex flex-col gap-1 py-3">
              <Utensils className="w-4 h-4" />
              <span className="text-xs">Home</span>
            </TabsTrigger>
            <TabsTrigger value="search" className="flex flex-col gap-1 py-3">
              <Search className="w-4 h-4" />
              <span className="text-xs">Search</span>
            </TabsTrigger>
            <TabsTrigger value="meal-plan" className="flex flex-col gap-1 py-3">
              <Calendar className="w-4 h-4" />
              <span className="text-xs">Meal Plan</span>
            </TabsTrigger>
            <TabsTrigger value="shopping" className="flex flex-col gap-1 py-3">
              <ShoppingCart className="w-4 h-4" />
              <span className="text-xs">Shopping</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex flex-col gap-1 py-3">
              <User className="w-4 h-4" />
              <span className="text-xs">Profile</span>
            </TabsTrigger>
          </TabsList>

          {/* Home Tab */}
          <TabsContent value="home" className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-primary to-accent text-primary-foreground">
              <h2 className="text-2xl font-bold mb-2">Welcome to Chef AI! 👨‍🍳</h2>
              <p className="mb-4 opacity-90">Your AI-powered cooking companion</p>
              <Button
                onClick={() => setShowVoiceAssistant(true)}
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Mic className="w-4 h-4 mr-2" />
                Start Voice Assistant
              </Button>
            </Card>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Featured Recipes</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {featuredRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Popular Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2 text-sm"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Search Tab */}
          <TabsContent value="search" className="space-y-6">
            <Card className="p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Search recipes by ingredients or name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button size="icon">
                  <Search className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => setShowVoiceAssistant(true)}
                >
                  <Mic className="w-4 h-4" />
                </Button>
              </div>
            </Card>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Search Results</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {featuredRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Meal Plan Tab */}
          <TabsContent value="meal-plan">
            <MealPlan />
          </TabsContent>

          {/* Shopping Tab */}
          <TabsContent value="shopping">
            <ShoppingList />
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Welcome, Chef!</h3>
                  <p className="text-muted-foreground">Food enthusiast</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Dietary Preferences</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Vegetarian</Badge>
                    <Badge>Gluten-Free</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Favorite Cuisines</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Italian</Badge>
                    <Badge variant="secondary">Thai</Badge>
                    <Badge variant="secondary">Indian</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Saved Recipes</h4>
                  <p className="text-muted-foreground">You have 12 saved recipes</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Voice Assistant Modal */}
      {showVoiceAssistant && (
        <VoiceAssistant onClose={() => setShowVoiceAssistant(false)} />
      )}
    </div>
  );
};

export default Index;
