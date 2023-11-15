'use client';

import styled from 'styled-components';

import { CategorySelect } from '@/features';
import { Button, PageSection } from '@/shared/ui';

export const StyledPageSection = styled(PageSection)`
    margin-top: 80px;
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

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 282px);
    gap: 32px 24px;
    margin: 32px 0;
    justify-content: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
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
