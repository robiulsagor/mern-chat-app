import { useSelector } from "react-redux"
import { getAuthenticated, getAuthLoading } from "../redux/userSlice"
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const isAuthenticated = useSelector(getAuthenticated)
    console.log(isAuthenticated);
    const isLoading = useSelector(getAuthLoading)

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (!isAuthenticated && window.location.pathname !== '/login' && window.location.pathname !== '/register') {
        return <Navigate to='/login' replace />
    }

    return <Outlet />
}

export default ProtectedRoute