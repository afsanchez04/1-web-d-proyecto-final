import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"  // usamos el contexto

export const Navbar = () => {
  const { user, logout } = useAuth() // obtenemos usuario y logout del contexto

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        {/* Logo o título */}
        <Link className="navbar-brand" to="/">MiApp</Link>

        <button className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            {/* Si el usuario está logueado */}
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">Perfil</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light ms-2" onClick={logout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              // Si NO está logueado
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Registro</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

