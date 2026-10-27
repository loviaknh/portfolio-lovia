import './globals.css'
import { Plus_Jakarta_Sans, Akronim } from 'next/font/google'

// On utilise Jakarta et Akronim
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })
const akronim = Akronim({ weight: '400', subsets: ['latin'], variable: '--font-akronim' })

export const metadata = {
  title: 'Lovia Kounouho | Développeuse & Designer Web',
  description: 'Portfolio de Lovia Kounouho, développeuse full-stack et designer UI/UX.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      {/* C'est ici que ça bloquait : on utilise jakarta et akronim */}
      <body className={`${jakarta.variable} ${akronim.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}