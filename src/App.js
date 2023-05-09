import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import logo from './logo.svg';
import { Home } from './features/home/Home';
import { Main } from './features/main/Main';
import { Page404 } from './components/page404/Page404';
import { MyAccount } from './features/my-account/MyAccount';
import './App.css';
import './App.scss';

function App() {
  return (
  	<BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Main />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// kubectl port-forward -n my-namespace deployment/my-app-name 6479:8084

