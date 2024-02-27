import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster, toast } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "I ❤ AI",
    description: "Research Project by Jaxon, Nouman, and Vivian",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="forest">
            <Toaster richColors position="bottom-center" />
            <body className={inter.className}>{children}</body>
        </html>
    );
}
