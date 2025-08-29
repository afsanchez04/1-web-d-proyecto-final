

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerRequest } from "../api/auth";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const registerResolver = z.object({
  username: z.string().min(1, "El username es requerido"),
  email: z.email("El email no es válido"),
  password: z.string().min(6, "El password debe tener mínimo 6 caracteres")
})

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerResolver)
  });

  const navigate = useNavigate()

  const onSubmit = async (data) => {

    const { email, password, username } = data

    try {
      await registerRequest({ email, password, username })
      navigate("/profile")
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4 text-center">Registro</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Username */}
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className={`form-control ${errors.username ? "is-invalid" : ""}`}
                {...register("username", { required: "El username es requerido" })}
              />
              {errors.username && (
                <div className="invalid-feedback">{errors.username.message}</div>
              )}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                {...register("email", { required: "El email es requerido" })}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                {...register("password", { required: "El password es requerido" })}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password.message}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Registrarse
            </button>
          </form>
          <p className="mt-3">Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link></p>
        </div>
      </div>
    </div>
  );
};


