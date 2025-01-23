import { NextApiRequest, NextApiResponse } from "next";
import { getNewsData, updateNewsData, NewsData } from "@/lib/news";
import { authenticateRequest } from "@/lib/auth";
import { validateNewsData } from "@/lib/validation";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // GET request - public access
    if (req.method === "GET") {
      const newsData = getNewsData();
      return res.status(200).json(newsData);
    }

    // POST request - authenticated access
    if (req.method === "POST") {
      // Authenticate request
      const user = await authenticateRequest(req);
      if (!user?.isAdmin) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      // Validate input data
      const newsData = req.body as NewsData;
      if (!validateNewsData(newsData)) {
        return res.status(400).json({ message: "Invalid news data format" });
      }

      // Update news
      const success = await updateNewsData(newsData);

      if (success) {
        return res.status(200).json({ message: "News updated successfully" });
      } else {
        return res.status(500).json({ message: "Failed to update news" });
      }
    }

    return res.status(405).json({ message: "Method not allowed" });
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
