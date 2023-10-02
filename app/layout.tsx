import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Providers} from "@/app/providers";
import Header from "@/ui-components/Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Svetlana Mychnova',
  description: 'Svetlana Mychnova',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
