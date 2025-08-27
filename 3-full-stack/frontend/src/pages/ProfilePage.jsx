import { useEffect, useState } from "react"
import { logoutRequest, profileRequest } from "../api/auth"
import { useNavigate } from "react-router-dom"

export const ProfilePage = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const checkProfile = async () => {
      try {
        const res = await profileRequest()
        setUser(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    checkProfile()
  }, [])

  const navigate = useNavigate()

  const handleLogout = async () => {
    await logoutRequest()
    navigate("/login")
  }

  return (
    <div>
      <div>Perfil</div>
      {user ? (
        <div>
          <p>Nombre: {user.username}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <p>Cargando perfil...</p>
      )}
    </div>
  )
}
