import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  DropDown
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/fake-logo2.png')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/page1' className={((nav) => (nav.isActive ? "nav-active" : ""))}>
            page1
          </NavLink>
          <DropDown>
            page2
            <NavLink to='/page2.1' className={((nav) => (nav.isActive ? "nav-active" : ""))}>
              page2.1
            </NavLink>
            <NavLink to='/page2.2' className={((nav) => (nav.isActive ? "nav-active" : ""))}>
              page2.2
            </NavLink>
          </DropDown>
          <NavLink to='/page3' className={((nav) => (nav.isActive ? "nav-active" : ""))}>
            page3
          </NavLink>
          <NavLink to='/page4' className={((nav) => (nav.isActive ? "nav-active" : ""))}>
            page4
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>autre redirect</NavBtnLink>
        </NavBtn>

      </Nav>
    </>
  );
};

export default Navbar;
