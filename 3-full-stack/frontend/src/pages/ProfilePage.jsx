import { useAuth } from "../context/AuthContext"

export const ProfilePage = () => {

  const { user, logout } = useAuth()

  return (
    <div>
      <div>Perfil</div>
      {user ? (
        <div>
          <p>Nombre: {user.username}</p>
          <p>Email: {user.email}</p>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      ) : (
        <p>Cargando perfil...</p>
      )}
    </div>
  )
}
