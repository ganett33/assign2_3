import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  height: 65px;
  background: transparent;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  background: black;
  color: #fff;
  padding: .2rem 1rem;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  font-style: italic;
`;

const NavItems = styled.div``;

const NavbarLink = styled(Link)`
  background: black;
  color: #fff;
  font-style: italic;
  font-weight: bold;
  text-decoration: none;
  padding: .2rem 1rem;
`;

const Header = () => {
  return (
    <Navbar>
      <Logo to='/'>Project-X</Logo>
      <NavItems>
        <NavbarLink to='/'>Home</NavbarLink>
        <NavbarLink to='/scp'>SCP Foundation</NavbarLink>
        <NavbarLink to='/movies'>Movies</NavbarLink>
      </NavItems>
    </Navbar>
  );
};

export default Header;
