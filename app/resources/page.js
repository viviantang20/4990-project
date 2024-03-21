import Sidebar from "@/components/sidebar";

export default function Page() {
  return (
    <div className="flex w-full">
      {/* Sidebar section */}
      <div className="w-96">
        {" "}
        {/* fixed width or max-w-sm */}
        <Sidebar />
      </div>

      {/* Main content section */}
      <div className="w-full">
        {/* takes the rest of the space */}
        {/* Content title at the top and centered */}
        <div className="  text-center py-4">
          {" "}
          {/* centers text horizontally, adds padding and a bottom border */}
          <h1 className="text-6xl font-bold">Resources</h1>
          <p className="text-xl font-bold pt-4">
            Videos | Articles | Tutorials
          </p>
          <p className="text-md font-bold text-slate-400">
            Designed To Each Chapter
          </p>
        </div>
        {/* Main content */}
        <div className="flex justify-center items-center gap-10 p-10 ">
          <div className="card  bg-slate-600 bg-opacity-20 shadow-xl shadow-green-950 w-3/6">
            <div className="card-body items-center text-left w-full  rounded-lg ">
              <h2 className="card-title text-xl font-bold mb-4">
                Chapter 1 : Introduction
              </h2>
              <div className="grid grid-cols-3 gap-10 ">
                <div>
                  <h3 className="font-semibold mb-2">Videos</h3>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    AI Concepts
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    AI Risks
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Articles</h3>
                  <a
                    href="https://www.example.com/articles/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.example.com/articles/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    AI Concepts
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    AI Risks
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tutorials</h3>
                  <a
                    href="https://www.example.com/tutorials/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Ai Concepts
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    AI Risks
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card  bg-slate-600 bg-opacity-20 shadow-xl shadow-green-950 w-3/6">
            <div className="card-body items-center text-left w-full">
              <h2 className="card-title text-xl font-bold mb-4">
                Chapter 2 : Intelligent Agents
              </h2>
              <div className="grid grid-cols-3 gap-10 ">
                <div className="w-full">
                  <h3 className="font-semibold mb-2">Videos</h3>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Agents
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Behavior
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Structure
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Articles</h3>
                  <a
                    href="https://www.example.com/articles/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Agents
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Behavior
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Structure
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tutorials</h3>
                  <a
                    href="https://www.example.com/tutorials/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Agents
                  </a>{" "}
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Behavior
                  </a>{" "}
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Structure
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card  bg-slate-600 bg-opacity-20 shadow-xl shadow-green-950 w-3/6">
            <div className="card-body items-center text-left w-full">
              <h2 className="card-title text-xl font-bold mb-4">
                Chapter 3 : Solving Problems by Search
              </h2>
              <div className="grid grid-cols-3 gap-10">
                <div>
                  <h3 className="font-semibold mb-2">Videos</h3>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Examples
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Search Algo
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Heuristic
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Articles</h3>
                  <a
                    href="https://www.example.com/articles/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Examples
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Search Algo
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Heuristic
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tutorials</h3>
                  <a
                    href="https://www.example.com/tutorials/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Examples
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Search Algo
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Heuristic
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 p-10">
          <div className="card  bg-slate-600 bg-opacity-20 shadow-xl shadow-green-950 w-3/6">
            <div className="card-body items-center text-left w-full">
              <h2 className="card-title text-xl font-bold mb-4">
                Chapter 4 : Search in Environments
              </h2>
              <div className="grid grid-cols-3 gap-10">
                <div>
                  <h3 className="font-semibold mb-2">Videos</h3>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Local Search
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Nondeterminsistic
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Partially Oberservable
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Articles</h3>
                  <a
                    href="https://www.example.com/articles/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Local Search
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Nondeterminsistic
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Partially Oberservable
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tutorials</h3>
                  <a
                    href="https://www.example.com/tutorials/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Local Search
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Nondeterminsistic
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Partially Oberservable
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card  bg-slate-600 bg-opacity-20 shadow-xl shadow-green-950 w-3/6 ">
            <div className="card-body items-center text-left w-full">
              <h2 className="card-title text-xl font-bold mb-4">
                Chapter 5 : Constraint Satisfaction
              </h2>
              <div className="grid grid-cols-3 gap-10">
                <div>
                  <h3 className="font-semibold mb-2">Videos</h3>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Constraints
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Problem Form
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  ></a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Articles</h3>
                  <a
                    href="https://www.example.com/articles/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Constraints
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Problem Form
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  ></a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tutorials</h3>
                  <a
                    href="https://www.example.com/tutorials/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Constraints
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Problem Form
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card  bg-slate-600 bg-opacity-20 shadow-xl shadow-green-950 w-3/6">
            <div className="card-body items-center text-left w-full">
              <h2 className="card-title text-xl font-bold mb-4">
                Chapter 6 : Adversarial Search
              </h2>
              <div className="grid grid-cols-3 gap-10">
                <div>
                  <h3 className="font-semibold mb-2">Videos</h3>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  ></a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Articles</h3>
                  <a
                    href="https://www.example.com/articles/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tutorials</h3>
                  <a
                    href="https://www.example.com/tutorials/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 p-10">
          <div className="card  bg-slate-600 bg-opacity-20 shadow-xl shadow-green-950 w-3/6">
            <div className="card-body items-center text-left w-full">
              <h2 className="card-title text-xl font-bold mb-4">
                Chapter 7 : Logical Agents
              </h2>
              <div className="grid grid-cols-3 gap-10">
                <div>
                  <h3 className="font-semibold mb-2">Videos</h3>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Articles</h3>
                  <a
                    href="https://www.example.com/articles/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tutorials</h3>
                  <a
                    href="https://www.example.com/tutorials/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card  bg-slate-600 bg-opacity-20 shadow-xl shadow-green-950 w-3/6">
            <div className="card-body items-center text-left w-full">
              <h2 className="card-title text-xl font-bold mb-4">
                Chapter 8 : First-Order Logic
              </h2>
              <div className="grid grid-cols-3 gap-10">
                <div>
                  <h3 className="font-semibold mb-2">Videos</h3>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Articles</h3>
                  <a
                    href="https://www.example.com/articles/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tutorials</h3>
                  <a
                    href="https://www.example.com/tutorials/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card  bg-slate-600 bg-opacity-20 shadow-xl shadow-green-950 w-3/6">
            <div className="card-body items-center text-left w-full">
              <h2 className="card-title text-xl font-bold mb-4">
                Chapter 9 : Inference in FOL
              </h2>
              <div className="grid grid-cols-3 gap-10">
                <div>
                  <h3 className="font-semibold mb-2">Videos</h3>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Articles</h3>
                  <a
                    href="https://www.example.com/articles/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tutorials</h3>
                  <a
                    href="https://www.example.com/tutorials/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 p-10">
          <div className="card  bg-slate-600 bg-opacity-20 shadow-xl shadow-green-950 w-3/6">
            <div className="card-body items-center text-left w-full">
              <h2 className="card-title text-xl font-bold mb-4">
                Chapter 10 : Knowledge Representation
              </h2>
              <div className="grid grid-cols-3 gap-10">
                <div>
                  <h3 className="font-semibold mb-2">Videos</h3>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Articles</h3>
                  <a
                    href="https://www.example.com/articles/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tutorials</h3>
                  <a
                    href="https://www.example.com/tutorials/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card  bg-slate-600 bg-opacity-20 shadow-xl shadow-green-950 w-3/6">
            <div className="card-body items-center text-left w-full">
              <h2 className="card-title text-xl font-bold mb-4">
                Chapter 11 : Automated Planning
              </h2>
              <div className="grid grid-cols-3 gap-10">
                <div>
                  <h3 className="font-semibold mb-2">Videos</h3>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Articles</h3>
                  <a
                    href="https://www.example.com/articles/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tutorials</h3>
                  <a
                    href="https://www.example.com/tutorials/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card  bg-slate-600 bg-opacity-20 shadow-xl shadow-green-950 w-3/6">
            <div className="card-body items-center text-left w-full">
              <h2 className="card-title text-xl font-bold mb-4">
                Chapter 12 : Quantifying Uncertainty
              </h2>
              <div className="grid grid-cols-3 gap-10">
                <div>
                  <h3 className="font-semibold mb-2">Videos</h3>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>{" "}
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Articles</h3>
                  <a
                    href="https://www.example.com/articles/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tutorials</h3>
                  <a
                    href="https://www.example.com/tutorials/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 p-10">
          <div className="card  bg-slate-600 bg-opacity-20 shadow-xl shadow-green-950 w-3/6">
            <div className="card-body items-center text-left w-full">
              <h2 className="card-title text-xl font-bold mb-4">
                Chapter 13 : Probabilistic Reasoning
              </h2>
              <div className="grid grid-cols-3 gap-10">
                <div>
                  <h3 className="font-semibold mb-2">Videos</h3>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Articles</h3>
                  <a
                    href="https://www.example.com/articles/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>{" "}
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>{" "}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tutorials</h3>
                  <a
                    href="https://www.example.com/tutorials/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card  bg-slate-600 bg-opacity-20 shadow-xl shadow-green-950 w-3/6">
            <div className="card-body items-center text-left w-full">
              <h2 className="card-title text-xl font-bold mb-4">Algorithms</h2>
              <div className="grid grid-cols-3 gap-10">
                <div>
                  <h3 className="font-semibold mb-2">Videos</h3>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Articles</h3>
                  <a
                    href="https://www.example.com/articles/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>{" "}
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tutorials</h3>
                  <a
                    href="https://www.example.com/tutorials/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card  bg-slate-600 bg-opacity-20 shadow-xl shadow-green-950 w-3/6">
            <div className="card-body items-center text-left w-full">
              <h2 className="card-title text-xl font-bold mb-4">
                Extra Content
              </h2>
              <div className="grid grid-cols-3 gap-10">
                <div>
                  <h3 className="font-semibold mb-2">Videos</h3>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Articles</h3>
                  <a
                    href="https://www.example.com/articles/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>{" "}
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>{" "}
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tutorials</h3>
                  <a
                    href="https://www.example.com/tutorials/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=J4RqCSD--Dg&ab_channel=LearnFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    What is AI
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
