import { spacing, typography, colors, size } from "@/styles/global.css";
import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 81px;
  width: 100vw;
  height: 100vh;
  @media (max-width: ${size.tablet}) {
    padding-top: 0px;
  }
`;

export const HeroContainer = styled.section`
  max-width: ${size.desktop};
  padding: calc(2 * ${spacing.md}) ${spacing.md};
  grid-auto-columns: 0.5fr 1fr;
  display: grid;
  grid-template-areas: "a a b b b b";
  width: 100%;
  max-width: 1140px;
`;

export const HeroWhiteSpace = styled.div`
  grid-area: a;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const InputButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 0 30px;
  border-radius: 0 8px 8px 0;
  border: none;
  background-color: ${colors.tertiary800};
  color: ${colors.secondary50};
  font-family: ${typography.fontFamily};
  font-weight: bold;
  font-size: ${typography.small};
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  form {
    position: relative;
    width: 100%;
    display: flex;
  }
  a {
    cursor: pointer;
    small {
      color: ${colors.tertiary800};
    }
  }
`;
export const ButtonHome = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 24px;
  font-size: ${typography.small};
  font-weight: bold;
  border-radius: ${spacing.xsm};
  padding: 16px 0;
  background-color: transparent;
  border: 1px solid ${colors.tertiary800};
  color: ${colors.tertiary800};
  width: 100%;

  &:hover {
    background-color: ${colors.tertiary800};
    color: ${colors.white100};
  }
`;

export const HeroImage = styled.div`
  grid-area: b;
  width: 60%;
  justify-self: flex-end;
  position: relative;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  shape-outside: circle();
  clip-path: circle();
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(${colors.logoGradient});
    transform: matrix(1, 0, 0, -1, 0, 0);
  }

  .image-container {
    position: unset !important;
    width: 100% !important;
    display: flex;
    flex-direction: row; /* row é padrão */
    justify-content: center;
  }

  .logo {
    object-fit: contain;
    width: 70% !important;
    max-width: 400px;
    position: relative !important;

    height: unset !important;
  }
`;
