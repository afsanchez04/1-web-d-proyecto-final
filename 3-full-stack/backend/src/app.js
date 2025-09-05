import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { config } from "dotenv"
import alumnosRouter from "./routes/alumnos.routes.js"
import authRoutes from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"

config()

const PORT = process.env.PORT
const app = express()

app.use( express.json() )
app.use( cors({
  origin: [
    "http://localhost:5173",
    "https://1-web-d-proyecto-final-83lg.vercel.app"
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}) )
app.use( cookieParser() )

app.use( "/api/alumnos", alumnosRouter )
app.use( "/api", authRoutes )

mongoose.connect(process.env.MONGO_KEY).then( () => console.log( "Conectado a MongoDB" ) )

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto", PORT)
})