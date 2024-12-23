// src/app/admin/page.js
'use client'

import { useEffect } from 'react'

export default function AdminPage() {
  useEffect(() => {
    // Admin sayfası yüklendiğinde CMS'i başlat
    if (window.location.pathname === '/admin') {
      // identity widget'ı yükle
      const script = document.createElement('script')
      script.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js'
      script.onload = () => {
        // identity widget yüklendikten sonra CMS'i başlat
        if (window.netlifyIdentity) {
          window.netlifyIdentity.on('init', user => {
            if (!user) {
              window.netlifyIdentity.on('login', () => {
                document.location.href = '/admin/'
              })
            }
          })
        }
      }
      document.head.appendChild(script)
    }
  }, [])

  return null
}
