"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import chapterLinks from "@/data/chapter-link";
import chapter3AlgoLinks from "@/data/algorithmLinksCh3";
import chapter4AlgoLinks from "@/data/algorithmLinksCh4";
import chapter8AlgoLinks from "@/data/algorithmLinksCh8";
import chapter9AlgoLinks from "@/data/algorithmLinksCh9";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname();

  const chapter1 = chapterLinks[0];
  const chapter2 = chapterLinks[1];

  const chapter3 = chapterLinks[2];
  const chapter3Algo = chapter3AlgoLinks[11];

  const chapter4 = chapterLinks[3];

  const chapter5 = chapterLinks[4];
  const chapter6 = chapterLinks[5];
  const chapter7 = chapterLinks[6];

  const chapter8 = chapterLinks[7];

  const chapter9 = chapterLinks[8];

  const chapter10 = chapterLinks[0];
  const chapter11 = chapterLinks[0];
  const chapter12 = chapterLinks[0];
  const chapter13 = chapterLinks[0];

  return (
    <div className=" w-64 menu menu-sm lg:menu-md overflow-y-auto border-r-8  border-green-600 h-screen top-0 sticky">
      {/* Overflowwing issue when multiple drop downs open something with menu styling"*/}
      <li>
        <div className="flex items-center pb-3 ">
          {" "}
          {/* This container will use flexbox */}
          <Image
            src="/logo.png"
            width={100}
            height={150}
            alt="Logo"
            className="" // If you need space between the text and the image, adjust the left padding here
          />
          <h2 className="text-emerald-400 pl-6">
            A <span className="text-white">Modern</span> Approach
            <br /> to Artificial Intelligence
          </h2>
        </div>

        <details>
          <summary> 1. Introduction </summary>
          <ul>
            <li key={chapter1.id}>
              <Link
                href={`${chapter1.url}`}
                className={chapter1.url == pathname ? "active" : ""}
              >
                Overview
              </Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>2. Intelligent Agents </summary>
          <ul>
            <li key={chapter2.id}>
              <Link
                href={`${chapter2.url}`}
                className={chapter2.url == pathname ? "active" : ""}
              >
                Overview
              </Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>3. Solving Problems by Searching </summary>
          <ul>
            <li key={chapter3.id}>
              <Link
                href={`${chapter3.url}`}
                className={chapter3.url == pathname ? "active" : ""}
              >
                Overview
              </Link>

              <details>
                <summary>
                  {" "}
                  Search Algorithms <tab />{" "}
                </summary>
                <ul>
                  {chapter3AlgoLinks.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={`${link.url}`}
                        className={link.url == pathname ? "active" : ""}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </details>
        <details>
          <summary>4. Search in Complex Environments </summary>
          <ul>
            <li key={chapter4.id}>
              <Link
                href={`${chapter4.url}`}
                className={chapter4.url == pathname ? "active" : ""}
              >
                Overview
              </Link>

              <details>
                <summary>
                  {" "}
                  Search Algorithms <tab />{" "}
                </summary>
                <ul>
                  {chapter4AlgoLinks.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={`${link.url}`}
                        className={link.url == pathname ? "active" : ""}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </details>
        <details>
          <summary>5. Constraint Satisfaction Problems </summary>
          <ul>
            <li key={chapter5.id}>
              <Link
                href={`${chapter5.url}`}
                className={chapter5.url == pathname ? "active" : ""}
              >
                Overview
              </Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>6. Adversarial Search and Games </summary>
          <ul>
            <li key={chapter6.id}>
              <Link
                href={`${chapter6.url}`}
                className={chapter6.url == pathname ? "active" : ""}
              >
                Overview
              </Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>7. Logical Agents </summary>
          <ul>
            <li key={chapter7.id}>
              <Link
                href={`${chapter7.url}`}
                className={chapter7.url == pathname ? "active" : ""}
              >
                Overview
              </Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>8. First-Order Logic </summary>
          <ul>
            <li key={chapter8.id}>
              <Link
                href={`${chapter8.url}`}
                className={chapter8.url == pathname ? "active" : ""}
              >
                Overview
              </Link>

              <details>
                <summary>First-Order Logic Algorithms </summary>
                <ul>
                  {chapter8AlgoLinks.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={`${link.url}`}
                        className={link.url == pathname ? "active" : ""}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </details>
        <details>
          <summary>9. Inference in First-Order Logic </summary>
          <ul>
            <li key={chapter9.id}>
              <Link
                href={`${chapter9.url}`}
                className={chapter9.url == pathname ? "active" : ""}
              >
                Overview
              </Link>

              <details>
                <summary> Inference Rule Algorithms </summary>
                <ul>
                  {chapter9AlgoLinks.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={`${link.url}`}
                        className={link.url == pathname ? "active" : ""}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </details>
        <details>
          <summary>10. Inference in First-Order Logic </summary>
          <ul>
            <li key={chapter1.id}>
              <Link
                href={`${chapter1.url}`}
                className={chapter1.url == pathname ? "active" : ""}
              >
                Overview
              </Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>11. Automated Planning </summary>
          <ul>
            <li key={chapter1.id}>
              <Link
                href={`${chapter1.url}`}
                className={chapter1.url == pathname ? "active" : ""}
              >
                Overview
              </Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>12. Quantifying Uncertainty </summary>
          <ul>
            <li key={chapter1.id}>
              <Link
                href={`${chapter1.url}`}
                className={chapter1.url == pathname ? "active" : ""}
              >
                Overview
              </Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>13. Probabilistic Reasoning </summary>
          <ul>
            <li key={chapter1.id}>
              <Link
                href={`${chapter1.url}`}
                className={chapter1.url == pathname ? "active" : ""}
              >
                Overview
              </Link>
            </li>
          </ul>
        </details>

        <br />

        <br />

        <div className="mb-4 text-lg text-center">
          <Link href="/resources" className="text-lg">
            📚 Resources
          </Link>
        </div>
      </li>
    </div>
  );
}
