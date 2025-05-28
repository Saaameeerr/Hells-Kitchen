import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from './Hero'
import Testimonials from './Testimonials'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
import NoPage from './NoPage'
import AdminLogin from './Admin/AdminLogin'
import Dashboard from './Admin/Dashboard'
import AddMenu from './Admin/AddMenu'
import ViewMenu from './Admin/ViewMenu'
import ViewBookings from './Admin/ViewBookings'
import AddService from './Admin/AddService'
import ViewServices from './Admin/ViewServices'
import Welcome from './Admin/Welcome'
import MenuDetails from './MenuDetails'

const Routing = () => {
  return (
    <Routes>
      <Route path='/' Component={Hero}/>
      <Route path='/testimonials' Component={Testimonials}/>
      <Route path='/menu' Component={Menu}/>
      <Route path='/menuDetails/:id' Component={MenuDetails}/>
      <Route path='/about' Component={About}/>
      <Route path ="/contact" Component={Contact}/>
      <Route path='/admin' Component={AdminLogin}/>
      <Route path='/dashboard' Component={Dashboard}>
      <Route path='' Component={Welcome}/>
      <Route path='addMenu' Component={AddMenu}/>
      <Route path='viewMenu' Component={ViewMenu}/>
      <Route path='viewBookings' Component={ViewBookings}/>
      <Route path='addService' Component={AddService}/>
      <Route path='viewServices' Component={ViewServices}/>
      </Route>
      <Route path ="*" Component={NoPage}/>
    </Routes>
  )
}

export default Routing
