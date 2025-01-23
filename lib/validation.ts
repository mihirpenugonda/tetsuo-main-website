import { NewsData, NewsItem } from "./news";

export function validateNewsData(data: any): data is NewsData {
  if (!data || typeof data !== "object") return false;

  // Validate top level properties
  if (typeof data.title !== "string" || typeof data.description !== "string") {
    return false;
  }

  // Validate items array
  if (!Array.isArray(data.items)) return false;

  // Validate each news item
  return data.items.every((item: any): item is NewsItem => {
    return (
      typeof item === "object" &&
      typeof item.date === "string" &&
      typeof item.category === "string" &&
      typeof item.title === "string" &&
      typeof item.description === "string"
    );
  });
}
