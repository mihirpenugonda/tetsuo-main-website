import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface NewsItem {
  date: string;
  category: string;
  title: string;
  description: string;
}

export interface NewsData {
  title: string;
  description: string;
  items: NewsItem[];
}

export function getNewsData(): NewsData {
  const filePath = path.join(process.cwd(), "content/news/updates.mdx");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return data as NewsData;
}

export async function updateNewsData(newsData: NewsData): Promise<boolean> {
  try {
    const filePath = path.join(process.cwd(), "content/news/updates.mdx");

    // Format the MDX content
    const content = `---
title: ${newsData.title}
description: ${newsData.description}
items:
${newsData.items
  .map(
    (item) => `  - date: ${item.date}
    category: ${item.category}
    title: ${item.title}
    description: ${item.description}
`
  )
  .join("\n")}---

`;

    await fs.promises.writeFile(filePath, content, "utf8");
    return true;
  } catch (error) {
    console.error("Error updating news data:", error);
    return false;
  }
}
