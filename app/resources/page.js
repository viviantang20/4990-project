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
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Articles</h3>
                  <a
                    href="https://www.ibm.com/topics/artificial-intelligence"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    IBM: What is AI
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tutorials</h3>
                  <a
                    href="https://microsoft.github.io/AI-For-Beginners/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Microsoft: AI for Beginners
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
                    The World of AI Agents
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
                    Agents and Environments: The Building Blocks of AI
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
                    Designing Your First Intelligent Agent
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
                    Navigating Complexities: Search Strategies
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
                    Optimizing Search: From Algorithms to Heuristics
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
                    Implementing Search Algorithms in Code
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
                    Exploring Search in Dynamic Environments
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
                    Search Techniques for the Real World
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
                    Advanced Search: Tackling the Unknown
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
                    Unlocking Problems: The Power of Constraints
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
                    Constraints: AI's Rulebook
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
                    Constraint Satisfaction Problems: A Primer
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
                  >AI in Competition: Adversarial Search Strategies</a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Articles</h3>
                  <a
                    href="https://www.example.com/articles/what-is-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-blue-300"
                  >
                    Game Theory and AI: The Adversarial Dance
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
                    Coding Chess: An Exercise in Adversarial Search
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
                    Rational Thinking: Logical Agents in Action
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
                    Logic and AI: How Agents Reason
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
                    Building Logical Agents with Prolog
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
                    Beyond Binary: Introduction to First-Order Logic
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
                    Expanding AI's Vocabulary: First-Order Logic Explained
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
                    First-Order Logic in AI: Writing Your First Queries
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
                    The Art of Deduction: AI and Inference
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
                    Inference Engines: Driving AI's Thought Process
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
                    Automated Reasoning: Crafting Inference Algorithms
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
                    Mapping the Mind: AI's Knowledge Landscape
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
                    Encapsulating Reality: AI's Knowledge Representation
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
                    Creating Knowledge Bases for AI
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
                    Planning Ahead: AI's Roadmap to Action
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
                    Scripting the Future: The Role of Automated Planning in AI
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
                    From Goals to Actions: Automating AI Plans
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
                    Calculating Risks: AI's Approach to Uncertainty
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
                    Navigating the Unknown: Probabilities in AI
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
                    Uncertain Outcomes: Programming Probabilistic Models
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
                    Reasoning in a World of Chances
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
                    Probability and Logic: How AI Predicts the Unpredictable
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
                    Bayesian Thinking: Making Sense of AI's Decisions
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
                    The Algorithms That Shape AI
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
                    From Logic to Learning: The Algorithms Behind AI
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
                    Algorithmic Adventures: Implementing AI Solutions
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
                    Exploring the Edges: The Future of AI
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
                    AI in Depth: Diving into Advanced Topics
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
                    Beyond Basics: Advanced AI Development
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
