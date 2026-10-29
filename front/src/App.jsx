import './App.css'
import Login from './pages/login'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route} from 'react-router-dom'
import User from './pages/user'
import PrivateRoute from './routes/PrivateRoute'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Login />} />
    <Route element={<PrivateRoute />}>
      <Route path='/users' element={<User />} />
    </Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App
