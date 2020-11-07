import React, { Component } from 'react';

import HelloBlock from './components/HelloBlock';
import WeatherBlock from './components/WeatherBlock';
import ActionBlock from './components/ActionBlock';
import WeekBlock from './components/WeekBlock';
import PowerBlock from './components/PowetBlock';
import ToDoList from './components/ToDoListBlock'

import './style.scss';

export default class index extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="dashboard">
        <div className="outside">
          <div className='left'>
            <HelloBlock />
            <WeatherBlock />
            <ActionBlock />
          </div>
          <div className="space"></div>
          <div className='right'>
            <WeekBlock />
            <PowerBlock />
            <ToDoList />
          </div>
        </div>
      </div>
    )
  }
}
