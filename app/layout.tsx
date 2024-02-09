import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Países',
  description: 'Next 13 - Lista de países',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={nunitoSans.className}>
      <Header />
        <main className="bg-gray-100 min-h-screen">
          {children}
        </main> 
        
      </body>
    </html>
  )
}
