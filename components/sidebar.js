"use client";
import Link from 'next/link'

export default function Sidebar() {
    return (
        <div className="menu menu-sm lg:menu-md px-2 py-0   border-l-8 border-white  ">
                <li className="menu-title">Artificial Intelligence: A Modern Approach</li>
                <li ><Link href="/lesson/Introduction">Introduction</Link></li>
                <li><Link href="/lesson/Intelligent-Agents">Intelligent Agents</Link></li>
                <li><Link href="/lesson/Problem-Solving">Problem-Solving</Link></li>
                <li><Link href="/lesson/Search-in-Complex-Environments">Search in Complex Environments</Link></li>
                <li><Link href="/lesson/Constraint-Satisfaction-Problems">Constraint Satisfaction Problems</Link></li>
                <li><Link href="/lesson/Adversarial-Search-and-Games">Adversarial Search and Games</Link></li>
                <li><Link href="/lesson/Logical-Agents">Logical Agents</Link></li>
                <li><Link href="/lesson/First-Order-Logic">First-Order Logic</Link></li>
                <li><Link href="/lesson/Inference-in-First-Order-Logic"> Inference in First-Order Logic</Link></li>
        </div>

    );
}
