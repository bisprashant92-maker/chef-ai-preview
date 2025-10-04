import { useState } from 'react';
import { Calendar as CalendarIcon, Plus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const MealPlan = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const meals = ['Breakfast', 'Lunch', 'Dinner'];

  const [plannedMeals, setPlannedMeals] = useState<Record<string, Record<string, string>>>({
    Monday: {
      Breakfast: 'Oatmeal with Berries',
      Lunch: 'Chicken Salad',
      Dinner: 'Pasta Carbonara'
    },
    Tuesday: {
      Lunch: 'Veggie Wrap'
    },
    Wednesday: {
      Dinner: 'Chicken Tikka Masala'
    }
  });

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Weekly Meal Plan</h2>
          </div>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Auto Plan
          </Button>
        </div>
        <p className="text-muted-foreground">
          Plan your meals for the week and generate shopping lists automatically
        </p>
      </Card>

      <div className="space-y-4">
        {days.map((day) => (
          <Card key={day} className="p-4">
            <h3 className="font-semibold text-lg mb-3 flex items-center justify-between">
              <span>{day}</span>
              <Badge variant="outline" className="text-xs">
                {Object.keys(plannedMeals[day] || {}).length} meals
              </Badge>
            </h3>
            <div className="grid gap-3 md:grid-cols-3">
              {meals.map((meal) => (
                <div
                  key={meal}
                  className="p-3 rounded-lg border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer group"
                >
                  <p className="text-xs font-medium text-muted-foreground mb-1">{meal}</p>
                  {plannedMeals[day]?.[meal] ? (
                    <p className="text-sm font-medium">{plannedMeals[day][meal]}</p>
                  ) : (
                    <div className="flex items-center gap-1 text-muted-foreground group-hover:text-primary">
                      <Plus className="w-3 h-3" />
                      <span className="text-xs">Add meal</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MealPlan;
