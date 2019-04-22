import React, { Component } from 'react'

export default class Todoinput extends Component {
  render() {
    const {item,handleChange,handleSubmit,editItem} = this.props
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <div className='input-group-text bg-success text-white'>
                input
              </div>
            </div>
            <input className="form-control" type='text' 
            placeholder='text something' value={item} onChange={handleChange}/>
          </div>
          <button type='submit' className={editItem ? 'btn btn-block btn-primary mt-3' : 'btn btn-block btn-success mt-3'}>
          {editItem ? 'Edit Item' : 'Add Item'}</button>
        </form>
      </div>
    )
  }
}
