import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const {items,clearList,handleDelete,handleEdit} = this.props
    return (
      <div>
        <ul className="list-group">
          <h3 className='text-capitalize text-center'>Todo list</h3>
          {
            items.map(item=>{
              return <TodoItem key={item.id} title={item.title} handleDelete={()=> handleDelete(item.id)} handleEdit={()=>handleEdit(item.id)} />
            })
          }
          <button className='btn btn-danger btn-block text-capitalize mt-5' onClick={clearList}>Clear All</button>
        </ul>
      </div>
    )
  }
}