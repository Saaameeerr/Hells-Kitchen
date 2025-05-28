import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Menu = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:5000/menu`)
      .then((res) =>{
        console.log(res.data)
         setData(res.data)})
      .catch((err) => console.log(err))
  })
  return (
    <div className=' container-fluid p-0'>
      <h2 className='menu p-5 text-center'></h2>
        <div className=' container'>
          <div className='row'>
            {
              data.map((item, index) => {
                return (
                  <div className=' col-md-6 col-lg-4 mb-3' key={index}>
                    <div className='card h-100'>
                      <div className='card-header'>{item.category}</div>
                      <div className=' card-body'>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <Link to={`/menuDetails/${item.id}`}>
                        <button className='btn btn-success'>Know more</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default Menu
