'use client';

import styled from 'styled-components';

import { Button } from '@/shared/ui/primitives';

import { RootProps } from './Nav.types';

export const Root = styled.div<RootProps>`
    display: flex;
    gap: 24px;
    height: calc(100% + 1px);
    flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
    align-items: ${(props) => (props.vertical ? 'center' : '')};
`;

export const NavItem = styled(Button)<{ selected: boolean }>`
    border-radius: unset;
    background-color: transparent;
    padding: 8px;
    color: ${(props) => (props.selected ? props.theme.color.text1 : props.theme.color.text2)};
    border-bottom: ${(props) => (props.selected ? `1px solid ${props.theme.color.text1}` : 'none')};
    display: flex;
    align-items: center;

    &:hover {
        color: ${({ theme }) => theme.color.text1};
        background-color: transparent;
    }
`;
