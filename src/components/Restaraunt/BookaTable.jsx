import React, { Component } from 'react'
import axios from 'axios'

export default class BookaTable extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      mobile: "",
      email: "",
      bookingDate: ''
    }
  }
  // changeName = (e) =>{
  //   this.setState({
  //     username: e.target.value
  //   })
  // }
  // changeMobile = (e) =>{
  //   this.setState({
  //     mobile: e.target.value
  //   })
  // }
  changeData = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state);
    // const nameError = document.getElementById('nameError')
    // const mobileError = document.getElementById('mobileError')
    // const emailError = document.getElementById('emailError')
    axios.post(`http://localhost:5000/bookings`, this.state)
      .then(() => {
        alert('Enquiry Sent')
        this.setState({
          username: "",
          mobile: "",
          email: "",
          bookingDate:""
        })
      })
      .catch((err) => console.log(err))


    // const {username,mobile,email} = this.state

    // const alphaExp = /^[a-zA-Zs\s]+$/
    // const mobileExp = /^[0-9]{10}$/
    // const emailExp = /^[a-zA-Z0-9._%+-]+@$/
    // nameValidation
    //   if(username === ""){
    //     nameError.textContent ="Name is required"
    //   }
    //   else{
    //     if (username.match(alphaExp)) {
    //       nameError.textContent = ""
    //     }
    //     else{
    //       nameError.textContent = "Name should contain only alphabets"
    //     }
    //   }
    //   // mobileValidation
    //   if(mobile === ""){
    //     mobileError.textContent = "Number is required"
    //   }
    //   else{
    //     if(mobile.match(mobileExp)){
    //       mobileError.textContent = ""
    //   }
    //   else{
    //     mobileError.textContent = "Number should be in number"
    //   }
    // }
    // // emailValidation
    // if(email === ""){
    //   emailError.textContent = "Email is required"
    // }
    // else{
    //   if(email.match(emailExp)){
    //     emailError.textContent = ""
    //   }
    //   else{
    //     emailError.textContent = "Email should be in email format"
    //   }
    // }
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" value={this.state.username} onChange={this.changeData} name='username' className=' form-control mb-3' placeholder='Enter Name' />
        <p id='nameError'></p>
        <input type="tel" value={this.state.mobile} onChange={this.changeData} name='mobile' className=' form-control mb-3' placeholder='Enter Phone Number' />
        <p id='mobileError'></p>
        <input type="email" value={this.state.email} onChange={this.changeData} name='email' className=' form-control mb-3' placeholder='Enter Email' />
        <p id='emailError'></p>
        <input type="datetime-local" value={this.state.bookingDate} onChange={this.changeData} name="bookingDate" id="" className="form-control mb-3" placeholder="Select Date" />
        <input type="submit" className=' form-control mb-3' />
      </form>
    )
  }

}

