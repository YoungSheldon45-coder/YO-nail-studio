import { createGlobalStyle } from 'styled-components';

const GlobalStyling = createGlobalStyle`
  /* Import a modern, stylish font from Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif; /* Use Poppins as the main font */
  }

  body {
    background-color: #fbe7e7; /* Soft pink background */
    color: #333;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    padding: 10px 15px;
    border: none;
    background-color: #f06292; /* Bright pink button */
    color: white;
    font-size: 16px;
    font-weight: 500; /* Medium weight for button text */
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #d81b60; /* Darker pink for hover effect */
  }

  h1, h2, h3, h4, h5, h6 {
    color: #d81b60; /* Darker pink for headings */
    font-weight: 600; /* Bold headings */
  }

  p {
    color: #555; /* Lighter text for paragraphs */
    font-weight: 400; /* Regular font weight */
  }

  /* Additional styles for specific elements to improve overall look */
  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }
`;

export default GlobalStyling;
