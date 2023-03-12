import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  primary900: "rgba(27, 71, 63, 1)",
  primary800: "rgba(40, 100, 89, 1)",
  primary700: "rgba(56, 130, 116, 1)",
  primary600: "rgba(73, 159, 143, 1)",
  primary500: "rgba(92, 188, 170, 1)",
  primary400: "rgba(113, 217, 198, 1)",
  primary300: "rgba(135, 246, 226, 1)",
  primary200: "rgba(175, 255, 240, 1)",
  primary100: "rgba(209, 255, 246, 1)",
  primary50: "rgba(243, 255, 253, 1)",
  secondary900: "rgba(2, 32, 72, 1)",
  secondary800: "rgba(11, 52, 106, 1)",
  secondary700: "rgba(24, 74, 140, 1)",
  secondary600: "rgba(42, 99, 174, 1)",
  secondary500: "rgba(65, 127, 208, 1)",
  secondary400: "rgba(93, 157, 242, 1)",
  secondary300: "rgba(133, 186, 255, 1)",
  secondary200: "rgba(169, 206, 255, 1)",
  secondary100: "rgba(204, 226, 255, 1)",
  secondary50: "rgba(239, 246, 255, 1)",
  tertiary900: "rgba(0, 18, 74, 1)",
  tertiary800: "rgba(2, 30, 115, 1)",
  tertiary700: "rgba(20, 53, 156, 1)",
  tertiary600: "rgba(46, 83, 197, 1)",
  tertiary500: "rgba(81, 120, 237, 1)",
  tertiary400: "rgba(117, 151, 255, 1)",
  tertiary300: "rgba(148, 174, 255, 1)",
  tertiary200: "rgba(178, 197, 255, 1)",
  tertiary100: " rgba(208, 219, 255, 1)",
  tertiary50: "rgba(238, 242, 255, 1)",
  white: "#fff",
  white100: "rgba(242,242,242,1)",
  white75: "rgba(242,242,242,0.75)",
  white65: "rgba(242,242,242,0.65)",
  white50: "rgba(242,242,242,0.5)",
  white40: "rgba(242,242,242,0.4)",
  white30: "rgba(242,242,242,0.3)",
  white20: "rgba(242,242,242,0.2)",
  white10: "rgba(242,242,242,0.1)",
  black100: "rgba(10,13,12,1)",
  black75: "rgba(10,13,12,0.75)",
  black65: "rgba(10,13,12,0.65)",
  black50: "rgba(10,13,12,0.5)",
  black40: "rgba(10,13,12,0.4)",
  black30: "rgba(10,13,12,0.3)",
  black20: "rgba(10,13,12,0.2)",
  black10: "rgba(10,13,12,0.1)",
  gray900: "rgba(18, 24, 41, 1)",
  gray800: "rgba(32, 40, 62, 1)",
  gray700: "rgba(50, 59, 84, 1)",
  gray600: "rgba(71, 80, 105, 1)",
  gray500: "rgba(97, 105, 127, 1)",
  gray400: "rgba(118, 126, 148, 1)",
  gray300: "rgba(142, 149, 169, 1)",
  gray200: "rgba(168, 174, 191, 1)",
  gray100: "rgba(195, 200, 212, 1)",
  gray50: "rgba(229, 235, 249, 1)",
  logoGradient: "35.75deg, #85D7E0 14.63%, #172A4F 75.07%",
};

export const size = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1140px",
};

export const typography = {
  fontFamily: "Montserrat, sans-serif",
  h1: "32px",
  h2: "24px",
  h3: "20px",
  h4: "16px",
  p: "14px",
  small: "12px",
};

export const spacing = {
  xsm: "0.5rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
};

export const shadow = {
  small: `0 2px 4px ${colors.black10}`,
  medium: `0 4px 6px ${colors.black10}`,
  large: `0 8px 12px ${colors.black10}`,
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

  body{
    overflow-x: hidden;
    /* width */
    &::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: ${colors.white100};
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: ${colors.secondary800};
      border-radius: ${spacing.xsm};
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

`;

export const TextLink = styled.a`
  font-size: ${typography.p};
  color: ${colors.black100};
  font-style: normal;
  letter-spacing: 0.02em;
  line-height: ${spacing.md};
  font-weight: 400;
  opacity: 1;
  transition: all 200ms ease-in;
  &:hover {
    opacity: 0.6;
  }
`;

export const Title = styled.h1`
  font-size: ${typography.h1};
  font-family: ${typography.fontFamily};
  font-weight: 500;
  color: ${colors.black100};

  @media (max-width: ${size.laptop}) {
    font-size: ${typography.h2};
  }
`;

export const Subtitle = styled.h2`
  font-size: ${typography.h4};
  font-family: ${typography.fontFamily};
  font-weight: 400;
  color: ${colors.gray600};

  @media (max-width: ${size.laptop}) {
    font-size: ${typography.p};
  }
`;

export const Text = styled.p`
  font-size: ${typography.p};
  color: ${colors.black100};
`;

export const Button = styled.button`
  background-color: ${colors.primary700};
  color: ${colors.white100};
  border: none;
  padding: 12px 24px;
  font-size: ${typography.p};
  cursor: pointer;
  &:hover {
    background-color: ${colors.tertiary800};
  }
`;

export const Input = styled.input`
  padding: 8px 16px;
  font-size: ${typography.p};
  border: 1px solid ${colors.tertiary800};
  &:focus {
    outline: none;
    border-color: ${colors.primary700};
  }
`;
