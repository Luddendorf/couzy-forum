import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Central } from '../central/Central';
import { Topbar } from '../topbar/Topbar';
import styles from '../../scss/main.scss';

export function Home() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0; {styles.home__container}

  return (
    <div>
      <div className="home__container">
        <Topbar />
        <Central />
      </div>
      
    </div>
  );
}