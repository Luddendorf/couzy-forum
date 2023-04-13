import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Greeting } from './greeting/Greeting';
import styles from '../../scss/main.scss';

export function Central() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0; {styles.home__container}

  return (
    <div>
      <div className="central__container">
        <div className="central__block-left">
          <Greeting />
        </div>
        <div className="central__block-right">
        <div className="central__picture"></div>
        </div>
      </div>
      
    </div>
  );
}