import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../lib/db";
import bcrypt from "bcryptjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { username, fullName, password, confirmPassword, isAdmin } = req.body;

    if (!username || !fullName || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const connection = await connectDB();

    // Check if username already exists
    const [rows] = await connection.execute(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    if ((rows as any[]).length > 0) {
      await connection.end();
      return res.status(400).json({ message: "Username already taken" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const [result] = await connection.execute(
      "INSERT INTO users (username, full_name, password, role, created_at) VALUES (?, ?, ?, ?, NOW())",
      [username, fullName, hashedPassword, isAdmin ? "admin" : "user"]
    );

    await connection.end();

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: (result as any).insertId,
        username,
        fullName,
        role: isAdmin ? "admin" : "user",
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ message: "Server error", error: error.message });
    }
    return res.status(500).json({ message: "Unknown server error" });
  }
}
