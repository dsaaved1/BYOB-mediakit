import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';


function BasePage() {

  return (
    <>
      <main>
        <div className="toggle"><i className="fa-solid fa-bars"></i></div>
        <Sidebar />
        <Outlet />
      </main>
    </>
  )
}

export default BasePage