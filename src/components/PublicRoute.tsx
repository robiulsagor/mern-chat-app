import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { getAuthenticated, getAuthLoading } from '../redux/userSlice'

const PublicRoute = () => {
    console.log("PublicRoute rendered");

    const isAuthenticated = useSelector(getAuthenticated)
    const isLoading = useSelector(getAuthLoading)

    if (isLoading) return <h2>Loading...</h2>

    if (isAuthenticated) {
        return <Navigate to="/" replace />
    }

    return <Outlet />
}

export default PublicRoute
