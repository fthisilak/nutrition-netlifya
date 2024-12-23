// src/app/saglikli-yasam/page.js
import { getAllContent } from '@/lib/content';
import HealthTipCard from '@/components/cards/HealthTipCard';

export default async function SaglikliYasam() {
  const healthTips = await getAllContent('health-tips');
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Sağlıklı Yaşam Rehberi</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {healthTips.map((tip) => (
          <HealthTipCard 
            key={tip.slug}
            slug={tip.slug}
            title={tip.title}
            description={tip.description}
            image={tip.image}
            category={tip.category}
            readingTime={tip.readingTime}
          />
        ))}
      </div>
    </div>
  );
}
