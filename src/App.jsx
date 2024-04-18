import React, { useState, useEffect } from 'react';
import './App.css';


const App = () => {
  
  const [isActive, setIsActive] = useState(false);

  const NavItem = ({ id, toggleNav, label }) => (
    <li id={id} className={`slide-${isActive ? 'in' : 'out'}-${id.split('-')[1]}`} onClick={toggleNav}>
      <a href={`#${id}`}>{label}</a>
    </li>
  );

  const navItems = [
    {id: 'nav-1', label: 'HOME'}, 
    {id: 'nav-2', label: 'ABOUT'}, 
    {id: 'nav-3', label: 'SKILLS'}, 
    {id: 'nav-4', label: 'PROJECTS'}, 
    {id: 'nav-5', label: 'CONTACT'}
  ];

  const navAnimation = (direction1, direction2) => {
    navItems.forEach((nav, i) => {
      document.getElementById(nav.id).classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    });
  };

  const toggleNav = (event) => {
    event.preventDefault();
    setIsActive(prevState => !prevState);

  };

  useEffect(() => {
    if (isActive) {
      document.getElementById('overlay').classList.replace('overlay-slide-left', 'overlay-slide-right');
      navAnimation('out', 'in');
    } else {
      document.getElementById('overlay').classList.replace('overlay-slide-right', 'overlay-slide-left');
      navAnimation('in', 'out');
    }
  }, [isActive]);

  return (
    <div>
      {/* <!-- Menu Bars --> */}
      <div id="menu-bars" className={`menu-bars ${isActive ? 'change' : ''}`} onClick={toggleNav}>
        {/* Menu bars content */}
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div id="overlay" className={`overlay ${isActive ? 'overlay-active overlay-slide-right' : 'overlay-slide-left'}`}>
        <nav>
          <ul>
            {navItems.map((nav) => (
              <NavItem key={nav} id={nav.id} label={nav.label} toggleNav={toggleNav} isActive={isActive} />
            ))}
          </ul>
        </nav>
      </div>
      {/* <!-- Sections --> */}
      <section id="nav-1" className='home'><a href="https://jesus-aguiar.netlify.app/" target="_blank" rel="noreferrer">Jesús Aguiar</a></section>
      <section id="nav-2" className='about'><h1>Learn More About Me</h1></section>
      <section id="nav-3" className='skills'><h1>These Are My Strengths</h1></section>
      <section id="nav-4" className='projects'><h1>These Are My Results</h1></section>
      <section id="nav-5" className='contact'><h1>Available Anytime</h1></section>
    </div>
  );
};

export default App;
