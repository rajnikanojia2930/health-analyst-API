import mongoose from "mongoose";

const vitalSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  deviceId: { type: String, required: true },
  heartRate: Number,
  spo2: Number,
  systolic: Number,
  diastolic: Number,
  respiration: Number,
  tempC: Number
}, { timestamps: true });

export default mongoose.model("Vital", vitalSchema);
