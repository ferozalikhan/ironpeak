import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "IronPeak Construction Group",
  description: "Full service construction across the Bay Area",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}