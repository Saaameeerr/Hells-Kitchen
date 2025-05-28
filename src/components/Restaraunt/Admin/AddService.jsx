import axios from 'axios'
import React, { useState } from 'react'

const AddService = () => {
  const [service, setService] = useState({service:"", description:"",roles:""})
  const changeService = (e) =>{
    setService({...service, [e.target.name]: e.target.value})
  }
  const submitHandler = (e) =>{
    e.preventDefault()
    console.log(service);
    axios.post(`http://localhost:5000/restaurantServices`,service)
    .then(()=>{
      alert('Service added')
    })
    .catch((err) => console.log(err)
    )
  }
  return (
    <div className=' container p-5'>
      <div className=' col-lg-6 shadow p-5 mx-auto'>
        <h2 className=' mb-3'>Add New Service</h2>
        <form onSubmit={submitHandler}>
          <input type="text" name="service" value={service.service} onChange={changeService} placeholder='Service' className=' form-control mb-2'/>
          <input type="text" name="description" value={service.description} onChange={changeService} placeholder='Description' className=' form-control mb-2'/>
          <input type="text" name="roles" value={service.roles} onChange={changeService} placeholder='Roles' className=' form-control mb-2'/>
          <input type="submit" className=' form-control bg-success text-white' />
        </form>
      </div>
    </div>
  )
}

export default AddService
