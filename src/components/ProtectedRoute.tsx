import { useSelector } from "react-redux"
import { getAuthenticated, getAuthLoading } from "../redux/userSlice"
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => {
    const isLoading = useSelector(getAuthLoading)
    const isAuthenticated = useSelector(getAuthenticated)



    if (isLoading) return <h2>Loading...</h2>

    if (!isAuthenticated) return <Navigate to='/login' replace />

    return <Outlet />
}

export default ProtectedRoute