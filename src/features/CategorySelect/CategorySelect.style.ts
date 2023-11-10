'use client';

import styled from 'styled-components';

import { Button } from '@/shared/ui/primitives';

export const Root = styled.div`
    display: flex;
    gap: 24px;
`;

export const CategoryButton = styled(Button)<{ selected: boolean }>`
    border-radius: unset;
    background-color: transparent;
    padding: 4px;
    color: ${(props) => (props.selected ? props.theme.color.text1 : props.theme.color.text2)};
    border-bottom: ${(props) => (props.selected ? `1px solid ${props.theme.color.text1}` : 'none')};
    height: fit-content;

    &:hover {
        color: ${({ theme }) => theme.color.text1};
        background-color: transparent;
    }
`;
