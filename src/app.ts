import express, { Express } from "express";
import productRoutes from "./api/v1/routes/productRoutes";

// Initialize Express application
const app: Express = express();

app.use(express.json());

// Route handler for items
app.use("/api/v1", productRoutes);

// Define a route
app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

export default app;