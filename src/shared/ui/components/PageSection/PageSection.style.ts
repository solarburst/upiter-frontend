'use client';

import styled from 'styled-components';

export const Root = styled.section``;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 32px;

    @media screen and (max-width: 768px) {
        align-items: center;
        margin-bottom: 28px;
    }
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 16px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
