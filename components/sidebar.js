"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Links from "@/data/Link";

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="menu menu-sm lg:menu-md px-2 py-0 border-l-8 border-r-8  border-teal-200 h-screen top-0 sticky">
            <li className="menu-title text-emerald-400 "> ❤ Artificial Intelligence: A Modern Approach </li>
            {Links.map((link) => (
                <li key={link.id}>
                        <Link href={`${link.url}`} className={link.url == pathname ? "active" : ""}>{link.title}</Link>
                </li>
            ))}
        </div>
    )
}
