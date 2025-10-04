import { useState } from 'react';
import { ShoppingCart, Plus, Trash2, Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';

interface ShoppingItem {
  id: number;
  name: string;
  category: string;
  checked: boolean;
}

const ShoppingList = () => {
  const [items, setItems] = useState<ShoppingItem[]>([
    { id: 1, name: 'Fresh Basil', category: 'Produce', checked: false },
    { id: 2, name: 'Pasta', category: 'Pantry', checked: false },
    { id: 3, name: 'Parmesan Cheese', category: 'Dairy', checked: true },
    { id: 4, name: 'Chicken Breast', category: 'Meat', checked: false },
    { id: 5, name: 'Tomatoes', category: 'Produce', checked: false },
    { id: 6, name: 'Olive Oil', category: 'Pantry', checked: true }
  ]);

  const [newItem, setNewItem] = useState('');

  const categories = ['Produce', 'Meat', 'Dairy', 'Pantry'];

  const toggleItem = (id: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const addItem = () => {
    if (newItem.trim()) {
      setItems([
        ...items,
        { id: Date.now(), name: newItem, category: 'Pantry', checked: false }
      ]);
      setNewItem('');
    }
  };

  const groupedItems = categories.map(category => ({
    category,
    items: items.filter(item => item.category === category)
  })).filter(group => group.items.length > 0);

  const completedCount = items.filter(item => item.checked).length;

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="flex items-center gap-2 mb-4">
          <ShoppingCart className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">Shopping List</h2>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            {completedCount} of {items.length} items collected
          </p>
          <Badge className="bg-primary/20 text-primary">
            {items.length - completedCount} remaining
          </Badge>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex gap-2">
          <Input
            placeholder="Add new item..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addItem()}
            className="flex-1"
          />
          <Button onClick={addItem}>
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
      </Card>

      <div className="space-y-4">
        {groupedItems.map(({ category, items: categoryItems }) => (
          <Card key={category} className="p-4">
            <h3 className="font-semibold mb-3 flex items-center justify-between">
              <span>{category}</span>
              <Badge variant="outline" className="text-xs">
                {categoryItems.filter(i => !i.checked).length} items
              </Badge>
            </h3>
            <div className="space-y-2">
              {categoryItems.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    item.checked ? 'bg-accent/50' : 'bg-secondary/50 hover:bg-secondary'
                  }`}
                >
                  <Checkbox
                    checked={item.checked}
                    onCheckedChange={() => toggleItem(item.id)}
                  />
                  <span className={`flex-1 ${item.checked ? 'line-through text-muted-foreground' : ''}`}>
                    {item.name}
                  </span>
                  {item.checked && <Check className="w-4 h-4 text-primary" />}
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => deleteItem(item.id)}
                    className="h-8 w-8"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
