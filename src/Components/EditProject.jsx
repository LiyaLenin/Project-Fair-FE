import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import projectImg from '../assets/Images/projectImg.jpg'
import { SERVER_URL } from '../Services/serverUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProjectAPI } from '../Services/allAPIs';
import context from 'react-bootstrap/esm/AccordionContext';
import { editProjectResponseContext } from '../Context API/ContextShare';

function EditProject({ project }) {

  const {editProjectResponse,seteditProjectRespose}=useContext(editProjectResponseContext)
  console.log(project);
  const [projectData, setProjectData] = useState({ id: project._id, title: project.title, languages: project.languages, overview: project.overview, github: project.github, website: project.website, projectImage: "" })
  const [preview, setPreview] = useState("")
  useEffect(() => {
    if (projectData.projectImage) {
      setPreview(URL.createObjectURL(projectData.projectImage))

    }
    else {
      setPreview("")
    }
  }, [projectData.projectImage])

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setProjectData({ id: project._id, title: project.title, languages: project.languages, overview: project.overview, github: project.github, website: project.website, projectImage: "" })
    setPreview("")
  }
  const handleShow = () => setShow(true);

  const handleUpdate =async () => {
    const {id, title, languages, overview, github, website, projectImage } = projectData
    if (!title || !overview || !languages || !github ||  !website) {
      toast.info("please fill the form completely")

    } else {
      //api call
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("languages", languages)
      reqBody.append("overview", overview)
      reqBody.append("github", github)
      reqBody.append("website", website)
      preview? reqBody.append("projectImage", projectImage):reqBody.append("projectImage",project.projectImage)
       //api call -reHeader
      const token = sessionStorage.getItem('token')
      console.log(token);
      if(token){
       
          const reqHeader = {
            "Content-Type":preview? "multipart/form-data":"application/json",
            "Authorization": `Bearer ${token}`

          }
          try{
            const result=await editProjectAPI(id,reqBody,reqHeader)
            console.log(result);
            if(result.status===200){
              toast.warning(`project"${result.data.title}" updated succcessfully...`)
              handleClose(
                seteditProjectRespose(result.data)
              )
            }else{
              toast.danger(result.response.data)
            }
          }catch(err){
          console.log(err);
          }
        }
      }
    }
  


  return (
    <>
      <button onClick={handleShow} className='btn'><i className="fa-solid fa-pen-to-square fa-2x "></i></button>
      <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="row">
            <div className="col-6">
              <label className='text-center'>

                <input style={{ display: 'none' }} type="file" onChange={e => setProjectData({ ...projectData, projectImage: e.target.files[0] })} />
                <img style={{ height: '300px' }} className='w-100' src={preview ? preview : `${SERVER_URL}/uploads/${project.projectImage}`} alt="upload project image" />
              </label>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input onChange={e => setProjectData({ ...projectData, title: e.target.value })} type="text" className='form-control' placeholder='Project Title' value={projectData.title} />
              </div>
              <div className="mb-3">
                <input onChange={e => setProjectData({ ...projectData, languages: e.target.value })} type="text" className='form-control' placeholder='Language Used' value={projectData.languages} />
              </div>
              <div className="mb-3">
                <input onChange={e => setProjectData({ ...projectData, github: e.target.value })} type="text" className='form-control' placeholder='Project Github link' value={projectData.github} />
              </div>
              <div className="mb-3">
                <input onChange={e => setProjectData({ ...projectData, website: e.target.value })} type="text" className='form-control' placeholder='Project Website link' value={projectData.website} />
              </div>
              <div className="mb-3">
                <input onChange={e => setProjectData({ ...projectData, overview: e.target.value })} type="text" className='form-control' placeholder='Project Overview' value={projectData.overview} />
              </div>

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpdate} variant="danger">update</Button>
        </Modal.Footer>
      </Modal>
    </>)
}

export default EditProject