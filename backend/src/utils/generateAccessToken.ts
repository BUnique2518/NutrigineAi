import jwt from "jsonwebtoken";

export const generateAccessToken = (userId: number) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET as string,
    { expiresIn: "15m" }  
  );
};
