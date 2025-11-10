import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/lib/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://suhayldastager.com'),
  title: 'Mohammed Suhayl Dastager - Portfolio',
  description: 'Computer Science student and IT professional passionate about AI, innovation, and creating solutions that make a difference.',
  keywords: 'Mohammed Suhayl Dastager, Computer Science, AI, Machine Learning, Software Developer, Dubai',
  authors: [{ name: 'Mohammed Suhayl Dastager' }],
  creator: 'Mohammed Suhayl Dastager',
  openGraph: {
    title: 'Mohammed Suhayl Dastager - Portfolio',
    description: 'Computer Science student and IT professional passionate about AI, innovation, and creating solutions that make a difference.',
    url: 'https://suhayldastager.com',
    siteName: 'Suhayl Dastager Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Suhayl Dastager - Portfolio',
    description: 'Computer Science student and IT professional passionate about AI, innovation, and creating solutions that make a difference.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
