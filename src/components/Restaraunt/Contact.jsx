import React, { Component } from 'react'
import BookaTable from './BookaTable'

export default class Contact extends Component {
  render() {
    return (
      <div className=' container p-5'>
        <div className=' row'>
          <div className=' col-md-6 shadow rounded-3'>
            <BookaTable/>
          </div>
          <div className=' col-md-6'>
            <div className='shadow p-5 rounded-3'>
              <p><i className="bi bi-geo-alt"></i> Mehdipatnam , Hyderabad</p>
              <p><i className="bi bi-telephone-forward"></i> +917277155592</p>
              <p><i className="bi bi-envelope"></i> hellskitchen@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
