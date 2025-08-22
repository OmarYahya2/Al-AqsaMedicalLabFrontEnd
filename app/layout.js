import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata = {
  title: "مختبر الأقصى الطبي | Al-Aqsa Medical Laboratory",
  description: "مختبر طبي متخصص يقدم فحوصات طبية دقيقة وسريعة تحت إشراف الدكتور منذر يحيى",
  keywords: "مختبر طبي, فحوصات طبية, تحاليل دم, الكوليسترول, السكر, وظائف الكبد, وظائف الكلى",
  generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body className="min-h-screen bg-background font-sans text-foreground">{children}</body>
    </html>
  )
}
