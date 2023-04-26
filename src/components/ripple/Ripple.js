import React, { useState, useRef, useEffect } from 'react';
import styles from '../../scss/main.scss';

export function Ripple(props){

  
  const rippleRef = useRef(null);
  const [small, setSmall] = useState(0);

  useEffect(() => { 
     // console.log(rippleRef);
     if (rippleRef.current.classList.contains('button-ripple')) {
      rippleRef.current.classList.remove('button-ripple');
     }
     if (!rippleRef.current.classList.contains('button-ripple')) {
      rippleRef.current.classList.add('button-ripple');
     }
   });
// className={props.className}
  return (<span style={props.styles.style}
    ref={rippleRef}></span>);
}