import './globals.css'
import { Inter, Playfair_Display, Akronim } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
// On ajoute Akronim. Elle n'a qu'une seule graisse (400).
const akronim = Akronim({ weight: '400', subsets: ['latin'], variable: '--font-akronim' })

export const metadata = {
  title: 'Lovia Kounouho | Développeuse & Designer Web',
  description: 'Portfolio de Lovia Kounouho, développeuse full-stack et designer UI/UX.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} ${akronim.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}