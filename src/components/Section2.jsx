import React, { useState } from 'react';
import styled from 'styled-components';
import placeHolder from '../assets/placeholder.jpg';
import product2 from "../assets/products/product2.jpg";
import product5 from "../assets/products/product5.jpg";
import product6 from "../assets/products/product6.jpg";
import product11 from "../assets/products/product11.jpg";
import product12 from "../assets/products/product12.jpg";
import product8 from "../assets/products/product8.jpg";
import product9 from "../assets/products/product9.jpg";
import product7 from "../assets/products/product7.jpg";

// Category Link Styling
const CategoryLink = styled.a`
  display: inline-block;
  margin: 10px;
  padding: 8px 16px;
  background-color: ${({ active }) => (active ? '#d81b60' : '#f06292')};
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 30px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #d81b60;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    display: none; /* Hide category links on smaller screens */
  }
`;

// Dropdown Styling
const Dropdown = styled.select`
  display: none; /* Hide dropdown by default */
  width: 100%;
  max-width: 200px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: white;
  color: #333;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; /* Show dropdown on smaller screens */
  }
`;

// Product Card Styling (unchanged)
const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  height: 420px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
  }

  h3 {
    font-size: 22px;
    font-weight: bold;
    color: #d81b60;
    margin: 10px 0;
  }

  p {
    font-size: 16px;
    text-align: center;
    margin-bottom: 15px;
  }

  .price {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
`;

// Section Container Styling (unchanged)
const SectionContainer = styled.section`
  padding: 40px;
  background-color: #f4f4f4;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

// Grid for Product Cards (unchanged)
const ProductGrid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
`;

const Section2 = () => {
  const [category, setCategory] = useState("Manicure");

  const products = {
    Manicure: [
      {
        name: 'Gel on Natural Nails',
        description: 'A gel application on natural nails.',
        price: 'MK10,000',
        image: placeHolder,
      },
      {
        name: 'Gel on Extension',
        description: 'Gel application on nail extensions.',
        price: 'MK12,000',
        image: product2,
      },
      {
        name: 'Acrylic on Natural Nails',
        description: 'Acrylic application on natural nails.',
        price: 'MK12,000',
        image: placeHolder,
      },
      {
        name: 'Acrylic on Tips',
        description: 'Acrylic on nail tips.',
        price: 'MK14,000',
        image: placeHolder,
      },
    ],
    NailArt: [
      {
        name: 'Simple Art',
        description: 'Basic nail designs.',
        price: 'MK2,000',
        image: product5,
      },
      {
        name: 'Complicated Art',
        description: 'Intricate nail art designs.',
        price: 'MK4,000',
        image: product6,
      },
      {
        name: 'Ombré',
        description: 'Intricate nail art designs.',
        price: 'MK4,000',
        image: product7,
      },
      {
        name: 'Small Stones',
        description: 'Small decorative stones for nails.',
        price: 'MK1,500',
        image: product8,
      },
      {
        name: 'Large Stones',
        description: 'Large decorative stones for nails.',
        price: 'MK3,000',
        image: product9,
      },
      {
        name: 'Charms',
        description: 'Nail charms for decoration.',
        price: 'MK1,000 (a nail)',
        image: placeHolder,
      },
      {
        name: 'Chrome',
        description: 'Chrome nail finish.',
        price: 'MK,4000',
        image: product11,
      },
      {
        name: 'French Tips',
        description: 'Classic French tip manicure.',
        price: 'MK4,000',
        image: product12,
      },
    ],
    Pedicure: [
      {
        name: 'Gel on Natural Nails',
        description: 'Gel application on natural nails.',
        price: 'MK9,000',
        image: placeHolder,
      },
      {
        name: 'Gel on Tips',
        description: 'Gel application on nail tips.',
        price: 'MK10,000',
        image: placeHolder,
      },
      {
        name: 'Acrylic Pedicure',
        description: 'Acrylic pedicure nails.',
        price: 'MK12,000',
        image: placeHolder,
      },
    ],
    FootTreatment: [
      {
        name: 'Simple Foot Treatment',
        description: 'Basic foot care treatment.',
        price: 'MK15,000',
        image: placeHolder,
      },
      {
        name: 'Magnesium Glow Elixir',
        description: 'Relaxing magnesium foot treatment.',
        price: 'MK20,000',
        image: placeHolder,
      },
      {
        name: 'Citrus Detox Bliss',
        description: 'Refreshing citrus foot treatment.',
        price: 'MK20,000',
        image: placeHolder,
      },
      {
        name: 'Sweet Elixir Retreat',
        description: 'Sweet-scented foot retreat.',
        price: 'MK25,000',
        image: placeHolder,
      },
    ],
    SoakOff: [
      {
        name: 'Tips Done by Us',
        description: 'Soak off tips applied by us.',
        price: 'MK3,500',
        image: placeHolder,
      },
      {
        name: 'Tips Not Done by Us',
        description: 'Soak off tips not done by us.',
        price: 'MK5,500',
        image: placeHolder,
      },
      {
        name: 'Acrylic Nails Done by Us',
        description: 'Acrylic nails soak off done by us.',
        price: 'MK4,000',
        image: placeHolder,
      },
      {
        name: 'Acrylic Nails Not Done by Us',
        description: 'Acrylic nails soak off not done by us.',
        price: 'MK6000',
        image: placeHolder,
      },
    ],
    Refill: [
      {
        name: 'Tips',
        description: 'Nail tip refill.',
        price: 'MK10,000',
        image: placeHolder,
      },
      {
        name: 'Acrylic',
        description: 'Acrylic nail refill.',
        price: 'MK12,000',
        image: placeHolder,
      },
    ],
    EyelashExtensions: [
      {
        name: 'Classic',
        description: 'Classic eyelash extensions.',
        price: 'MK15,000',
        image: placeHolder,
      },
      {
        name: 'Hybrid',
        description: 'Hybrid eyelash extensions.',
        price: 'MK20,000',
        image: placeHolder,
      },
      {
        name: 'Volume',
        description: 'Volume eyelash extensions.',
        price: 'MK30,000',
        image: placeHolder,
      },
    ],
    OtherServices: [
      {
        name: 'Wig Installation',
        description: 'Professional wig installation.',
        price: 'MK10,000',
        image: placeHolder,
      },
      {
        name: 'Wig revamping',
        description: 'Professional wig revamping.',
        price: 'MK10,000',
        image: placeHolder,
      }
    ],
  };

  const handleDropdownChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <SectionContainer id="section2">
      <h2 style={{ marginBottom: '10px' }}>Products</h2>
      <div>
        {Object.keys(products).map((cat) => (
          <CategoryLink
            key={cat}
            active={cat === category}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </CategoryLink>
        ))}

        {/* Dropdown for smaller screens */}
        <Dropdown value={category} onChange={handleDropdownChange}>
          {Object.keys(products).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Dropdown>
      </div>

      <ProductGrid>
        {products[category].map((product) => (
          <ProductCard key={product.name}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">{product.price}</div>
          </ProductCard>
        ))}
      </ProductGrid>
    </SectionContainer>
  );
};

export default Section2;
