import React from "react";
import styled from "styled-components";
import Escasso1 from "../assets/Escasso Oil/Escasso1.jpg";
import Escasso2 from "../assets/Escasso Oil/Escasso2.jpg";
import Escasso3 from "../assets/Escasso Oil/Escasso3.jpg";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    top: 0;
  }
`;

const ModalContent = styled.div`
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 15px;
  width: 70%;
  max-width: 1200px;
  height: 90vh;
  overflow-y: auto;
  text-align: left;
  position: relative;
  max-height: 100%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px; /* Slightly reduced padding for smaller screens */
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 15px; /* Even smaller padding for mobile devices */
  }
`;

const BenefitSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #d81b60;
  border-radius: 8px;
  padding: 20px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Image = styled.img`
  width: 180px;
  height: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 0 20px;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin: 10px 0;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

const TextContent = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Title = styled.h3`
  margin-bottom: 10px;
  color: #d81b60;

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

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const SubTitle = styled.h4`
  margin-bottom: 5px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Paragraph = styled.p`
  margin: 0;
  color: #555;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CloseButton = styled.button`
  background-color: #f06292;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  display: block;
  margin: 20px auto 0;

  &:hover {
    background-color: #d81b60;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const benefits = [
  {
    title: "Skin Benefits",
    component: "Ricinoleic Acid",
    ailments: "Acne, Inflammation, Dry Skin, and Wrinkles",
    benefits:
      "Ricinoleic acid is a fatty acid that has anti-inflammatory and antibacterial properties. It helps reduce acne, soothes irritated skin, and provides deep moisturization, making it effective for dry skin and reducing the appearance of wrinkles.",
    image: Escasso2,
  },
  {
    title: "Skin Benefits",
    component: "Vitamin E",
    ailments: "Scars, Stretch Marks, and Skin Damage",
    benefits:
      "Vitamin E is a powerful antioxidant that helps repair skin damage, reduce the appearance of scars and stretch marks, and protect the skin from free radicals.",
    image: Escasso3,
  },
  {
    title: "Hair Benefits",
    component: "Omega-6 Fatty Acids",
    ailments: "Hair Growth, Scalp Health",
    benefits:
      "Omega-6 fatty acids promote blood circulation to the scalp, which stimulates hair growth and strengthens hair from the roots.",
    image: Escasso1,
  },
  {
    title: "Hair Benefits",
    component: "Omega-9 Fatty Acids",
    ailments: "Dry and Brittle Hair, Split Ends",
    benefits:
      "Omega-9 fatty acids help maintain the moisture balance in hair, making it softer, more manageable, and reducing breakage and split ends.",
    image: Escasso1,
  },
  {
    title: "Hair Benefits",
    component: "Ricinoleic Acid",
    ailments: "Dandruff, Scalp Infections",
    benefits:
      "The anti-inflammatory and antifungal properties of ricinoleic acid help treat dandruff and prevent scalp infections, ensuring a healthy scalp environment for hair growth.",
    image: Escasso1,
  },
  {
    title: "Stomach and Digestive Health",
    component: "Ricinoleic Acid",
    ailments: "Constipation, Digestive Issues",
    benefits:
      "Ricinoleic acid acts as a natural laxative by stimulating the intestines, helping to relieve constipation and promote regular bowel movements.",
    image: Escasso2,
  },
  {
    title: "Joint and Muscle Pain Relief",
    component: "Ricinoleic Acid",
    ailments: "Arthritis, Muscle Pain, Joint Inflammation",
    benefits:
      "Due to its anti-inflammatory properties, ricinoleic acid can help reduce pain and inflammation associated with arthritis and sore muscles when massaged into the affected areas.",
    image: Escasso3,
  },
  {
    title: "Immune System Support",
    component: "Undecylenic Acid",
    ailments: "Fungal Infections, Immune Support",
    benefits:
      "Undecylenic acid has antifungal properties that can help in treating fungal infections like athlete’s foot and support overall immune health by protecting against harmful pathogens.",
    image: Escasso2,
  },
  {
    title: "Wound Healing",
    component: "Triglycerides",
    ailments: "Cuts, Wounds, Infections",
    benefits:
      "The triglycerides in castor oil help form a protective barrier on wounds, promoting faster healing and preventing infections.",
    image: Escasso3,
  },
];

const Modal = ({ closeModal }) => {
  const handleContainerClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <ModalContainer onClick={handleContainerClick}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {benefits.map((benefit, index) => (
          <BenefitSection key={index}>
            <Image src={benefit.image} alt={benefit.title} />
            <TextContent>
              <Title>{benefit.title}</Title>
              <SubTitle>Component: {benefit.component}</SubTitle>
              <Paragraph>
                <strong>Targeted Ailments:</strong> {benefit.ailments}
              </Paragraph>
              <Paragraph>
                <strong>Benefits:</strong> {benefit.benefits}
              </Paragraph>
            </TextContent>
          </BenefitSection>
        ))}
        <CloseButton onClick={closeModal}>Close</CloseButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
