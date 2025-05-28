import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginStatus } from '../../../App'

const AdminLogin = () => {
  const [login, setLogin] = useContext(loginStatus)
  const [details, setDetails] = useState ({ email:"", password:""})
  const navigate = useNavigate()
  const changeDetails = (e) =>{
    setDetails({...details,[e.target.name]: e.target.value})
  }
  const submitHandler = (e)=>{
    e.preventDefault() 
    console.log(details);
    const {email,password} = details
    if( email === 'admin@hk.com' && password === "admin123"){
      alert('Login Successfull');
      navigate('/dashboard')
      setLogin(true)
    } 
    else{
      alert('Invalid Credentials')
    }
  }
  return (
    <div className=' container p-5'>
      <div className=' col-lg-6 mx-auto shadow p-5'>
        <h2 className=' mb-3 text-center'> Admin Login</h2>
        <form onSubmit={submitHandler}>
          <input type="email" name='email' onChange={changeDetails} className=' form-control mb-3' placeholder='Email Address'/>
          <input type="password" name='password' onChange={changeDetails} className=' form-control mb-3' placeholder='Password'/>
          <input type="submit" value={'Access Dashboard'} className=' form-control mb-3 text-bg-primary'/>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
