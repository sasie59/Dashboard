import React from 'react';

import './style.scss';
import img from './toggle.png'
export default function HelloBlack() {
  return (
    <div className='HelloBlock'>
      <div className='hello'>
        <h1>Hello ShihWei</h1>
        <h3>welcome to your Dashboard</h3>
      </div>
      <div className='toggle'>
        <img src={img} alt=""/>
      </div>
    </div>
  )
}
