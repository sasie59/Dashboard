import React, { Component } from 'react'

export default class Date extends Component {
  constructor(){
    super()
    this.state = {
      status : true
    }
  }

  handleClick = () => {
    this.setState({
      status: !this.state.status
    })
  }

  render(){
    const { status } = this.state;
    return (
      <div className={`date ${status ? 'selected' : ''}`} onClick={this.handleClick}>
        <h3 className='name'>{this.props.name}</h3>
        <h4 className='number'>{this.props.number}</h4>
        <div className="ball" />
      </div>
    )
  }
}
