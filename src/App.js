import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import './App.css';
import './App.scss';
import { Page404 } from './components/page404/Page404';
import { Spinner } from './components/spinner/Spinner';
import { Birthday } from './features/auth/birthday/Birthday';
import { Main } from './features/main/Main';
import { MyAccount } from './features/my-account/MyAccount';

function App() {
  return (
    <Spinner>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Main />} />
            <Route path="my-account" element={<MyAccount />} />
            <Route path="enter-birthday" element={<Birthday />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Spinner>

  );
}

export default App;

// kubectl port-forward -n my-namespace deployment/my-app-name 6479:8084

