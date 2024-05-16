import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    enrollNo: { type: String, required: true },
    dateOfAdmission: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const StudentModel = mongoose.model("Student", StudentSchema);
