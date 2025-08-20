
import { Router } from "express";
import Alumno from "../models/alumno.model.js";

const router = Router()

//Crear alumno
router.post('/', async (req, res) => {
  const nuevoAlumno = new Alumno(req.body)
  await nuevoAlumno.save()
  res.json(nuevoAlumno)
})

//Obtener todos los alumnos
router.get('/', async (req, res) => {
  const alumnos = await Alumno.find()
  res.json(alumnos)
})

//Modificar alumno
router.put('/:id', async (req, res) => {
  const alumnoActualizado = await Alumno.findByIdAndUpdate(req.params.id, req.body, {new: true})
  res.json(alumnoActualizado)
})

//Eliminar alumno
router.delete('/:id', async (req, res) => {
  await Alumno.findByIdAndDelete(req.params.id)
  res.json({message: "Alumno eliminado"})
})

export default router


