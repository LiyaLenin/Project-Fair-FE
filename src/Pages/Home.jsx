import React, { useEffect, useState } from 'react'
import landingImg from '../assets/Images/landingImg.jpg'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getHomeProjectAPI } from '../Services/allAPIs';


function Home() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [allProjects,setAllProjects]=useState([])

const getHomeProjects = async ()=>{
  const result = await getHomeProjectAPI()
  if(result.status===200){
    setAllProjects(result.data)
  }else{
    console.log(result);
  }
}




  useEffect(() => {
    getHomeProjects()
    if (sessionStorage.getItem("token")) {
      setIsLoggedIn(true)
    }
    else {
      setIsLoggedIn(false)
    }
  }, [])


  const handleProjectPage = () => {
    if (sessionStorage.getItem("token")) {
      navigate('/projects')
    }
    else {
      toast.warning("please login to explore your projects")
    }
  }
  return (
    <>
      {/*  landing part*/}

      <div style={{ width: '100%', height: "100vh", backgroundColor: 'greenyellow' }} className='rounded'>
        <div style={{ height: '100%' }} className='container'>
          <div style={{ height: '100%' }} className="row  align-items-center">
            <div className="col-5">
              <h1 style={{ fontSize: '65px' }} className='fw-bolder text-dark' ><i class="fa-solid fa-paperclip"></i> Project fair</h1>
              <p>One Stop Destination For All Software Development Projects. Where User Can add and manage their projects.
                As well as access all projects available in our website... What are you waiting For!!!</p>
              {isLoggedIn ? <Link className='btn btn-warning mt-3' to={'./dashboard'}> Manage your projects <i class="fa-solid fa-arrow-right ms-2"></i></Link> : <Link className='btn btn-warning' to={'./login'}> Starts to Explore <i class="fa-solid fa-arrow-right ms-2"></i></Link>
              }
            </div>
            <div className="col-2"></div>
            <div className="col-4">
              <img className='img-fluid' src={landingImg} alt="" />
            </div>
            <div className="col-1"></div>
          </div>

        </div>
      </div>
      {/*all projects*/}
      <div className='projects mt-5'>
        <h1 className='text-center mb-5'>Explore Our Projects</h1>
        <marquee behavior="" direction="">
          <div className="d-flex justify-content-between">
             { allProjects.length>0?allProjects.map((project,index)=>(
              <div key={index} className="me-5">
              <ProjectCard  project={project}/>
            </div>
             )):null }
          </div>
        </marquee>
        <div className="text-center">
          <button onClick={handleProjectPage} className='btn btn-link'>View more Projects</button>
        </div>
      </div>
      <ToastContainer autoClose={2000} theme='colored' />


    </>
  )
}

export default Home