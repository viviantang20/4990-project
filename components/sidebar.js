"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import chapterLinks from "@/data/chapter-link";
import algorithmLinks from "@/data/algorithm-link";
import algorithmLinksCh4 from "@/data/algorithmLinksCh4";
import algorithmLinksCh8 from "@/data/algorithmLinksCh8";
import algorithmLinksCh9 from "@/data/algorithmLinksCh9";
import Image from 'next/image'

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="menu menu-sm lg:menu-md  overflow-y-auto border-l-8 border-r-8  border-teal-200 h-screen top-0 sticky"> {/* Overflowwing issue when multiple drop downs open something with menu styling"*/}
            
            <li>

            <div className="flex items-center pb-3"> {/* This container will use flexbox */}
                <Image
                    src="/logo.png"
                    width={100}
                    height={150}
                    alt="Logo"
                    className="" // If you need space between the text and the image, adjust the left padding here
                />


                <h2 className="text-emerald-400 pl-6">
                A <span className="text-white">Modern</span> Approach<br/> to Artificial Intelligence
                </h2>
            </div>
                
                <details open >

                    <summary>Textbook Chapters</summary>
                    <ul>
                        {chapterLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    href={`${link.url}`}
                                    className={
                                        link.url == pathname ? "active" : ""
                                    }
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </details>
                <br/>
                <details >
                    <summary> Ch. 3 | Search Algorithms  <tab/>  </summary>
                    <ul>
                        {algorithmLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    href={`${link.url}`}
                                    className={
                                        link.url == pathname ? "active" : ""
                                    }
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </details>
                <details >
                    <summary> Ch. 4  | Search Algorithms <tab/> </summary>
                    <ul>
                        {algorithmLinksCh4.map((link) => (
                            <li key={link.id}>
                                <Link
                                    href={`${link.url}`}
                                    className={
                                        link.url == pathname ? "active" : ""
                                    }
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </details>
                <details >
                    <summary>Ch. 8  | First-Order Logic Algorithms </summary>
                    <ul>
                        {algorithmLinksCh8.map((link) => (
                            <li key={link.id}>
                                <Link
                                    href={`${link.url}`}
                                    className={
                                        link.url == pathname ? "active" : ""
                                    }
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </details>
                <details >
                    <summary>Ch. 9  | Inference Rule Algorithms </summary>
                    <ul>
                        {algorithmLinksCh9.map((link) => (
                            <li key={link.id}>
                                <Link
                                    href={`${link.url}`}
                                    className={
                                        link.url == pathname ? "active" : ""
                                    }
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </details>
            </li>
        </div>
    );
}
