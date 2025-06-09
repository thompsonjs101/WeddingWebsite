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
          
          /* Mobile: No background image */
          @media (max-width: 767px) {
            body {
              background: white;
              min-height: 100vh;
            }
          }
          
          /* Desktop: Show full background */
          @media (min-width: 768px) {
            body {
              background-image: url('/floral-background.jpg');
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              background-attachment: fixed;
            }
          }
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
