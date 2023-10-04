export default function Home() {
    return (
        <main className="h-screen w-screen flex align-center justify-center">
            <div className="h-full lg:w-1/2 flex flex-col justify-center items-center">
                <h1 className="text-7xl">I ❤ AI</h1>
                <h2 className="text-xl mt-2">
                    Project by Jaxon, Nouman, and Vivian
                </h2>
                <div className="divider"></div>
                <h2 className="text-lg">
                    The AI course she told you not to worry about
                </h2>
                <div className="form-control mt-6">
                    <label class="label">
                        <span class="label-text">Get Notified</span>
                    </label>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="abc@gmail.com"
                            className="input input-bordered"
                        />
                        <button className="btn btn-square">Join</button>
                    </div>
                </div>
            </div>
        </main>
    );
}
