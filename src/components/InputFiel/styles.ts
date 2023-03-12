import { colors, shadow, size, spacing, typography } from "@/styles/global.css";
import styled from "styled-components";

export const InputContainer = styled.input`
  padding: 20px 24px;
  width: 100%;
  border-radius: 8px;
  background-color: ${colors.white100};
  color: ${colors.black100};
  border: 1px solid ${colors.tertiary800};

  &:focus {
    outline: none !important;
    border: 1px solid ${colors.tertiary500};
  }
`;
