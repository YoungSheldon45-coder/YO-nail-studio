import React from 'react';
import styled from 'styled-components';
import Owner from '../assets/Owner.jpeg';

const SectionContainer = styled.section`
  padding: 60px 80px;
  background: linear-gradient(135deg, #f4f4f4, #ffe3f0);
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(240, 98, 146, 0.4), 0 8px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  transition: transform 0.3s ease;
  animation: fadeIn 1s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const OwnerImage = styled.img`
  width: 360px;
  height: 380px;
  border-radius: 10px;
  border: 5px solid #f06292;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(240, 98, 146, 0.6), 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Heading = styled.h2`
  font-size: 28px;
  color: #d81b60;
  margin-bottom: 15px;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 50%;
    height: 3px;
    background-color: #f06292;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #555;
  max-width: 600px;
  line-height: 1.8;
  font-family: 'Roboto', sans-serif;
`;

const Divider = styled.div`
  width: 2px;
  height: 80%;
  background-color: #d81b60;

  @media (max-width: 768px) {
    width: 80%;
    height: 2px;
    margin: 20px 0;
  }
`;

const Section3 = () => {
  return (
    <SectionContainer id="section3">
      <OwnerImage src={Owner} alt="Owner" />
      <Divider />
      <div>
        <Heading>Owner's Story</Heading>
        <Paragraph>
          I’m a nail technician with 3 years of experience, based in Zomba. My journey in the beauty industry began in college while I was pursuing a degree in Social and Economic History. What started as a side hustle quickly turned into a passion for creating stunning nail designs and building connections with my clients.
          <br /><br />
          In addition to running Yo! Nail Studio, I’m also the founder of Escasso, a brand dedicated to producing organic black castor oil and cold-pressed castor oil. My mission is to provide the best services and products while creating a warm, accommodating environment where everyone feels at ease. Whether you’re here for nails or natural hair care, I’m all about enhancing your confidence and celebrating your beauty.
        </Paragraph>
      </div>
    </SectionContainer>
  );
};

export default Section3;
