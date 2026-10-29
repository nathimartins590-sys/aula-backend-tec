import jwtDecode from 'jwt-decode'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const token = localStorage.getItem('token')
    if(!token) {
        return <Navigate to='/' />
    }

    const decode = jwtDecode(token)
    const currentTime = Date.now() /1000;

    if(decode.exp > currentTime) {
        return <Outlet />
    }

    return <Navigate to='/' />
}

export default PrivateRoute