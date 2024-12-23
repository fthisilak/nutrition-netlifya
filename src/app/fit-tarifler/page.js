// src/app/fit-tarifler/page.js
import { getAllContent } from '@/lib/content';
import RecipeCard from '@/components/cards/RecipeCard';

export default async function FitTarifler() {
  const recipes = await getAllContent('fit-tarifler');
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Fit Tarifler</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard 
            key={recipe.slug}
            {...recipe}
          />
        ))}
      </div>
    </div>
  );
}