
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Footer from './Components/Footer'
import { useContext } from 'react'
import { tokenAuthenticationContext } from './Context API/TokenAuth'


function App() {
const {isAuthorised,setIsAuthorised}=useContext(tokenAuthenticationContext)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister />} />
        <Route path='/dashboard' element={isAuthorised?<Dashboard />:<Home />}></Route>
        <Route path='/projects' element={isAuthorised?<Projects />:<Home />}></Route>
        <Route path='/*' element={<Navigate to={'/'} />}></Route>
       

      </Routes>
      <Footer />
    </>
  )
}

export default App
