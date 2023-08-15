import React, { useState } from 'react';
import { Ripple } from '../ripple/Ripple';

export function Button(props) {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  const [ripple, setRipple] = useState([0]);
  // const ripple = [0];

  // const incrementValue = Number(incrementAmount) || 0; {styles.home__container}

  const createRipple = (e) => {
    e.preventDefault();
    if (props.disabled) {
      return;
    }
    // console.log('The link was clicked.');

    const button = e.currentTarget;
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const oldRipple = button.getElementsByClassName('button-ripple')[0];

    if (oldRipple) {

    }

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

  const makeButtonClass = () => {
    return `button__container ${props.disabled ? 'button__disabled' : ''}`;
  }

  const makeButtonLegendClass = () => {
    return `button__legend ${props.disabled ? 'button__disabled' : ''}`;
  }

  return (
    <div>
      <div className={makeButtonClass()} style={{ width: props.width + 'px', height: props.height + 'px' }} onClick={props.handleClick}>
        <div className={makeButtonLegendClass()} style={{ fontSize: props.fontSize + 'px' }}>{props.legend}</div>

        {ripple.map((value, index) => <Ripple key={"ripple" + index} styles={value}
          className="button-ripple" />)}
      </div>
    </div>
  );
}