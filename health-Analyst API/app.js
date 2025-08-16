import express from "express";
import routes from "./routes/index.js";
import { apiKeyAuth } from "./middleware/auth.js";

const app = express();
app.use(express.json());

// Apply API key auth middleware globally
app.use(apiKeyAuth);

app.get("/", (req, res) => {
  res.json({ message: "Health Analyst API is running 🚑" });
});

app.use("/api/v1", routes);

export default app;
