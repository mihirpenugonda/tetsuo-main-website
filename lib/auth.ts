import { NextApiRequest } from "next";

interface User {
  isAdmin: boolean;
}

export async function authenticateRequest(
  req: NextApiRequest
): Promise<User | null> {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return null;
  }

  // TODO: Replace with your actual authentication logic
  // This is just a placeholder implementation
  if (authHeader === process.env.API_SECRET) {
    return { isAdmin: true };
  }

  return null;
}
