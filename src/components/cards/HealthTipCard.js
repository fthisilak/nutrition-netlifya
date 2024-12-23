// src/components/cards/HealthTipCard.js
import Link from 'next/link';

export default function HealthTipCard({ 
  slug, 
  title, 
  description, 
  image, 
  category,
  readingTime 
}) {
  return (
    <Link href={`/saglikli-yasam/${slug}`} className="block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        {image && (
          <div className="aspect-video">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-6">
          {category && (
            <div className="mb-3">
              <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                {category}
              </span>
            </div>
          )}
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          
          <div className="flex items-center text-sm text-gray-500">
            {readingTime && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                </svg>
                {readingTime} dk okuma
              </span>
            )}
          </div>
          
          <div className="mt-4 text-primary-600 font-medium">
            Devamını Oku →
          </div>
        </div>
      </div>
    </Link>
  );
}