import { createContext, useContext, useEffect, useState } from "react"
import { logoutRequest, profileRequest } from "../api/auth"

//Creación del contexto 
const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//Creación del provider

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkProfile = async () => {
      try {
        const res = await profileRequest()
        setUser(res.data)
      } catch (error) {
        setUser(null)
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    checkProfile()
  }, [])

  const logout = async () => {
    await logoutRequest()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
