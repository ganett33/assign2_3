import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  height: 60px;
  background: transparent;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  background: black;
  color: #fff;
  padding: 0rem 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
`;

const NavItems = styled.div``;

const NavbarLink = styled(Link)`
  background: black;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  padding: 1rem;
`;

const Header = () => {
  return (
    <Navbar>
      <Logo to='/'>Project-X</Logo>
      <NavItems>
        <NavbarLink to='/'>Home</NavbarLink>
        <NavbarLink to='/about'>SCP Foundation</NavbarLink>
        <NavbarLink to='/services'>Rest API</NavbarLink>
      </NavItems>
    </Navbar>
  );
};

export default Header;
