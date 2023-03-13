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
  @media (max-width: ${size.laptop}) {
    max-width: 800px;
    padding: calc(2 * ${spacing.md}) ${spacing.md};
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr 1fr;
    grid-template-areas:
      "b b b"
      "a a a";
  }

  @media (max-width: ${size.tablet}) {
    padding: calc(${spacing.md}) ${spacing.md};
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr 1fr;
    grid-template-areas:
      "b b b"
      "a a a";
  }

  @media (max-width: ${size.mobile}) {
    grid-auto-rows: 0.8fr 1fr;
  }
`;

export const HeroWhiteSpace = styled.div`
  grid-area: a;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  @media (max-width: ${size.laptop}) {
    max-width: 600px;
    align-items: center;
    margin: 48px auto 0;
    justify-content: center;
    text-align: center;
  }
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

      @media (max-width: ${size.laptop}) {
        font-size: ${typography.small};
      }
    }
  }
`;
export const ButtonHome = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 24px;
  text-decoration: none;
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
  @media (max-width: ${size.laptop}) {
    justify-self: center;
  }
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

    @media (max-width: ${size.laptop}) {
      width: 60% !important;
    }

    @media (max-width: ${size.tablet}) {
      width: 60% !important;
    }

    @media (max-width: ${size.mobile}) {
      width: 55% !important;
    }
  }
`;

export const Section = styled.section`
  padding: 80px 0;
  width: 110vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 24px;

  h2,
  p {
    max-width: 600px;

    @media (max-width: ${size.laptop}) {
      max-width: 800px;
    }
  }

  h2,
  p {
    @media (max-width: ${size.tablet}) {
      max-width: 600px;
    }
  }

  h2,
  p {
    @media (max-width: ${size.mobile}) {
      max-width: 400px;
    }
  }
`;

export const ClientsImage = styled.div`
  margin-top: 24px;
  width: 28%;
  position: unset !important;
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: center;
  .logo {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }

  @media (max-width: ${size.laptop}) {
    width: 55%;
  }
`;

export const CardWrapper = styled.div`
  margin-top: 48px;
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: ${size.desktop}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 24px;
  }

  @media (max-width: ${size.mobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 24px;
  }
`;

export const CardContainer = styled.div`
  background-color: ${colors.black40};
  padding: ${spacing.xsm};
  border-radius: ${spacing.xsm};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  width: 90%;
`;

export const CardIcon = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  &:before {
    border-radius: ${spacing.xsm};
    position: relative;
    content: "";
    width: 48px;
    height: 48px;
    background-color: ${colors.white100};
    display: inline-block;
    vertical-align: middle;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const CardText = styled.small`
  text-align: start;
  color: ${colors.white100};
  line-height: 16px;
  font-size: ${typography.small};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.04rem;
`;

export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  width: 1100px;
  height: 100%;

  @media (max-width: ${size.desktop}) {
    width: 600px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 48px;
  }

  @media (max-width: ${size.laptop}) {
    width: 600px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 48px;
  }
`;

export const ProductContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: flex-start;
  position: relative;
  text-align: start;
  height: 100%;
  flex-direction: column;
  padding: 32px 24px 24px 32px;
  border-radius: 8px;
  background-color: ${colors.white100};
`;

export const ProductTitle = styled.div`
  font-size: ${typography.h3};
  margin-bottom: 24px;
  font-weight: 500;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: ${typography.h4};
  color: ${colors.gray600};
`;

export const ProductImage = styled.div`
  width: 100%;
  position: absolute !important;
  top: 0;
  left: 0;

  .logo {
    border-radius: 8px 8px 0 0;
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

export const ProductButton = styled.div`
  margin-top: 32px;
  font-size: 14px;
  width: 100%;
  border-radius: ${spacing.xsm};
  text-align: center;
  background-color: ${colors.tertiary800};
  padding: ${spacing.sm};
  color: ${colors.white100};
  font-weight: 600;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
export const ProductCard = styled.div`
  width: 100%;
  border-radius: ${spacing.xsm};
  padding: 8px 16px;
  background-color: ${colors.gray50};
  margin-top: 14px;
  font-size: ${typography.p};
  font-weight: 500;
  color: ${colors.secondary500};
`;

export const NewProductCard = styled.div`
  width: 100%;
  border-radius: ${spacing.xsm};
  padding: 8px 16px;
  text-align: center;
  border: 1px solid ${colors.primary700};
  background-color: ${colors.primary100};
  margin-top: 14px;
  font-size: ${typography.p};
  font-weight: 600;
  color: ${colors.primary700};
`;
export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  justify-items: flex-start;
  width: 1100px;
  height: 100%;
  gap: 96px;
`;
export const ContactFormContainer = styled.form`
  padding: 32px;
  background-color: ${colors.tertiary800};
  border-radius: ${spacing.xsm};
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  align-items: flex-start;
`;

export const ContactFormTile = styled.h3`
  margin-bottom: 16px;
  color: ${colors.white100};
  font-size: 24px;
  font-weight: 600;
`;

export const ContactTextArea = styled.textarea`
  padding: 20px 24px;
  width: 100%;
  border-radius: 8px;
  background-color: ${colors.white100};
  resize: none;
  color: ${colors.black100};
  border: 1px solid ${colors.tertiary800};

  &:focus {
    outline: none !important;
    border: 1px solid ${colors.tertiary500};
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: start;
  gap: 16px;

  input {
    height: 25px;
    width: 25px;
  }

  small {
    color: ${colors.gray100};
  }
`;

export const ContactButtonForm = styled.button`
  padding: 16px 30px;
  color: ${colors.tertiary800};
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: ${spacing.xsm};
  border: none;
  box-shadow: none;
  background-color: ${colors.white};
  cursor: pointer;
  &:hover {
    filter: brightness(95%);
  }
`;
