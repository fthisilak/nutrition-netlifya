// src/app/fit-tarifler/[slug]/page.js
import { getContentBySlug } from '@/lib/content';
import { markdownToHtml } from '@/lib/markdown';
import { notFound } from 'next/navigation';

export default async function RecipeDetail({ params }) {
  const recipe = await getContentBySlug('fit-tarifler', params.slug);
  
  if (!recipe) {
    notFound();
  }

  const content = await markdownToHtml(recipe.content || '');

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
          
          {recipe.image && (
            <div className="relative w-full aspect-[16/9] mb-6">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          )}

          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-gray-600">Hazırlama</div>
              <div className="font-semibold">{recipe.prepTime}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-gray-600">Kalori</div>
              <div className="font-semibold">{recipe.calories} kcal</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-gray-600">Porsiyon</div>
              <div className="font-semibold">{recipe.servings} kişilik</div>
            </div>
          </div>

          <p className="text-xl text-gray-600">{recipe.description}</p>
        </header>

        {recipe.ingredients && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Malzemeler</h2>
            <ul className="bg-gray-50 p-6 rounded-lg space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  {ingredient}
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Hazırlanışı</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </article>
    </div>
  );
}