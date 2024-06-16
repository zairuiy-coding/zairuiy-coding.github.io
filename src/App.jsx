import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <>
      <Aside />
      <div className="main-content">
        <Navbar />
        <ThemeSwitcher />
        <section style={{ scrollBehavior: "smooth" }}>
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default App;
