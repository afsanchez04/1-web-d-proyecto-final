import mongoose from "mongoose";

const AlumnoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  edad: {
    type: Number,
    required: true,
    trim: true
  },
  grupo: {
    type: String,
    required: true,
    trim: true
  }
},{
  timestamps: true
})

export default mongoose.model("Alumno", AlumnoSchema)