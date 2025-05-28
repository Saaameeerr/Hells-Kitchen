import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MenuDetails = () => {
  const { id } = useParams()
  const [menuItem, setItem] = useState({})
  useEffect(() => {
    fetch(`http://localhost:5000/menu/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
  })
  return (
    <div className=' container p-5'>
      <h1>{menuItem.name}</h1>
      <p>{menuItem.description}</p>
      <button className='btn btn-primary'> get it for Rs{menuItem.price}</button>
    </div>
  )
}

export default MenuDetails
