import { useState } from 'react';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';



function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <Card style={{ width: '25rem' }} className='shadow btn mb-5' onClick={handleShow}>
        <Card.Img width={'100%'} variant="top" src="https://mobirise.com/assets52/images/blog.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>

        </Card.Body>
      </Card>
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row >
            <Col md={6}>
              <img className='img-fluid' style={{ height: '200px' }} src="https://mobirise.com/assets52/images/blog.jpg" alt="" />
            </Col>
            <Col md={6}>
              <h2 className='fw-bolder text-dark'>Project Title</h2>
              <p>Project Overview : <span className='fw-bolder' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi, ullam aperiam tenetur nihil cumque necessitatibus. Odit, ea reprehenderit magni eveniet et ipsum officia quo voluptatum illo commodi eaque assumenda.</span></p>
              <p>Language Used: <span className='fw-bolder text-danger'>HTML,JS,CSS</span></p>
            </Col>
          </Row>
          <div className='mt-3'>
            <a href="https://github.com/LiyaLenin/JSON-server-Project-MediaPLayer.git" target='_blank' className='btn me-3'><i style={{ height: '40px' }} class="fa-brands fa-github fa-2x"></i>
            </a>
            <a href="https://json-server-project-media-p-layer.vercel.app/" target='_blank' className='btn me-3'><i style={{ height: '40px' }} class="fa-solid fa-link fa-2x"></i>
            </a>

          </div>

        </Modal.Body>

      </Modal>


    </>
  )
}

export default ProjectCard