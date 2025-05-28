import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(){
    super()
    this.state={
      count: 0
    }
  }
  add= ()=>{
    this.setState({
      count : this.state.count + 1
    })
  }
  sub =()=>{
    this.setState({
      count: this.state.count - 1
    })
  }
  mul =()=>{
    this.setState({
      count: this.state.count *2
    })
  }
  working =()=>{
      alert("working")
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.sub}>sub</button>
        <button onClick={this.mul}>mul</button>
        <button onClick={this.working}>working</button>
      </div>
    )
  }
}
