import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Central } from '../central/Central';
import { Topbar } from '../topbar/Topbar';
import styles from '../../scss/main.scss';
import {BrowserRouter,Routes,Route,Link, useRoutes,NavLink, Navigate, useLocation} from 'react-router-dom'
import Background from '../elements_dz/Background';
import ElementNew from './ElementNew';
export function Home() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0; {styles.home__container}
  return (
    <div>
      <div>
        <BrowserRouter>
		
		<Routes>
		
		<Route path='/' element={<Topbar />} />
		<Route path='/main' element={<ElementNew /> }>
		<Route path=':color' element={<Background />} />
		<Route path='color' element={<Background />} />
		</Route>
		<Route path='*' element={<Navigate to='/main' />} />
		</Routes>
		<NavLink to='/main' state="7">Home</NavLink>
		</BrowserRouter>
      </div>
      
    </div>
  );
}