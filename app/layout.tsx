import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './ui/globals.css'
import Nav from './ui/Nav'
import Footer from './ui/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'bssofttech',
  description: 'bs general page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
