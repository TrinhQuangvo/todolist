import React, { Component } from 'react';
import './App.css';
import TodoInput from './components/Todoinput'
import TodoList from './components/TodoList'

class App extends Component {
  state = {
    items:[],
    id:0,
    title:'',
    editItem:false
  }
  handleChange = e =>{
    this.setState({
      item:e.target.value
    })
  }
  handleSubmit = e =>{
    e.preventDefault();
    const newItem = {id:this.state.id,title:this.state.item}
    const updatedItems = [...this.state.items,newItem];
    //console.log(newItem);
    this.setState({
      items: updatedItems,item:'',
      id: Math.random(),editItem:false
    })
  }
  clearList = ()=>{
    this.setState({
      items:[]
    })
  }
  handleDelete = id =>{
    const filtedItems = this.state.items.filter(item =>item.id !== id)
    this.setState({
      items:filtedItems
    })
  }
  handleEdit = id =>{
    console.log(id);
    const filtedItems = this.state.items.filter(item =>item.id !== id)
    const selectedItem = this.state.items.find(item=>item.id === id);
		console.log("TCL: App -> selectedItem", selectedItem)
    this.setState({
      items:filtedItems,
      item:selectedItem.title,
      editItem:true,
      id:id
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h1 className="text-capitalize text-center">This is Main App</h1>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
            <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;