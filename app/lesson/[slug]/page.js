"use client";

import axios from "axios";
import Markdown from "react-markdown";
import Sidebar from "@/components/sidebar";
import Quiz from "@/components/quiz";
import quizData from "@/data/quizData";
import Giscus from "@giscus/react";

async function getData(url, headers) {
  try {
    const response = await axios.get(url, { headers });
    const fileInfo = response.data;
    const content = Buffer.from(fileInfo.content, "base64").toString("utf-8");

    return content;
  } catch (error) {
    console.error(error);
  }
}

export default async function Page({ params }) {
  // Set your GitHub username, repository name, and the file path
  const githubUsername = "NoumanAMalik";
  const repositoryName = "i-love-ai-docs";

  // Exit early until we are ready to handle algorithms
  if (params.slug.includes("algorithm"))
    return (
      <div className="w-full flex flex-row">
        <Sidebar />
      </div>
    );

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
    <div className="w-full flex flex-row ">
      <Sidebar />
      <div className="flex-1 flex flex-col justify-center items-left pl-8 ">
        <div className="prose max-w-5xl bg-black bg-opacity-20 p-10">
          {pageContent ? <Markdown>{pageContent}</Markdown> : "Loading..."}
        </div>
        <Quiz questions={quizData[params.slug] || []} />

        <Giscus
          id="comments"
          repo="NoumanAMalik/i-love-ai-docs"
          repoId="R_kgDOKhC1Xw"
          category="Q&A"
          categoryId="DIC_kwDOKhC1X84Cc_Yl"
          mapping="pathname"
          term="Welcome to @giscus/react component!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="preferred_color_scheme"
          lang="en"
          loading="lazy"
          crossorigin="anonymous"
        />
      </div>
    </div>
  );
}
