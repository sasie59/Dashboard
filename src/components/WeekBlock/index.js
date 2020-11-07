import React from 'react';

import './style.scss';
import Date from './Date';
export default function WeekBlock () {
    return (
      <div className="WeekBlock">
        <Date name='Sun' number='8' />
        <Date name='Mon' number='9' />
        <Date name='Tue' number='10' />
        <Date name='Wed' number='11' />
        <Date name='The' number='12' />
        <Date name='Fri' number='13' />
        <Date name='Sat' number='14' />
      </div>
    )
}
