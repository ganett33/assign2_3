import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  height: 65px;
  background: linear-gradient(220deg, rgba(189,0,255,1) 0%, rgba(0,163,255,1) 100%);
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled(Link)`
  background: black;
  color: #fff;
  padding: .16rem 1rem;
  text-decoration: none;
  font-weight: bold;
  font-style: italic;
`;

const NavItems = styled.div``;

const NavbarLink = styled(Link)`
  background: black;
  color: #fff;
  font-weight: bold;
  font-style: italic;
  text-decoration: none;
  padding: .16rem 1rem;
`;

const Footer = () => {
  return (
    <Navbar>
      <Logo to='/'> Jongbo Lee </Logo>
      <NavItems>
        <NavbarLink to='/'> </NavbarLink>
        <NavbarLink to='/series1'></NavbarLink>
        <NavbarLink to='/series2'>30001192</NavbarLink>
      </NavItems>
    </Navbar>
  );
};

export default Footer;
