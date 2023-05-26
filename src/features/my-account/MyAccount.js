import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from '../../components/button/Button';
// import { useSelector, useDispatch } from 'react-redux';
import styles from '../../scss/main.scss';
import MyAccountSlice, {selectCanGoHome,selectLocation,setCanGoHome} from './MyAccountSlice';
import {useDispatch, useSelector} from 'react-redux';

export function MyAccount(props) {
  const canGoToHome=useSelector(selectCanGoHome)
  const dispatchAccount=useDispatch()
  const location=useSelector(selectLocation)
  const navigate = useNavigate();
  useEffect(() => {
    if (canGoToHome) {
      navigate('/');
    }
  });

  const goToHome = () => { dispatchAccount(setCanGoHome(!canGoToHome)); }

  return (
    <div>
      <div className="my-account__container">
        <div className="my-account__content">
        <h1>My personal room.</h1>
         <h1>Hello.Your ID is</h1>
		  <div>
            <Link onClick={goToHome}>
            Home</Link>
		  </div>
        </div>
        
      </div>
    </div>
  );
}