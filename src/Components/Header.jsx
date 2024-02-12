import React, { useContext } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthenticationContext } from '../Context API/TokenAuth'
function Header({ insideDashboard }) {
  const{isAuthorised,setIsAuthorised}=useContext(tokenAuthenticationContext)
  const navigate = useNavigate()
  const handleLogout = () => {

    sessionStorage.removeItem("token")
    sessionStorage.removeItem("username")
    setIsAuthorised(false)
    navigate('/')
  }
  return (
    <>
      <Navbar expand="lg" style={{ background: 'greenyellow' }}>
        <Container>
          <Navbar.Brand >
            <Link to={'/'} style={{ textDecoration: 'none' }} >   <h1 style={{ fontSize: '30px' }} className='fw-bolder text-dark'><i style={{ height: '20px' }} class="fa-solid fa-paperclip"></i>Project Fair</h1> </Link> </Navbar.Brand>
          {
            insideDashboard &&
            <div className='ms-auto'>
              <button onClick={handleLogout} className='btn '> <i style={{ height: '20px' }} class="fa-solid fa-gear"></i>Logout</button>
            </div>
          }



        </Container>
      </Navbar>

    </>
  )
}

export default Header