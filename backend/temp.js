// import jwt from "jsonwebtoken";
// import AppError from "../utils/AppError.js";   // তোমার custom error class
// import asyncHandler from "../utils/asyncHandler.js"; // wrapper to avoid try-catch

// export const verifyJWT = asyncHandler(async (req, res, next) => {
//   const secret = process.env.SELLER_JWT_SECRET;
//   if (!secret) {
//     throw new AppError("JWT secret is missing in environment variables", 500);
//   }

//   let token;

//   // 1️⃣ Authorization Header থেকে টোকেন নেওয়া (Bearer token)
//   if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
//     token = req.headers.authorization.split(" ")[1];
//   }

//   // 2️⃣ HttpOnly Cookie থেকেও টোকেন নেওয়া (best practice)
//   if (!token && req.cookies?.jwt) {
//     token = req.cookies.jwt;
//   }

//   if (!token) {
//     throw new AppError("Authentication token missing", 401);
//   }

//   let decoded;
//   try {
//     decoded = jwt.verify(token, secret);
//   } catch (err) {
//     // Token invalid হলে বিস্তারিত reason ফেলা
//     if (err.name === "TokenExpiredError") {
//       throw new AppError("Token has expired", 401);
//     }
//     if (err.name === "JsonWebTokenError") {
//       throw new AppError("Invalid token", 401);
//     }
//     throw new AppError("Could not verify token", 401);
//   }

//   // decoded payload → req.user এ সেট করা
//   req.user = {
//     id: decoded.id,
//     email: decoded.email,
//     role: decoded.role,
//   };

//   next();
// });
