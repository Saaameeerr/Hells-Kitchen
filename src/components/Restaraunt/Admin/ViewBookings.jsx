import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewBookings = () => {
  const [booking, setBooking] = useState([])
  const [detail, setDetail] = useState({ name:"",date:"",mobile:"",email:"",})

  useEffect(()=>{
    axios.get(`http://localhost:5000/bookings`)
    .then(res => setBooking(res.data))
    .catch(err => console.log(err)
    )
  },[])

  const cancelBooking = (gid) =>{
    axios.delete(`http://localhost:5000/bookings/${gid}`)
    .then(() =>{
      alert('Booking Canceled')
    })
    .catch(err => console.log(err))
  }
  const editBooking = (gid) =>{
    axios.get(`http://localhost:5000/bookings/${gid}`)
    .then((res) => setDetail(res.data))
    .catch ((err) => console.log(err)
    )
  }

  const changeDetail = (e) =>{
    setDetail({...detail, [e.target.name]: e.target.value})
  }

  const submitHandler = (e) =>{
    e.preventDefault()
    axios.put(`http://localhost:5000/bookings/${detail.id}`, detail)
    .then(()=>{
      alert('Booking Updated')
    })
    .catch((err) => console.log(err)
    )
  }

   return (
    <div className=' container p-5'>
      <h2>Bookings : {booking.length}</h2>
      <table  className=' table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Mobile No</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {booking.map((guest) => (
            <tr key={guest.id}>
              <td>{guest.username}</td>
              <td>{guest.bookingDate}</td>
              <td>{guest.mobile}</td>
              <td>{guest.email}</td>
              <td>
                <button className='btn btn-danger me-3'
                onClick={()=> cancelBooking(guest.id)}
                >
                  Cancel
                </button>
                <button className=' btn btn-primary'
                onClick={()=> editBooking(guest.id)}
                data-bs-toggle="modal"
                data-bs-target="#update">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className=' modal fade' id='update'>
        <div className=' modal-dialog'>
          <div className=' modal-content'>
            <div className=' modal-header'>
              <h5>Update Booking Details</h5>
            </div>
            <div className=' modal-body'>
              <form action="" onSubmit={submitHandler}>
                <input type="text" value={detail.name} onChange={changeDetail} name='name' placeholder='Name' className='form-control mb-2'/>
                <input type="text" value={detail.date} onChange={changeDetail} name='date' placeholder='Date' className='form-control mb-2'/>
                <input type="text" value={detail.mobile} onChange={changeDetail} name='mobile' placeholder='Mobile No' className='form-control mb-2'/>
                <input type="text" value={detail.email} onChange={changeDetail} name='email' placeholder='Email' className='form-control mb-2'/>
                <input type="submit" className=' form-control bg-success text-white' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewBookings
