import express, { json } from "express";
import cors from "cors";
import { ENV } from "./config/env";
import { clerkMiddleware } from "@clerk/express";

const app = express();

app.use(cors({ origin: ENV.FRONTEND_URL })); // Allows requests from frontend url
app.use(clerkMiddleware()); // auth object is attached to the req
app.use(express.json()); // parses JSON req bodies
app.use(express.urlencoded({ extended: true })); // parses form data (like HTML forms)

// app.use(json)

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to ProductStore API",
    endpoints: {
      users: "/api/users",
      products: "/api/products",
      comments: "/api/comments",
    },
  });
});

app.listen(ENV.PORT, () => {
  console.log(`Server is up and running on PORT: ${ENV.PORT}`);
});
