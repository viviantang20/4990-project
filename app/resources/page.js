import Sidebar from "@/components/sidebar";

export default function Page() {
    return (
        <div className="flex w-full">
  {/* Sidebar section */}
  <div className="w-96"> {/* fixed width or max-w-sm */}
    <Sidebar />
  </div>

  {/* Main content section */}
  <div className="w-10/12"> {/* takes the rest of the space */}
    {/* Content title at the top and centered */}
    <div className="  text-center py-4"> {/* centers text horizontally, adds padding and a bottom border */}
      <h1 className="text-6xl font-bold">Resources</h1>
    </div>
    
    {/* Main content */}
    <div className="p-8">
        
        <div className="space-y-6">
            <section>
                <h2 className="text-4xl font-semibold mb-3">Documentation</h2>
                <p className="mb-2">Find detailed instructions and explanations about algorithms.</p>
                <a href="https://github.com/aimacode" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">Visit Documentation</a>
            </section>

            <section>
                <h2 className="text-4xl font-semibold mb-3">Tutorials</h2>
                <p className="mb-2">Step-by-step guides to get you started or to help you master advanced features.</p>
                <a href="https://example.com/tutorials" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">Browse Tutorials</a>
            </section>

            <section>
                <h2 className="text-4xl font-semibold mb-3">Tools & Utilities</h2>
                <p className="mb-2">A collection of tools to facilitate your work with our products.</p>
                <a href="https://example.com/tools" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">Explore Tools</a>
            </section>

            <section>
                <h2 className="text-4xl font-semibold mb-3">Community Forum</h2>
                <p className="mb-2">Join discussions, ask questions, and share your insights with other users.</p>
                <a href="https://example.com/forum" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">Join the Forum</a>
            </section>
                        
            <section>
                    <h2 className="text-4xl font-semibold mb-3">Support</h2>
                    <p className="mb-2">Need help? Reach out to our support team for assistance.</p>
                    <a href="https://example.com/support" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">Contact Support</a>
            </section>

            <section>
                <h2 className="text-4xl font-semibold mb-3">Recommended Reading</h2>
                <p className="mb-2">Enhance your knowledge with a selection of recommended articles and books.</p>
                <ul className="list-disc pl-5">
                    <li><a href="https://example.com/article1" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">Industry Article</a></li>
                    <li><a href="https://example.com/book1" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">Related Book Title</a></li>
                    <li><a href="https://example.com/article2" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">Another Relevant Article</a></li>
                </ul>
            </section>

            <section>
                <h2 className="text-4xl font-semibold mb-3">External Resources</h2>
                <p className="mb-2">Discover other resources that can offer additional support and information.</p>
                <a href="https://externalresource.com" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">External Resource Link</a>
            </section>
        </div>
    </div>
  </div>
</div>



    );
}
