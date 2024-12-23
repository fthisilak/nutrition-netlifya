// src/app/saglikli-yasam/[slug]/page.js
import { getContentBySlug } from '@/lib/content';
import { markdownToHtml } from '@/lib/markdown';
import { notFound } from 'next/navigation';

export default async function HealthTipDetail({ params }) {
 const tip = await getContentBySlug('health-tips', params.slug);
 
 if (!tip) {
   notFound();
 }

 const content = await markdownToHtml(tip.content || '');

 return (
   <div className="container mx-auto px-4 py-12">
     <article className="max-w-4xl mx-auto">
       <header className="mb-8">
         <h1 className="text-4xl font-bold mb-4">{tip.title}</h1>
         
         {tip.image && (
           <div className="relative w-full aspect-[16/9] mb-6">
             <img
               src={tip.image}
               alt={tip.title}
               className="absolute inset-0 w-full h-full object-cover rounded-lg"
             />
           </div>
         )}
         
         {tip.category && (
           <div className="mb-4">
             <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
               {tip.category}
             </span>
           </div>
         )}
         
         <p className="text-xl text-gray-600">{tip.description}</p>
       </header>

       <div
         className="prose prose-lg max-w-none"
         dangerouslySetInnerHTML={{ __html: content }}
       />
     </article>
   </div>
 );
}