import styles from './about.module.css';

export default function AboutSection() {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.backgroundPattern}></div>
      <div className="container mx-auto px-4">
        <h2 className={styles.sectionTitle}>Hakkımda</h2>
        
        <div className={styles.contentGrid}>
          {/* Sol Taraf - Bilgi Alanı */}
          <div className={styles.infoSection}>
            <h3 className={styles.name}>Uzm. Dyt. [Zeynep Kaya]</h3>
            
            <p className={styles.description}>
              10 yılı aşkın deneyimimle, sağlıklı beslenme konusunda size rehberlik etmek için buradayım. 
              Özel yaklaşımım ve bilimsel temelli beslenme programlarımla hedeflerinize ulaşmanıza yardımcı oluyorum.
            </p>
            
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <span className={styles.featureDot}></span>
                Kişiye Özel Beslenme Programları
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureDot}></span>
                Online Diyet Danışmanlığı
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureDot}></span>
                Kurumsal Beslenme Danışmanlığı
              </li>
            </ul>
          </div>

          {/* Sağ Taraf - Görsel Alanı */}
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <div className={styles.imageOverlay}></div>
              <div className={styles.decorativeElement}></div>
              <img
                src="/images/about-image.jpg"
                alt="Sağlıklı Yaşam"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}