import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/userSlice";
import { users } from "./data";
import ForgotPassword from "./components/ForgotPassword";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUser(users[0]))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="bg-[url(assets/bg-8.jpg)] min-h-screen bg-cover bg-no-repeat bg-center object-cover">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App;