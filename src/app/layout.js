// src/app/layout.js
import './globals.css'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import Script from 'next/script'

export const metadata = {
  title: 'Diyetisyen Web Sitesi',
  description: 'Profesyonel diyetisyen hizmetleri ve sağlıklı yaşam önerileri',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <Script 
          src="https://identity.netlify.com/v1/netlify-identity-widget.js" 
          strategy="beforeInteractive" 
        />
      </head>
      <body suppressHydrationWarning className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow pt-16">
          <main>{children}</main>
        </div>
        <Footer />
        
        {/* Identity widget için gerekli script */}
        <Script id="netlify-identity-widget-setup">{`
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
              if (!user) {
                window.netlifyIdentity.on("login", () => {
                  document.location.href = "/admin/";
                });
              }
            });
          }
        `}</Script>
      </body>
    </html>
  )
}