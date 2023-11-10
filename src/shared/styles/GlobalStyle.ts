'use client';

import { createGlobalStyle, keyframes } from 'styled-components';

const animation = keyframes`
  from {
    transform: translate(100%);
  }

  to {
    transform: translate(0);
  }
`;

export const GlobalStyle = createGlobalStyle`
  *, 
  ::before, 
  ::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: inherit;
    text-decoration: none;
    color: inherit;
    text-transform: none;
    font-style: inherit;
    font-weight: 400;
  }
  
  body {
    font-family: ${(props) => props.theme.fontFamily.montserrat};
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.text1};
    background-color: ${({ theme }) => theme.color.bg1};
    position: relative;
    min-height: 100vh;
  }

  .info {
    background: linear-gradient(180deg, #0A1D35 0%, #0A1326 50%, #0A1D35 100%);
  }

  img {
    max-width: 100%;
    object-fit: contain;
  }


  .ReactModal__Overlay {  
    position: absolute !important;
    top: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
    right: 0 !important;
    overflow: hidden !important;
    background-color: ${({ theme }) => `${theme.color.bg1}B4`} !important;
    transition: ${({ theme }) => theme.transition.slow};
    z-index: 500;
  }

  .ReactModal__Overlay--after-open{
    background-color: ${({ theme }) => `${theme.color.bg1}B4`};
  }

  .ReactModal__Overlay--before-close{
    background-color: ${({ theme }) => `${theme.color.bg1}0`};
  }

  .ReactModal__Content {
    transition: ${({ theme }) => theme.transition.slow};
    position: absolute !important;
    background-color: ${({ theme }) => theme.color.bg3} !important;
    top: 0 !important;
    bottom: 0 !important;
    right: 0 !important;
    width: 100% !important;
    overflow-y: auto !important;
    padding: 16px !important;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border: none !important;
    inset: 0 0 0 auto !important;
    z-index: 500;

    animation: ${animation} ${({ theme }) => theme.transition.slow};

    @media screen and (${({ theme }) => theme.media.fromTablet}) {
      max-width: 480px !important;
      padding: 24px !important;
    }
  }

  .ReactModal__Content--before-open{
    translate: 0;
  }

  .ReactModal__Content--after-open{
    translate: 0;
  }

  .ReactModal__Content--before-close{
    translate: 100%;
  }
`;
