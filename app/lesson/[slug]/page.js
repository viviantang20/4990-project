import axios from "axios";
import Markdown from "react-markdown";
import Sidebar from "@/components/sidebar";

async function getData(url, headers) {
    try {
        const response = await axios.get(url, { headers });
        const fileInfo = response.data;
        const content = Buffer.from(fileInfo.content, "base64").toString(
            "utf-8"
        );

        return content;
    } catch (error) {
        console.error(error);
    }
}

export default async function Page({ params }) {
    // Set your GitHub username, repository name, and the file path
    const githubUsername = "NoumanAMalik";
    const repositoryName = "i-love-ai-docs";
    const filePath = params.slug + ".md";

    // Replace 'your-token' with the personal access token you generated
    const accessToken = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

    // GitHub API endpoint to get a file
    const apiUrl = `https://api.github.com/repos/${githubUsername}/${repositoryName}/contents/${filePath}`;

    const headers = {
        Authorization: `token ${accessToken}`,
    };

    let pageContent = await getData(apiUrl, headers);

    return (
        <div className="w-full flex flex-row">
            <Sidebar />
            <div className="prose">
                <div>Lesson: {params.slug}</div>
                {pageContent ? <Markdown>{pageContent}</Markdown> : "..."}
            </div>
        </div>
    );
}
