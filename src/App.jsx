import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import ThemeSwitcher from './components/ThemeSwitcher';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <>
      <ScrollProgress />
      <Aside />
      <div className="main-content">
        <ThemeSwitcher />
        <Navbar />
        <section style={{ scrollBehavior: "smooth" }}>
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default App;
