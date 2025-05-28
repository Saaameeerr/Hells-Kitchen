import React from 'react'
import aboutImg from './assets/About.jpeg'


const About = () => {
  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-md-6 shadow rounded-3'>
        <h2>About Us</h2>
        <div>
          At Hells Kitchen, we believe great food brings people together. Our menu is crafted with passion, using fresh, high-quality ingredients to deliver bold flavors and memorable meals. Whether you're joining us for a casual bite or a special occasion, our warm atmosphere and attentive service make every visit something to savor. Come hungry, leave happy.
        </div>
        </div>
        <div className='col-md-6'>
          <img src={aboutImg} alt="" className='container-fluid rounded-3' />
        </div>
      </div>
    </div>
  )
}

export default About
