import React from 'react'
import AddProject from '../Components/AddProject'
import EditProject from '../Components/EditProject'

function MyProject() {
  return (
    <div className='card shadow p-3' >
      <div className="d-flex justify-content-between">
        <h3>My Projects</h3>
        <div> <AddProject /> </div>
      </div>
      <div className="mt-4">
        <div className="border rounded d-flex justify-content-between align-items-center mb-3 p-2 text-danger">
          <h5>Project Title</h5>
          <div className="d-flex icons align-items-center">
            <EditProject />
            <a target='-blank' className='btn' href="https://github.com/LiyaLenin/CounterApp.git">  <i style={{ height: '30px' }} class="fa-brands fa-github fa-2x"></i> 
            </a>
            <button className='btn'>  <i style={{ height: '30px' }} class="fa-solid fa-trash fa-2x"></i> </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProject