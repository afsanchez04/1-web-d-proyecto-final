
import { api } from "../services/api";

export const registerRequest = (user) => api.post("/register", user)
export const loginRequest = (user) => api.post("/login", user)
export const profileRequest = () => api.get("/profile")
export const logoutRequest = () => api.post("/logout")

