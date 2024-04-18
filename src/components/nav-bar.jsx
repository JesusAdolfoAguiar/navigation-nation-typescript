// import React, { useState } from 'react';
// import NavItem from './nav-item';

// const Navbar = () => {
//     const [isActive, setIsActive] = useState(false);
  
//     function toggleNav() {
//       setIsActive(!isActive);
//     }
  
//     return (
//       <>
//         <div id="menu-bars" className={`menu-bars ${isActive ? 'change' : ''}`} onClick={toggleNav}>
//           <div className="bar1"></div>
//           <div className="bar2"></div>
//           <div className="bar3"></div>
//         </div>
//         <div id="overlay" className={isActive ? 'overlay-active' : ''}>
//           <nav className="overlay-menu">
//             <NavItem id={1} direction1="left" direction2="right" />
//             <NavItem id={2} direction1="left" direction2="right" />
//             <NavItem id={3} direction1="left" direction2="right" />
//             <NavItem id={4} direction1="left" direction2="right" />
//             <NavItem id={5} direction1="left" direction2="right" />
//           </nav>
//         </div>
//       </>
//     );
// }

// export default Navbar;
  