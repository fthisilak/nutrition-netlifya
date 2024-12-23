import Image from 'next/image';
import Link from 'next/link';
import styles from './hero.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroContainer}>
      {/* Arka plan resmi */}
      <div className={styles.backgroundImage}>
        <Image
          src="/images/hero/background.jpg"
          alt="Hero Background"
          fill
          priority
          quality={100}
          className="object-cover"
        />
        <div className={styles.overlay}></div>
        <div className={styles.imageGradient}></div>
        <div className={styles.patternOverlay}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className={styles.profileWrapper}>
            <div className={styles.profileImageContainer}>
              <Image
                src="/images/hero/profile.jpg"
                alt="Diyetisyen İsmi"
                fill
                sizes="(max-width: 768px) 200px, 300px"
                priority
                quality={100}
                className={styles.profileImage}
              />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4 text-white">
            Uzm. Dyt. İsim Soyisim
          </h1>
          
          <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-8">
            Sağlıklı beslenme alışkanlıkları kazanmanız ve hedeflerinize ulaşmanız için
            bilimsel temelli, kişiye özel beslenme programları hazırlıyorum.
          </p>
          
          <Link 
            href="/iletisim" 
            className={styles.contactButton}
          >
            Randevu Al
          </Link>
        </div>
      </div>
    </section>
  );
}