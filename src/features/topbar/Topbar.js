import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../components/button/Button';
import styles from '../../scss/main.scss';

export function Topbar() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0; {styles.home__container}
  return (
      <div className="topbar__container">
        <div className="topbar__row--first">
          <div className="topbar__logo-main"></div>
          <div className="topbar__row--first-right">
            <h1 className="topbar__sign-in-wrapper">Sign in element</h1>
            <Button legend="Sign up" width="150" height="40" fontSize="25"/>
          </div>
        </div>
        <div className="topbar__row--second">
          <div className="topbar__row--second--menu">
            <h3 className="topbar__menu--item">Hello1</h3>
            <h3 className="topbar__menu--item">Hello2</h3>
            <h3 className="topbar__menu--item">Hello3</h3>
          </div>
          <div className="topbar__row--second--search">
              <input type="text" />
          </div>
        </div>
        <div className="topbar__row--third">
        </div>
      </div>
  );
}