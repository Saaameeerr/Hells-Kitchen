import axios from 'axios'
import React, {useState} from 'react'

const AddMenu = () => {
  const [item, setItem] = useState({name:"",description:"",category:"",price:""})
  const changeItem = (e)=>{
    setItem({...item,[e.target.name]:e.target.value })
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(item);
    axios.post('http://localhost:5000/menu',item)
    .then(()=>{
      alert('Item added')
      // setItem({name:"",description:"",category:"",price:""})
    })
    .catch((err)=>console.log(err))
    
  }
  return (
    <div className=' container p-5'>
      <div className=' col-lg-6 shadow p-5 mx-auto'>
        <h2 className=' mb-3'>Add New Item to Menu</h2>
        <form onSubmit={submitHandler}>
          <input type="text" value={item.name} onChange={changeItem} name="name" placeholder='Item Name' className=' form-control mb-2' id="" />
          <input type="text" value={item.description} onChange={changeItem} name="description" placeholder='Item Description' className=' form-control mb-2'  id="" />
          <input type="text" value={item.category} onChange={changeItem} name="category" placeholder='Category' className=' form-control mb-2'  id="" />
          <input type="text" value={item.price} onChange={changeItem} name="price" placeholder='Price' className=' form-control mb-2'  id="" />
          <input type="submit" className=' form-control bg-success text-white' />
        </form>
      </div>
    </div>
  )
}

export default AddMenu
