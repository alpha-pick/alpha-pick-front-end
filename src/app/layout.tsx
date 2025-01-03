import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alpha Pick',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
