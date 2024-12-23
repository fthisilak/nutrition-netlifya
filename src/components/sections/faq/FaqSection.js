'use client'
import { useState } from 'react'
import styles from './faq.module.css'

const faqs = [
  {
    question: "Online diyet programı alabilir miyim?",
    answer: "Evet, online diyet programı hizmetimiz mevcuttur. İlk görüşmemizi online platformlar üzerinden yaparak, size özel beslenme programınızı hazırlayabilir ve düzenli takibinizi gerçekleştirebiliriz."
  },
  {
    question: "Beslenme programı ne kadar sürer?",
    answer: "Beslenme programlarımız genellikle 3 aylık periyotlar halinde planlanır. Ancak bu süre kişinin hedeflerine ve mevcut sağlık durumuna göre değişiklik gösterebilir. Her danışanımız için özel program oluşturulmaktadır."
  },
  {
    question: "Programda supplement kullanımı zorunlu mu?",
    answer: "Hayır, supplement kullanımı zorunlu değildir. Beslenme programlarımız öncelikle doğal besinlerle planlanır. Supplement önerileri sadece gerekli görülen durumlarda ve danışanın tercihine bağlı olarak yapılır."
  },
  {
    question: "Ne sıklıkta kontrol randevusu olacak?",
    answer: "Kontrol randevuları ilk ay haftalık, sonraki aylarda ise 15 günde bir olacak şekilde planlanır. Ancak bu süreç kişinin ihtiyaçlarına göre özelleştirilebilir."
  },
  {
    question: "Özel diyet kısıtlamalarım varsa program uygulanabilir mi?",
    answer: "Evet, vejetaryen, vegan, glütensiz gibi özel beslenme tercihleriniz veya besin alerjileriniz varsa, bunları dikkate alarak size özel bir beslenme programı hazırlayabiliriz."
  },
  {
    question: "Program süresince spor yapmak zorunlu mu?",
    answer: "Hayır, spor yapmak zorunlu değildir. Ancak sağlıklı bir yaşam için hareket etmek önemlidir. Size uygun fiziksel aktivite önerilerinde bulunur, fakat bu tercihi size bırakırız."
  }
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className={styles.faqContainer}>
      <div className={styles.backgroundPattern}></div>
      <div className="container mx-auto px-4">
        <h2 className={styles.sectionTitle}>Sıkça Sorulan Sorular</h2>
        
        <div className={styles.faqWrapper}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.faqButton}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className={styles.question}>{faq.question}</span>
                <svg
                  className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  )
}