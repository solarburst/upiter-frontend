'use client';

import styled from 'styled-components';

export const Root = styled.div`
    // display: grid;
    // min-height: 100vh;
    // grid-template-rows: min-content 1fr min-content;
`;

export const Widgets = styled.div`
    display: flex;
    position: fixed;
    bottom: 0px;
    z-index: 3;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    align-items: center;
    flex-wrap: wrap-reverse;
    padding: 0 16px 12px;
    gap: 12px;
`;
