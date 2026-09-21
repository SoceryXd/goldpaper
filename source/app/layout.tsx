import type { Metadata } from 'next'
import { Manrope, Playfair_Display } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets:['latin'], variable:'--font-sans' })
const playfair = Playfair_Display({ subsets:['latin'], variable:'--font-display' })

export const metadata: Metadata = {
  title: 'Gold Paper Distribuidora | Soluções Profissionais',
  description: 'Distribuição profissional de químicos, descartáveis, equipamentos e máquinas para higiene e limpeza.',
  icons: { icon: '/assets/images/favicon-goldpaper.png' }
}

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR" className={`${manrope.variable} ${playfair.variable}`}><body>{children}</body></html>
}
