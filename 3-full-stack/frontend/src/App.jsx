import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { RegisterPage } from "./pages/RegisterPage"
import { LoginPage } from "./pages/LoginPage"
import { ProfilePage } from "./pages/ProfilePage"
import { PrivateRoute } from "./PrivateRoute"
import { AuthProvider } from "./context/AuthContext"
import { Navbar } from "./components/NavBar"


export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Ruta privada */}

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
