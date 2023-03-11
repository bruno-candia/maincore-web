import { colors, size } from "@/styles/global.css";
import styled from "styled-components";

export const AccordionContainer = styled.div`
  .AccordionRoot {
    width: 100vw;
    background-color: ${colors.white100};
  }

  .AccordionItem {
    overflow: hidden;
    margin-top: 1px;
  }

  .AccordionHeader {
    display: flex;
  }

  .AccordionTrigger {
    border: none;
    font-family: inherit;
    background-color: transparent;
    padding: 0 20px;
    height: 45px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 15px;
    line-height: 1;
    color: ${colors.gray600};
    box-shadow: 0 1px 0 ${colors.black10};
    background-color: white;
  }

  .AccordionTrigger:hover {
    background-color: ${colors.black10};
  }

  .AccordionContent {
    overflow: hidden;
    font-size: 15px;
    color: ${colors.gray600};
    background-color: ${colors.gray50};
    cursor: pointer;
    &:hover {
      background-color: red;
    }
  }
  .AccordionContent[data-state="open"] {
    animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
  .AccordionContent[data-state="closed"] {
    animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  .AccordionContentText {
    cursor: pointer;
    padding: 15px 20px;
  }

  .AccordionChevron {
    color: var(--violet10);
    transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
  .AccordionTrigger[data-state="open"] > .AccordionChevron {
    transform: rotate(180deg);
  }

  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes slideUp {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }

  @media (min-width: ${size.tablet}) {
    display: none;
  }
`;
