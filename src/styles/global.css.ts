import styled, { createGlobalStyle } from "styled-components";

const colors = {
  primary: '#008080',
  secondary: '#021E73',
  primaryText: '#0A0D0C',
  secondaryText: '#475069',
  background: '#F2F2F2',
  white: '#FFFFFF',
};

const typography = {
  fontFamily: 'Montserrat, sans-serif',
  h1: '36px',
  h2: '28px',
  h3: '24px',
  h4: '20px',
  p: '16px',
};

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

`;

export const Title = styled.h1`
  font-size: ${typography.h1};
  font-family: ${typography.fontFamily};
  color: ${colors.primary};
`;

export const Subtitle = styled.h2`
  font-size: ${typography.h2};
  color: ${colors.secondary};
`;

export const Text = styled.p`
  font-size: ${typography.p};
  color: ${colors.primaryText};
`;

export const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.background};
  border: none;
  padding: 12px 24px;
  font-size: ${typography.p};
  cursor: pointer;
  &:hover {
    background-color: ${colors.secondary};
  }
`;

export const Input = styled.input`
  padding: 8px 16px;
  font-size: ${typography.p};
  border: 1px solid ${colors.secondary};
  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;
