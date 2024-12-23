// src/app/beslenme-programlari/page.js
import { getAllContent } from '@/lib/content';
import ProgramCard from '@/components/sections/ProgramCard';

export default async function BeslenmeProgramlari() {
  const programs = await getAllContent('beslenme-programlari');
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Beslenme Programları</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <ProgramCard 
            key={program.slug}
            slug={program.slug}
            title={program.title}
            description={program.description}
            image={program.image}
            features={program.features}
          />
        ))}
      </div>
    </div>
  );
}
