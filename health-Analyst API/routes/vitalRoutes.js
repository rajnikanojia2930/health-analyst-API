import express from "express";
import Vital from "../models/vital.js";

const router = express.Router();

// Ingest vital signs
router.post("/", async (req, res) => {
  try {
    const vital = await Vital.create(req.body);
    res.status(201).json(vital);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all vitals for a patient
router.get("/:patientId", async (req, res) => {
  try {
    const vitals = await Vital.find({ patientId: req.params.patientId });
    res.json(vitals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
