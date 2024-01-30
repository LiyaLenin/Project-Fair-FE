
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Footer from './Components/Footer'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister />} />
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/*' element={<Navigate to={'/'} />}></Route>
       

      </Routes>
      <Footer />
    </>
  )
}

export default App
