import type { Metadata } from 'next'
import ThemesProvider from '@/Theme/themeProvider'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'PokemonApp',
  description: 'Pokemons information ',
  authors: [{ name: "Ismael Rosas", url: "" }],
  keywords: 'pokemons, pikachu, pokedex',
  openGraph: {
    title: "PokemonApp",
    description: "info about pokemons",
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png',
        width: 800,
        height: 600,
      }
    ],
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body>
        <ThemesProvider >
          {children}
        </ThemesProvider>
      </body>
    </html>
  )
}
