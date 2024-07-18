import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const limitForData = "16kb";
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//for JSON Data
app.use(express.json({ limit: limitForData }));

//for URL Data, Extended for Nested Objects
app.use(express.urlencoded({ extended: true, limit: limitForData }));

//for public assests like pdf images
app.use(express.static("public"));

//Cookie-Parse
app.use(cookieParser());

//  routes
import userRouter from "./routes/user.route.js";

//route declarition
//app.use is middleware
app.use("/api/v1/users", userRouter);

export { app };
