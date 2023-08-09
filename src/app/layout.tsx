import './globals.css'
import { Inter, League_Spartan, Roboto_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono'
});

const league_spartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-league-spartan'
})

export const metadata = {
  title: 'Jack Wilkinson - Fullstack and Frontend Software Engineer',
  description: 'A summary of my career so far in website form!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${league_spartan.variable} ${roboto_mono.variable}`}>{children}</body>
    </html>
  )
}
