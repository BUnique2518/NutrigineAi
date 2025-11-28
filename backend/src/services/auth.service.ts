import prisma from "../config/prisma";
import bcrypt from "bcryptjs";


export const registerService = async (email: string, password: string) => {
  // Check if user exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return newUser;
};



export const loginService = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  return user;
};



export const logoutService = async (refreshToken: string) => {
  // Find user with this refresh token
  const user = await prisma.user.findFirst({
    where: { refreshToken },
  });

  if (!user) {
    throw new Error("Invalid refresh token");
  }

  // Remove refresh token → invalidate session
  await prisma.user.update({
    where: { id: user.id },
    data: { refreshToken: null },
  });

  return true;
};
