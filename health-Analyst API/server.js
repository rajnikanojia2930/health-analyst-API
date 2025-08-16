import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import patientRoutes from "./routes/patientRoutes.js";  
dotenv.config();

const app = express();
app.use(express.json()); // ✅ allows JSON body

// --- ROUTES ---

// Test route
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

// Create patient
app.post("/api/patients", async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json(patient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all patients
app.get("/api/patients", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- DB + Server ---
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB error:", err));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
