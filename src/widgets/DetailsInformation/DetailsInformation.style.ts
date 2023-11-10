'use client';

import styled from 'styled-components';

export const Root = styled.section`
    padding: 120px 0 90px;

    @media screen and (max-width: 768px) {
        padding: 48px 0 24px;
    }
`;

export const Information = styled.div`
    paddingtop: 200px;
    display: flex;
    justify-content: space-between;
    gap: 64px;

    @media screen and (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
    }
`;
