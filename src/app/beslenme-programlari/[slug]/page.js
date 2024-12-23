// src/app/beslenme-programlari/[slug]/page.js
import { getContentBySlug } from '@/lib/content';
import { notFound } from 'next/navigation';

export default async function ProgramDetail({ params }) {
 const program = await getContentBySlug('beslenme-programlari', params.slug);
 
 if (!program) {
   notFound();
 }

 return (
   <div className="container mx-auto px-4 py-12">
     <article className="max-w-4xl mx-auto">
       <header className="mb-8">
         <h1 className="text-4xl font-bold mb-4">{program.title}</h1>
         
         {program.image && (
           <div className="relative w-full aspect-[16/9] mb-6">
             <img
               src={program.image}
               alt={program.title}
               className="absolute inset-0 w-full h-full object-cover rounded-lg"
             />
           </div>
         )}
         
         <p className="text-xl text-gray-600">{program.description}</p>
       </header>

       {program.features && (
         <section className="mb-8">
           <h2 className="text-2xl font-semibold mb-4">Program Özellikleri</h2>
           <ul className="space-y-3">
             {program.features.map((feature, index) => (
               <li key={index} className="flex items-center text-gray-700">
                 <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                 </svg>
                 {feature}
               </li>
             ))}
           </ul>
         </section>
       )}

       <div className="prose max-w-none">
         {program.content}
       </div>
     </article>
   </div>
 );
}