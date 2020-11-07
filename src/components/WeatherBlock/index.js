import React, { Component } from 'react';

import './style.scss';

import sun from './sun.jpg'

export default class WeatherBlock extends Component {
  constructor(){
    super();
    this.state = {
      low: 27,
      top: 36,
      percent: 10
    }
  }

  // field = 'low' or 'top'
  // num = 1 or -1
  handleChangeTemp = (field, num) => {
    this.setState({
      [field]: this.state[field] + num
    });
  }

  handleAdd = () => {
    this.setState({
      percent: (this.state.percent + 10) % 110
    });
  }
  render() {
    const { low, top, percent } = this.state;
    return (
      <div className="WeatherBlock">
        <div className='out'>
          <img className='sun' src={sun} alt="太陽"/>
        </div>
        <div className='county'>i-Lan</div>
        <div className='door'>
          <div className='temperature' >  
            <div onClick={this.handleChangeTemp.bind(this, 'low', -1)} id='low'>{low}°</div>
            <div onClick={this.handleChangeTemp.bind(this, 'top', 1)} id='top'>{top}°</div>
          </div>
          <div className="space"></div>
          <div className='rainChance' onClick={this.handleAdd}>{percent}%</div>
        </div>
      </div>
    )
  }
}
