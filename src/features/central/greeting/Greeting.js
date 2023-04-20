import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../../components/button/Button';
import styles from '../../../scss/main.scss';

export function Greeting() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0; {styles.home__container}

  return (
    <div>
      <div className="greeting__container">
         <div className="greeting__legend-one">Hello, friend</div>
         <div className="greeting__legend-big">
            <div className="greeting__legend-big-yellow">Welcome to the </div>
            <div className="greeting__legend-big-white">Couzy Forum</div>
            </div>
         <div className="greeting__legend-medium">
            <div className="greeting__legend-medium-white">This is </div>
            <div className="greeting__legend-medium-yellow">the couziest place </div>
            <div className="greeting__legend-medium-white">to talk</div>
         </div>
         <Button />
      </div>
    </div>
  );
}