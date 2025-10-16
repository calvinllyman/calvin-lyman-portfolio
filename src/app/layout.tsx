import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import ScrollToTop from '@/components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calvin Lyman | Manager of Product Design',
  description: 'Director-level design leader with proven success scaling high-performing teams, embedding design into product strategy, and delivering enterprise-level solutions. 8+ years at Paycom, from Product Designer to Manager.',
  keywords: 'Product Design Manager, Design Leadership, UX Strategy, Team Development, Design Systems, Paycom, HCM Platform',
  authors: [{ name: 'Calvin Lyman' }],
  creator: 'Calvin Lyman',
  openGraph: {
    title: 'Calvin Lyman | Manager of Product Design Portfolio',
    description: 'Director-level design leader with proven success scaling high-performing teams and delivering enterprise-level solutions.',
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