import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  heartRate: Number,
  bloodPressure: String,
  temperature: Number,
});

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;
