import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Emma & Joel's Wedding",
  description: "Join us to celebrate the wedding of Emma and Joel",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
          }
          
          body {
            background-image: url('/floral-background.jpg');
            background-size: cover;
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
          }
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
