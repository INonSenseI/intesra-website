import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { siteImages } from '@/data/siteImages'

// Ikona webu (favicon) — pokud přítel nahraje src/content/images/favicon.png,
// použije se místo výchozí ikony prohlížeče.
if (siteImages.favicon) {
  const link = document.createElement('link')
  link.rel = 'icon'
  link.href = siteImages.favicon
  document.head.appendChild(link)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
