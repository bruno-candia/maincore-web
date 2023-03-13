import { colors, shadow, size, spacing, typography } from "@/styles/global.css";
import styled from "styled-components";
interface ButtonProps {
  active: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  position: fixed;
  box-shadow: ${shadow.small};
  z-index: 1;
  background-color: ${colors.white};
`;

export const Container = styled.div`
  max-width: ${size.desktop};
  padding: ${spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;

export const ImageContainer = styled.a`
  width: 180px;
  cursor: pointer;

  div {
    position: unset !important;
  }

  .logo {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }

  @media (max-width: ${size.mobile}) {
    min-width: 120px;
  }
`;

export const LanguageSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing.xsm};
  span {
    display: flex;
    align-items: center;
  }
`;

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  background: transparent;
  border: none;
  font-size: ${typography.small};
  color: ${colors.black100};
  font-style: normal;
  letter-spacing: 0.04em;
  line-height: ${spacing.sm};
  font-weight: 700;
  text-transform: uppercase;
  opacity: ${(props) => (props.active ? 1 : 0.4)};
`;
