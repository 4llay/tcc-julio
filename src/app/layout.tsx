import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import AuthProvider from '@/components/ui/auth-provider'

const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cones Trufados',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  className={playfair.className}>
      <head>
        <script src="https://kit.fontawesome.com/cd773e3565.js"></script>
        <link rel="icon" type="image/x-icon" href="/logo pro.png"></link>
      </head>
      <body className='bg-gradient-to-b from-cianinho to-rosinha dark:from-DarkBgColor dark:to-DarkBgColor'>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Toaster />
          <AuthProvider>
          {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}