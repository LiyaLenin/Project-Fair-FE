import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import profileimg from '../assets/Images/profileimg.jpg'


function Profile() {
  const [open, setOpen] = useState(false);

  return (

    <>
      <div className="d-flex rounded p-2 justify-content-between">
        <h2>Profile</h2>
        <button onClick={() => setOpen(!open)} className='btn btn-outline-warning'> <i class="fa-solid fa-chevron-down"></i></button>
      </div>
      <Collapse in={open}>
        <div className='row shadow p-5 justify-content-center mt-3' id="example-collapse-text">
          <label className='text-center'>

            <input style={{ display: 'none' }} type="file" />
            <img className='rounded-circle ' width={'200px'} height={'200px'} src={profileimg} alt="" />
          </label>
          <div className='mt-3'>
            <input className='form-control' type="text" placeholder='Enter your Github Url' />

          </div>
          <div className='mt-3'>
            <input className='form-control mt-3' type="text" placeholder='Enter your LinkedIn Url' />
          </div>
          <button className='btn btn-warning mt-3'> Update</button>

        </div>
      </Collapse>
    </>
  )
}

export default Profile