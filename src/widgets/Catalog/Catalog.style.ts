'use client';

import styled from 'styled-components';

import { Button, CategorySelect, Paragraph } from '@/shared/ui';

export const Root = styled.section`
    margin: 80px 0;
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Categories = styled(CategorySelect)`
    align-self: flex-end;

    @media screen and (max-width: 768px) {
        overflow-x: scroll;
        align-self: unset;

        &::-webkit-scrollbar {
            background-color: transparent;
            width: 4px;
            height: 4px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: transparent;
            border-radius: 10px;
        }
    }
`;

export const TitleDescription = styled(Paragraph)``;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 282px);
    gap: 32px 24px;
    margin: 32px 0;
    justify-content: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, 160px);
        gap: 24px 8px;
    }
`;

export const ShowAll = styled(Button)`
    margin: 0 auto;
    padding: 10px 60px;

    @media screen and (max-width: 768px) {
        border-radius: unset;
    }
`;
