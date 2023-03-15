import { colors, shadow, size, spacing, typography } from "@/styles/global.css";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${colors.black100};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: grid;
  max-width: 1100px;
  padding: 64px 0;
  align-items: flex-start;
  justify-items: flex-start;
  grid-template-columns: 0.5fr 1fr 0.5fr;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  h3 {
    color: ${colors.white100};
    margin-bottom: 4px;
    font-weight: 400;
    font-size: 20px;
  }

  p {
    color: ${colors.white100};
    font-weight: 300;
    font-size: 14px;
  }
`;

export const Hero = styled.div`
  justify-self: center;

  width: 100%;
  position: unset !important;
  p {
    color: ${colors.white100};
    font-weight: 300;
  }
  .logo {
    object-fit: contain;
    width: 50% !important;
    height: 100%;
    position: relative !important;
    height: unset !important;
  }

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 24px;
`;
export const SocialMedia = styled.div`
  justify-self: flex-end;
  h3 {
    color: ${colors.white100};
    margin-bottom: 4px;
    font-weight: 400;
    font-size: 20px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: ${colors.white100};
  }
`;

export const Line = styled.div`
  content: "";
  width: 100%;
  height: 1px;
  background-color: ${colors.white100};
`;

export const CopyContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  justify-content: space-between;
  padding: 24px 0;

  p {
    font-weight: 300;
    display: flex;
    gap: 8px;
    color: ${colors.white100};

    a {
      color: ${colors.white100};
    }
  }
`;
