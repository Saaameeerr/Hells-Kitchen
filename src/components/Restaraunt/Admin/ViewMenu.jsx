import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewMenu = () => {
  const [menu, setMenu] = useState([])
  const [oneItem, setOneItem] = useState({ name: "", description: "", category: "", price: "" })

  useEffect(() => {
    axios.get('  http://localhost:5000/menu')
      .then(response => setMenu(response.data))
      .catch(error => console.log(error));
  }, [])

  const deleteItem = (iid) => {
    axios.delete(`  http://localhost:5000/menu/${iid}`)
      .then(() => {
        alert('Item Deleted');
        
      })
      .catch((error) => console.log(error));
  }

  const editItem = (iid) => {
    axios.get(`http://localhost:5000/menu/${iid}`)
      .then((response) => setOneItem(response.data))
      .catch((error) => console.error('Edit fetch error:', error));
  }

  const changeItem = (e) => {
    setOneItem({ ...oneItem, [e.target.name]: e.target.value });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.put(`  http://localhost:5000/menu/${oneItem.id}`, oneItem)
      .then(() => {
        alert('Item Updated');
      })
      .catch((error) => console.log(error));
  }


  return (
    <div className='container p-5'>
      <h2>Menu : {menu.length}</h2>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>
                <button
                  className='btn btn-danger me-3'
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </button>
                <button
                  className='btn btn-primary'
                  onClick={() => editItem(item.id)}
                  data-bs-toggle="modal"
                  data-bs-target="#update"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <div className='modal fade' id='update'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5>Update Menu Item</h5>
            </div>
            <div className='modal-body'>
              <form onSubmit={submitHandler}>
                <input type="text" value={oneItem.name} onChange={changeItem} name="name" placeholder='Item Name' className='form-control mb-2' />
                <input type="text" value={oneItem.description} onChange={changeItem} name="description" placeholder='Item Description' className='form-control mb-2' />
                <input type="text" value={oneItem.category} onChange={changeItem} name="category" placeholder='Category' className='form-control mb-2' />
                <input type="text" value={oneItem.price} onChange={changeItem} name="price" placeholder='Price' className='form-control mb-2' />
                <input type="submit" className='form-control bg-success text-white' />
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ViewMenu
