import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../../../components/button/Button';
import styles from '../../../../scss/main.scss';

export function Greeting() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');
  const [canGoToMyAccount, setCanGoToMyAccount] = useState(false);

  // const incrementValue = Number(incrementAmount) || 0; {styles.home__container}
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (canGoToMyAccount) {
      navigate('my-account', {state: {id: 2, name: 'Bob'}});
    }
  });

  const handleLinkClick = () => { setCanGoToMyAccount(!canGoToMyAccount); }

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
         <Button legend="Join" width="150" height="50" fontSize="32" />
         <div>
           <Link onClick={handleLinkClick}>My Account</Link>
         </div>
         
         { location.state ? <h1>We got message from My Account. Your ID is {location.state.id} now.
         And Your name is set to {location.state.name}.</h1> : '' }
      </div>
    </div>
  );
}