"use client";
import Link from "next/link";

export default function Home() {
    return (
        <main className="h-screen w-screen flex align-center justify-center">
            <div className="h-full lg:w-1/2 flex flex-col justify-center items-center">
                <h1 className="text-7xl">
                    I <span className="text-red-500">❤</span> AI
                </h1>
                <h2 className="text-xl mt-2">
                    Project by Jaxon, Nouman, and Vivian
                </h2>
                <div className="divider"></div>
                <h2 className="text-lg">
                    The AI course she told you not to worry about
                </h2>

                <Link href="/lesson/Introduction">
                    <a className="btn mt-4">Begin Your Journey</a>{" "}
                    {/* Using an anchor tag styled as a button */}
                </Link>
                {/* <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                >
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">
                            Thanks for Joining!
                        </h3>
                        <p className="py-4">
                            I'm not going to save your email right now, so check
                            back later :)
                        </p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog> */}
            </div>
        </main>
    );
}
