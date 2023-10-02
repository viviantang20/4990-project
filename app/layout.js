import "./globals.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'I ❤ AI',
    description: 'Research Project by Nouman and Vivian',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="dracula">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
