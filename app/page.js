import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <main className="h-fit pt-20">
            <div className="flex h-full flex-col items-center justify-center">
                <Image
                    src="/logo.png"
                    width={100}
                    height={150}
                    alt="Logo"
                    className="mb-8" // If you need space between the text and the image, adjust the left padding here
                />
                <h1 className="text-7xl">
                    Welcome to{" "}
                    <span className="text-emerald-400 hover:underline">
                        iLoveAI
                    </span>
                </h1>

                <h3 className="mt-2 text-lg">
                    Where Textbook Knowledge Meets Interactive Learning
                </h3>

                <Image
                    src="/mainpage.jpeg"
                    width={750}
                    height={750}
                    className="p-4"
                />

                <h3 className="mt-auto text-lg">
                    A project made by Jaxon, Nouman, and Vivian
                </h3>

                <Link href="/lesson/Introduction">
                    <p className="btn mt-4">Begin Your Journey!</p>{" "}
                </Link>
            </div>
            <span className="divider"></span>
            <div className="ml-auto mr-auto flex h-screen w-2/4 flex-col items-center">
                <h1 className="text-4xl">Features</h1>
                <div className="hero">
                    <div className="hero-content flex-col md:flex-row-reverse">
                        <Image
                            src="/content.jpeg"
                            width={400}
                            height={250}
                            className="max-w-sm rounded-lg shadow-2xl"
                        />
                        <div>
                            <h1 className="text-3xl font-bold">
                                Simple, Digestable Content!
                            </h1>
                            <p className="py-6">
                                Textbook content, condensed into small easy to
                                read sections. Highlighting the most important
                                parts to reinforce to the reader what to
                                remember.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hero">
                    <div className="hero-content flex-col md:flex-row">
                        <Image
                            src="/sidebar.jpeg"
                            width={400}
                            height={250}
                            className="max-w-sm rounded-lg shadow-2xl"
                        />
                        <div>
                            <h1 className="text-3xl font-bold">
                                Easy Navigation
                            </h1>
                            <p className="py-6">
                                All content is organized based on chapters, so
                                as students are covering chapters in class, they
                                can find all the supplemental information that
                                they need in one area.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hero">
                    <div className="hero-content flex-col md:flex-row">
                        <Image
                            src="/quiz.jpeg"
                            width={400}
                            height={250}
                            className="max-w-sm rounded-lg shadow-2xl"
                        />
                        <div>
                            <h1 className="text-3xl font-bold">Quizzes!</h1>
                            <p className="py-6">
                                Created off of content from each chapter
                                ensuring student retention and also reiterating
                                important information students should remember
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hero">
                    <div className="hero-content flex-col md:flex-row-reverse">
                        <Image
                            src="/discussion.jpeg"
                            width={400}
                            height={250}
                            className="max-w-sm rounded-lg shadow-2xl"
                        />
                        <div>
                            <h1 className="text-3xl font-bold">Discussions</h1>
                            <p className="py-6">
                                Discussion board for collaborative learning,
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
