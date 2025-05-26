import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import { useDispatch } from "react-redux";
import { logoutUser, setUser } from "./redux/userSlice";
import ForgotPassword from "./pages/ForgotPassword";
import UpdataProfile from "./pages/UpdateProfile";

import { ToastContainer } from 'react-toastify';
import PublicRoute from "./components/PublicRoute";
import axiosInstance from "./axiosInstance";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axiosInstance.get('/auth/verify-token', {
          withCredentials: true
        })
        if (res.data.success) {
          dispatch(setUser(res.data.user))
        }
      } catch (error) {
        console.log(error);
        dispatch(logoutUser())
      }
    }

    console.log("Checking auth...");


    checkAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="bg-[url(assets/bg-8.jpg)] min-h-screen bg-cover bg-no-repeat bg-center object-cover">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update-profile" element={<UpdataProfile />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App;