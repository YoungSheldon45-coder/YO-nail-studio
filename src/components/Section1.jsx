import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import background from '../assets/background.jpg'; // Image path

// Section Container with a background image, modern design, and padding
const SectionContainer = styled.section`
  background-image: url('${background}'); /* Background image for the section */
  background-size: cover;
  background-position: center;
  height: 70vh; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
  border-radius: 20px; /* Curved bottom corners for a modern look */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); /* Soft shadow for depth */
  margin: 50px; /* Balanced spacing around the section */
  overflow: hidden; /* Prevent content from overflowing */
  
  @media (max-width: 768px) {
    height: auto; /* Adjust height for smaller screens */
  }
`;

// Semi-transparent overlay to enhance text visibility
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1); /* Dark overlay for better contrast */
  border-radius: 0 0 20px 20px; /* Matching curved corners */
`;

// Section Content with a light background and modern design
const SectionContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 600px; /* Limit the width for better readability */
  background-color: rgba(255, 255, 255, 0.7); /* Light background for content */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Soft shadow effect */
  backdrop-filter: blur(10px); /* Optional blur effect for a modern feel */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #d81b60; /* Color that matches the overall theme */
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    padding: 20px; /* Reduced padding for smaller screens */
  }
`;

// Title styling with responsive font size
const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 36px; /* Adjust font size for smaller screens */
  }
`;

// Description styling with line-height for better readability
const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 500;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 16px; /* Adjust font size for readability on mobile */
  }
`;

// Button styling with modern look, accessibility focus, and hover effect
const Button = styled.button`
  cursor: pointer;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  background-color: #f06292;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;;
  outline: none; /* Remove outline for cleaner design */
  
  &:hover {
    background-color: #d81b60; /* Darker pink on hover for interactivity */
    transform: scale(1.05);
  }

  &:focus {
    outline: 3px solid #d81b60; /* Provide clear focus state for accessibility */
  }

  @media (max-width: 768px) {
    font-size: 14px; /* Adjust font size for mobile screens */
  }
`;

const Section1 = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  return (
    <SectionContainer>
      <Overlay /> {/* Overlay to improve text visibility */}
      <SectionContent>
        <Title>YO Nails</Title>
        <Description>
          Located in the heart of Zomba, Yo! Nail Studio specializes in stunning nail art and personalized care.
        </Description>
        <Button onClick={() => setShowModal(true)} aria-label="View Escasso Oil Benefits">
          View Escasso Oil Benefits!
        </Button>
        
      </SectionContent>
      {showModal && <Modal closeModal={() => setShowModal(false)} />} {/* Modal for product benefits */}
    </SectionContainer>
  );
};

export default Section1;
