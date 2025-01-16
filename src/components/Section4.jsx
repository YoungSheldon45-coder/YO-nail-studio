import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa'; // Importing social media icons

const SectionContainer = styled.section`
  padding: 50px;
  text-align: center;
  background-color: #f4f4f4; /* Matches the rest of the site */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  font-size: 24px;
  color: #d81b60; /* Matches the site's primary color */
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  margin: 20px 0;
  font-size: 16px;
  color: #333;
`;

const SocialLinks = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialLink = styled.a`
  color: #d81b60; /* Matches the site's primary color */
  font-size: 24px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: #ad1457; /* Slightly darker shade for hover effect */
  }
`;

const Section4 = () => {
  return (
    <SectionContainer id="section4">
      <Heading>Contact</Heading>
      <ContactInfo>Phone Number: +265 887 558 065</ContactInfo>
      <SocialLinks>
        <SocialLink href="https://x.com/spiw31?s=21" target="_blank" rel="noopener noreferrer" title="Twitter">
          <FaTwitter />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/yo_bouy_spi?igsh=anQ0eXI4eHRkMndq&utm_source=qr" target="_blank" rel="noopener noreferrer" title="Instagram">
          <FaInstagram />
        </SocialLink>
        <SocialLink href="https://www.tiktok.com/@yobouy_spi?_t=ZM-8t70mWqxHt8&_r=1" target="_blank" rel="noopener noreferrer" title="TikTok">
          <FaTiktok />
        </SocialLink>
        <SocialLink href="https://www.facebook.com/share/1EQwLK33oH/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" title="Facebook">
          <FaFacebook />
        </SocialLink>
      </SocialLinks>
    </SectionContainer>
  );
};

export default Section4;
