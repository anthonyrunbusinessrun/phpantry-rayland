import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'PH Pantry Philippines — A Movement of Hope',
  description: 'PHPantry Philippines builds community-driven pantries rooted in compassion, faith, and shared responsibility. Take what you need, give what you can.',
  keywords: 'PH Pantry, Philippines, community pantry, food access, Raymond Land III, volunteer, hunger relief',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: 'PH Pantry Philippines — A Movement of Hope',
    description: 'A simple idea. A shared responsibility. A growing movement of hope.',
    type: 'website',
    images: [{ url: '/video-poster.jpg', width: 1280, height: 720 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
