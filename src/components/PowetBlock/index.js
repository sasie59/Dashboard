import React, { Component } from 'react';

import './style.scss';
import Power from './Power';

const percentInitial = [
  50, 50, 50, 50, 50,
];

export default class PowerBlock extends Component {
  constructor(){
    super()
    this.state = {
      powerList: [...percentInitial],
    }
  }

  handleRand = () => {
    this.setState({
      powerList: [...Array(5).keys()].map(() => Math.random() * 100)
    });
  }

  handleReset = () => {
    this.setState({
      powerList: [...percentInitial]
    });
  }

  render() {
    return (
      <div className="PowerBlock">
        {this.state.powerList.map((power, index) =>
          <Power
            lv={power}
            key={index}
            number={index + 1}
          />
        )}

        <div className='ctrl'>
          <div className='ran' onClick={this.handleRand}>Random</div>
          <div className='space'></div>
          <div className='res' onClick={this.handleReset}>Reset</div>
        </div>
      </div>
    )
  }
}
