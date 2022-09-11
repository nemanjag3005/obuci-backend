import express from "express";
import cors from "cors";
import errorHandler from "./middleware/errorMiddleware.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
import listings from "./routes/listings.route.js";
import users from "./routes/users.route.js";
const port = process.env.PORT || 8000;

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/listings", listings);
app.use("/api/users", users);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));
app.use(errorHandler);
app.listen(port, () => console.log(`listening on port ${port}`));

export default app;
