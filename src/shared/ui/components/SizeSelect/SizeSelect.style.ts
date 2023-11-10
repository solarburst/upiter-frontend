'use client';

import styled from 'styled-components';

import { Button } from '@/shared/ui/primitives';

export const Root = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;

export const SizeButton = styled(Button)<{ selected: boolean }>`
    padding: 8px 24px;
    background-color: ${(props) => (props.selected ? props.theme.color.accent1 : 'transparent')};
    color: ${(props) => (props.selected ? props.theme.color.text1 : props.theme.color.text2)};
    border: 1px solid ${({ theme }) => theme.color.border1};
    width: 64px;

    &:hover {
        background-color: ${(props) => (props.selected ? '' : props.theme.color.bg3)};
    }
`;
