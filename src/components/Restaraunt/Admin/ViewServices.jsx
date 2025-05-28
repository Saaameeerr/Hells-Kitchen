import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewServices = () => {
  const [services, setServices] = useState([])
  const [service, setService] = useState({service:"", description:"", roles:""})

  useEffect(()=>{
    axios.get(' http://localhost:5000/restaurantServices')
    .then(res => setServices(res.data))
    .catch(err => console.log(err))
  },[])
  const deleteService = (sid)=>{
    axios.delete(`http://localhost:5000/restaurantServices/${sid}`)
    .then(()=>{
      alert('Service Deleted');
    })
    .catch((err) => console.log(err))
  }
  const editService = (sid)=>{
    axios.get(`http://localhost:5000/restaurantServices/${sid}`)
    .then((res) => setService(res.data))
    .catch((err) => console.log(err))
  }

  const changeService = (e) =>{
    setService({...service, [e.target.name]: e.target.value})
  }
  
  const submitHandler = (e) =>{
    e.preventDefault();
    axios.put(`http://localhost:5000/restaurantServices/${service.id}`,service)
    .then(() =>{
      alert('Service Updated')
    })
    .catch((err) => console.log(err));
  }


  return (
    <div className=' container p-5'>
      <h2>Services : {services.lenght}</h2>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Service</th>
            <th>Description</th>
            <th>Roles</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service)=>(
            <tr key={service.id}>
              <td>{service.service}</td>
              <td>{service.description}</td>
              <td>{service.roles}</td>
              <td>
                <button className=' btn btn-danger me-3'
                onClick={()=> deleteService}
                >
                  Delete
                  </button>
                  <button className=' btn btn-primary'
                  onClick={()=> editService(service.id)}
                  data-bs-toggle="modal"
                  data-bs-target="#update"
                  >
                    Edit
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='modal fade' id='update'>
        <div className=' modal-dialog'>
          <div className=' modal-content'>
            <div className=' modal-header'>
              <h5>Update Service</h5>
            </div>
            <div className=' modal-body'>
              <form onSubmit={submitHandler}>
                <input type="text" value={service.service} onChange={changeService} name='service' placeholder='Service' className=' form-control mb-2' />
                <input type="text" value={service.description} onChange={changeService} name='description' placeholder='Description' className=' form-control mb-2' />
                <input type="text" value={service.roles} onChange={changeService} name='roles' placeholder='Roles' className=' form-control mb-2' />
                <input type="submit" className='form-control bg-success text-white'/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewServices
