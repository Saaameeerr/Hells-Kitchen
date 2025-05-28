import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { loginStatus } from '../../../App'
import AdminLogin from './AdminLogin'

const Dashboard = () => {
  const [login, setLogin] = useContext(loginStatus)
  if (login) {
    
  return (
    <section className=' container-fluid'>
      <div className=' row'>
        <aside className=' col-lg-3'>
          <Link to={`''`}>
          <h5>Admin Dashboard</h5>
          </Link>
          <Link to={`addMenu`}>
          <button>Add Menu</button>
          </Link>
          <Link to={`viewMenu`}>
          <button>View Menu</button>
          </Link>
          <Link to={`viewBookings`}>
          <button>View Bookings</button>
          </Link>
          <Link to={`addService`}>
          <button>Add Service</button>
          </Link>
          <Link to={`viewServices`}>
          <button>View Services</button>
          </Link>
        </aside>
        <div className=' col-lg-9'><Outlet/></div>
      </div>
    </section>
  )
}
else{
  return<AdminLogin/>
}
}

export default Dashboard
