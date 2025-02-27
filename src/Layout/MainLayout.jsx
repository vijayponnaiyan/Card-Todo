import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar  from '../Layout/Components/Navbar';
import Footer from '../Layout/Components/Footer';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className=' p-14' >
        <Navbar />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className='pt-16 '>
         <Footer/>
      </footer>
    </div>
  );
}
