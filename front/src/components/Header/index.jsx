import { useNavigate } from 'react-router-dom'
import './style.css'

function Header() {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        return navigate('/')
    }

    return (
        <>
          Batata3
          <button
            onClick={handleLogout}
          >Sair</button>
        </>
    )
}

export default Header