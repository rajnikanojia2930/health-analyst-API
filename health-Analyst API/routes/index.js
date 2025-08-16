import express from "express";
import patientRoutes from "./patientRoutes.js";
import vitalRoutes from "./vitalRoutes.js";

const router = express.Router();

router.use("/patients", patientRoutes);
router.use("/vitals", vitalRoutes);

export default router;
