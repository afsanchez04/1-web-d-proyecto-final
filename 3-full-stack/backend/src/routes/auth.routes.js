import { Router } from "express";
import { register, login, logout, profile } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { loginValidator, registerValidator } from "../validators/auth.validator.js";
import { handleValidator } from "../middlewares/handleValidator.js";


const router = Router()

router.post('/register', registerValidator, handleValidator, register)
router.post('/login', loginValidator, handleValidator, login)
router.post('/logout', logout)
router.get('/profile', authRequired, profile)

export default router