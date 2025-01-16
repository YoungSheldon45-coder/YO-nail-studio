import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png'; // Import the logo image                                                                 

// Navbar Container with background gradient and curve
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: linear-gradient(135deg, #f06292, #d81b60); /* Pink gradient */
  border-radius: 0 0 20px 20px; /* Curved bottom corners */
  color: white;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
`;

// Logo as Links PNG image that you can replace later
const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  img {
    width: 90px; /* Adjust the size of the logo */
    height: auto;
    margin-right: 10px;
  }
`;

// Navbar links container
const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    display: none; /* Hide links on smaller screens */
  }
`;

// Hamburger Menu for mobile
const HamburgerIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 30px;
    color: white;
  }
`;

// Styled Link to remove underline and style the links
const Links = styled.a`
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    color: #fbe7e7; /* Light pink color for hover */
  }
`;

// Mobile Menu Container
const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #f06292;
  position: absolute;
  top: 70px;
  right: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 99;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Logo>
        <img src={logo} alt="Nails" /> {/* Replace with actual logo */}
        Nails Studio
      </Logo>
      <NavLinks>
        <Links href="#section1">Home</Links>
        <Links href="#section2">Products</Links>
        <Links href="#section3">Owner's Story</Links>
        <Links href="#section4">Contact</Links>
      </NavLinks>
      <HamburgerIcon onClick={toggleMenu}>☰</HamburgerIcon>
      <MobileMenu isOpen={isOpen}>
        <Links to="#section1" onClick={toggleMenu}>Home</Links>
        <Links to="#section2" onClick={toggleMenu}>Products</Links>
        <Links to="#section3" onClick={toggleMenu}>Owner's Story</Links>
        <Links to="#section4" onClick={toggleMenu}>Contact</Links>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;
