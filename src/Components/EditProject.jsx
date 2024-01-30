import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import projectImg from '../assets/Images/projectImg.jpg'


function EditProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

                <input style={{ display: 'none' }} type="file" />
                <img style={{ height: '300px' }} className='w-100' src={projectImg} alt="" />
              </label>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input type="text" className='form-control' placeholder='Project Title' />
              </div>
              <div className="mb-3">
                <input type="text" className='form-control' placeholder='Language Used' />
              </div>
              <div className="mb-3">
                <input type="text" className='form-control' placeholder='Project Github link' />
              </div>
              <div className="mb-3">
                <input type="text" className='form-control' placeholder='Project Website link' />
              </div>
              <div className="mb-3">
                <input type="text" className='form-control' placeholder='Project Overview' />
              </div>

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger">Add</Button>
        </Modal.Footer>
      </Modal>
    </>)
}

export default EditProject