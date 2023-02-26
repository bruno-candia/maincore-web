import { spacing, typography, colors } from "@/styles/global.css";
import styled from "styled-components";

export const Navbar = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: ${spacing.xl};
    a {
      text-decoration: none;
      outline: none;
    }
  }

  .NavigationMenuRoot {
    display: flex;
    justify-content: center;
  }

  .NavigationMenuList {
    display: flex;
    justify-content: center;
  }

  .NavigationMenuTrigger,
  .NavigationMenuLink {
    background: transparent;
    border: none;
    outline: none;
    user-select: none;
    font-size: ${typography.p};
    color: ${colors.primaryText};
    font-style: normal;
    letter-spacing: 0.02em;
    line-height: ${spacing.md};
    font-weight: 400;
    opacity: 1;
    transition: all 200ms ease-in;
    &:hover {
      opacity: 0.6;
    }
  }

  .NavigationMenuTrigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${spacing.xsm};
  }

  .NavigationMenuContent {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    animation-duration: 250ms;
    animation-timing-function: ease;
  }
  .NavigationMenuContent[data-motion="from-start"] {
    animation-name: enterFromLeft;
  }
  .NavigationMenuContent[data-motion="from-end"] {
    animation-name: enterFromRight;
  }
  .NavigationMenuContent[data-motion="to-start"] {
    animation-name: exitToLeft;
  }
  .NavigationMenuContent[data-motion="to-end"] {
    animation-name: exitToRight;
  }
  @media only screen and (min-width: 600px) {
    .NavigationMenuContent {
      width: auto;
    }
  }

  .NavigationMenuIndicator {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 10px;
    top: 100%;
    overflow: hidden;
    z-index: 1;
    transition: width, transform 250ms ease;
  }
  .NavigationMenuIndicator[data-state="visible"] {
    animation: fadeIn 200ms ease;
  }
  .NavigationMenuIndicator[data-state="hidden"] {
    animation: fadeOut 200ms ease;
  }

  .NavigationMenuViewport {
    position: relative;
    transform-origin: top center;
    margin-top: -10px;
    width: 90%;
    background-color: white;
    border-radius: ${spacing.xsm};
    overflow: hidden;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    height: var(--radix-navigation-menu-viewport-height);
    transition: width, height, 300ms ease;
  }
  .NavigationMenuViewport[data-state="open"] {
    animation: scaleIn 200ms ease;
  }
  .NavigationMenuViewport[data-state="closed"] {
    animation: scaleOut 200ms ease;
  }
  @media only screen and (min-width: 600px) {
    .NavigationMenuViewport {
      width: var(--radix-navigation-menu-viewport-width);
    }
  }

  .List {
    display: grid;
    align-items: flex-start;
    padding: 22px;
    margin: 0;
    column-gap: 10px;
    list-style: none;
  }
  @media only screen and (min-width: 600px) {
    .List.one {
      width: 500px;
      grid-template-columns: 0.75fr 1fr;
    }
    .List.two {
      width: 600px;
      grid-auto-flow: column;
      grid-template-rows: repeat(1, 1fr);
    }
  }

  .ListItemLink {
    display: block;
    outline: none;
    text-decoration: none;
    user-select: none;
    padding: 12px;
    border-radius: 6px;
    font-size: 15px;
    line-height: 1;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }

  .ListItemHeading {
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 5px;
    color: ${colors.secondary};
  }

  .ListItemText {
    color: ${colors.secondaryText};
    line-height: 1.4;
    font-weight: initial;
  }

  .ViewportPosition {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 100%;
    left: 0;
    perspective: 2000px;
  }

  .CaretDown {
    position: relative;
    color: ${colors.secondary};
    top: 1px;
    transition: transform 250ms ease;
  }
  [data-state="open"] > .CaretDown {
    transform: rotate(-180deg);
  }

  .Arrow {
    position: relative;
    top: 70%;
    background-color: white;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    border-top-left-radius: 2px;
  }

  @keyframes enterFromRight {
    from {
      opacity: 0;
      transform: translateX(200px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes enterFromLeft {
    from {
      opacity: 0;
      transform: translateX(-200px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes exitToRight {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(200px);
    }
  }

  @keyframes exitToLeft {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(-200px);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: rotateX(-30deg) scale(0.9);
    }
    to {
      opacity: 1;
      transform: rotateX(0deg) scale(1);
    }
  }

  @keyframes scaleOut {
    from {
      opacity: 1;
      transform: rotateX(0deg) scale(1);
    }
    to {
      opacity: 0;
      transform: rotateX(-10deg) scale(0.95);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
