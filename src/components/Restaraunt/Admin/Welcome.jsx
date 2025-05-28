import React from 'react'
import axios from 'axios'
import useCallApi from './CallApi'

const Welcome = () => {
  const services = useCallApi(`http://localhost:5000/restaurantServices`)
  const bookings = useCallApi(`http://localhost:5000/bookings`)
  const menu = useCallApi(`http://localhost:5000/menu`)
  return (
    <div className=' h-100 text-center p-5'>
      <h1>Welcome to Admin Dashboard</h1>
      <div className=' row'>
        <div className=' col-lg-4'>
          <div className=' card'>
            <div className=' card-body'>
              <h1 className='card-title'>{menu.length}+</h1>
            <p>Menu</p>
            </div>
          </div>
        </div>
         <div className=' col-lg-4'>
          <div className=' card'>
            <div className=' card-body'>
              <h1 className='card-title'>{bookings.length}+</h1>
            <p>Bookings</p>
            </div>
          </div>
        </div>
         <div className=' col-lg-4'>
          <div className=' card'>
            <div className=' card-body'>
              <h1 className='card-title'>{services.length}+</h1>
           <p>Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
