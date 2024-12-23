import Link from 'next/link';
import styles from './services.module.css';

export default function ServicesSection() {
  return (
    <section className={styles.servicesContainer}>
      <div className={styles.backgroundPattern}></div>
      <div className="container mx-auto px-4">
        <h2 className={styles.sectionTitle}>Hizmetlerim</h2>
        
        <div className={styles.servicesGrid}>
          {/* Kişiye Özel Beslenme Programları */}
          <Link href="/beslenme-programlari" className={styles.serviceCard}>
            <div className={styles.serviceContent}>
              <div className={styles.iconContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Kişiye Özel Beslenme Programları</h3>
              <p className={styles.serviceDescription}>
                Yaşam tarzınıza ve hedeflerinize uygun, sürdürülebilir beslenme planları
              </p>
            </div>
          </Link>

          {/* Sağlıklı Yaşam */}
          <Link href="/saglikli-yasam" className={styles.serviceCard}>
            <div className={styles.serviceContent}>
              <div className={styles.iconContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Sağlıklı Yaşamınız İçin Her Şey</h3>
              <p className={styles.serviceDescription}>
                Beslenme alışkanlıkları, yaşam tarzı önerileri ve sağlıklı tarifler
              </p>
            </div>
          </Link>

          {/* Danışmanlık Hizmetleri */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceContent}>
              <div className={styles.iconContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Online Diyet Danışmanlığı</h3>
              <p className={styles.serviceDescription}>
                Uzaktan takip ve sürekli destek ile hedeflerinize ulaşın
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}