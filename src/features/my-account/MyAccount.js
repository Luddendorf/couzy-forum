import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from '../../components/button/Button';
// import { useSelector, useDispatch } from 'react-redux';
import styles from '../../scss/main.scss';

export function MyAccount(props) {
  const [canGoToHome, setCanGoToHome] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (canGoToHome) {
      navigate('/', {state: {id: 6, name: 'Benjamin'}});
    }
  });

  const goToHome = () => { setCanGoToHome(!canGoToHome); }

  return (
    <div>
      <div className="my-account__container">
        <div className="my-account__content">
        <h1>My personal room.</h1>
         { location.state ? <h1>Hello {location.state.name}.
           Your ID is {location.state.id}</h1> : '' }
		  <div>
            <Link onClick={goToHome}>
            Home</Link>
		  </div>
        </div>
        
      </div>
    </div>
  );
}