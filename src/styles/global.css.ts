import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  primary: '#008080',
  secondary: '#021E73',
  primaryText: '#0A0D0C',
  secondaryText: '#475069',
  background: '#F2F2F2',
  white: '#FFFFFF',
};

export const size = {
  mobile: '576px',
  tablet: '768px',
  laptop: '992px',
  desktop: '1140px',
};

export const typography = {
  fontFamily: 'Montserrat, sans-serif',
  h1: '36px',
  h2: '28px',
  h3: '24px',
  h4: '20px',
  p: '16px',
  small: '12px',
};

export const spacing = {
  xsm: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
};

export const shadow = {
  small: '0 2px 4px rgba(0, 0, 0, 0.1)',
  medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
  large: '0 8px 12px rgba(0, 0, 0, 0.1)',
};

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: ${typography.fontFamily};
  }
  
  html,
  body {
    max-width: 100vw;
  }

`;

export const TextLink = styled.a`
  font-size: ${typography.p};
  color: ${colors.primaryText};
  font-style: normal;
  letter-spacing: 0.02em;
  line-height: ${spacing.md};
  font-weight: 400;
  opacity: 1;
  transition: all 200ms ease-in;
  &:hover{
    opacity: 0.6;
  }
`;

export const Title = styled.h1`
  font-size: ${typography.h1};
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
