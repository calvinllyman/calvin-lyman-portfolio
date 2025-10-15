import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import ScrollToTop from '@/components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calvin Lyman | Director of Product Design',
  description: 'Strategic design leader with proven expertise in cross-functional collaboration, team development, and crisis leadership. Showcasing director-level impact at Paycom and beyond.',
  keywords: 'Product Design Director, Design Leadership, UX Strategy, Team Development, Design Systems, Paycom',
  authors: [{ name: 'Calvin Lyman' }],
  creator: 'Calvin Lyman',
  openGraph: {
    title: 'Calvin Lyman | Director of Product Design Portfolio',
    description: 'Strategic design leader with proven expertise in cross-functional collaboration, team development, and crisis leadership.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <ScrollToTop />
      </body>
    </html>
  )
}