import React, { Component } from 'react';

export default class Task extends Component {
  constructor(){
    super();
    this.state = {
      status: false,
      // none: true,
    }
  }
  handleClick = () => {
    this.setState({
      status: !this.state.status
    })
  }
  handleReomve = (e) => {
    this.setState({
      remove: !this.state.status
    })
  }

  render(){
    return (
      <div>
        <span className='name'>{this.props.name}</span>
        <span onClick={this.handleClick} className={this.state.status ? 'line' : ''}>{this.props.children}</span>
        <span className='del' id='del' onClick={this.handleReomve}>Delete</span>
      </div>
    )
  }
}
