import { Request, Response } from "express";
import { loginService, logoutService, registerService } from "../services/auth.service";
import { generateAccessToken, generateRefreshToken } from "../utils";
import prisma from "../config/prisma";
import jwt from "jsonwebtoken";

const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Password validation
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        error:
          "Password must be at least 8 characters long, include one uppercase letter, one number, and one special character.",
      });
    }

    // Create user
    const user = await registerService(email, password);

    // Generate tokens
    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    // Save refreshToken in DB
    await prisma.user.update({
      where: { id: user.id },
      data: { refreshToken },
    });

    // Remove password before sending
    const { password: _, ...safeUser } = user;

    return res.json({
      user: safeUser,
      accessToken,
      refreshToken,
    });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};


export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Validate user + password
    const user = await loginService(email, password);

    // Generate tokens
    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    // Save refreshToken to DB
    await prisma.user.update({
      where: { id: user.id },
      data: { refreshToken },
    });

    // Remove password + refreshToken
    const { password: _, refreshToken: __, ...safeUser } = user;


    return res.json({
      user: safeUser,
      accessToken,
      refreshToken,
    });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({ error: "Refresh token is required" });
    }

    // Verify refresh token
    let decoded: any;
    try {
      decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET as string);
    } catch (err) {
      return res.status(401).json({ error: "Invalid or expired refresh token" });
    }

    // Check if this token matches the one stored in DB
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user || user.refreshToken !== refreshToken) {
      return res.status(403).json({ error: "Unauthorized or token mismatch" });
    }

    // Generate new tokens
    const newAccessToken = generateAccessToken(user.id);
    const newRefreshToken = generateRefreshToken(user.id);

    // Update refresh token in DB
    await prisma.user.update({
      where: { id: user.id },
      data: { refreshToken: newRefreshToken },
    });

    return res.json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });

  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const logoutUser = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({ error: "Refresh token is required" });
    }

    await logoutService(refreshToken);

    return res.json({ message: "Logged out successfully" });

  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

