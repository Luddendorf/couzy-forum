import React, { useState, createElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Ripple } from '../ripple/Ripple';
import styles from '../../scss/main.scss';

export function Button() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  const [ripple, setRipple] = useState([0]);
  // const ripple = [0];

  // const incrementValue = Number(incrementAmount) || 0; {styles.home__container}

  const createRipple = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
    console.log(ripple);


    const button = e.currentTarget;

    const oldRipple = button.getElementsByClassName('button-ripple')[0];

    if (oldRipple) {
      oldRipple.remove();
    }

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    setRipple([{
      key: 'rippling-circle',
      style: {
        width: `${diameter}px`,
        height: `${diameter}px`,
        left: `${e.clientX - (button.offsetLeft + radius)}px`,
        top: `${e.clientY - (button.offsetTop + radius)}px`
      },
      className: 'button-ripple'
    }]);

    // const circle = React.createElement('div', {
    //   key: 'rippling-circle',
    //   style: `width: ${diameter}px; height: ${diameter}px; left: ${e.clientX - (button.offsetLeft + radius)}px; top: ${e.clientY - (button.offsetTop + radius)}px;`,
    //   className: 'button-ripple'
    // });

    // console.log(circle);

    
    // circle.style.width = circle.style.height = `${diameter}px`;
    // circle.style.left = `${e.clientX - (button.offsetLeft + radius)}px`;
    // circle.style.top = `${e.clientY - (button.offsetTop + radius)}px`;
    // circle.classList.add('button-ripple');

// <Ripple key={"ripple" + index} obj={value}/>

   //  button.appendChild(circle);
  }

  return (
    <div>
      <div className="button__container"
       onClick={createRipple}>
        <div className="button__legend">Join</div>

        {ripple.map((value, index) => <Ripple key={"ripple" + index} styles={value}
            className="button-ripple"/>)}
      </div>
      
    </div>
  );
}