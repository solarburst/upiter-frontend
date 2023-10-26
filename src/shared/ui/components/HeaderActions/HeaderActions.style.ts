'use client';

import styled from 'styled-components';

import { Dropdown } from '@/shared/ui/components';
import { Button } from '@/shared/ui/primitives';

export const Root = styled.div`
    display: flex;
    align-items: center;
`;

export const ActionButton = styled(Button)`
    border-radius: unset;
    background-color: transparent;
    gap: 8px;
    padding: 0;

    &:hover {
        color: ${({ theme }) => theme.color.text1};
        background-color: transparent;
    }
`;

export const LanguageSelect = styled(Dropdown)`
    font-size: 16px;
`;

export const ActionsSeparator = styled.div`
    width: 1px;
    background-color: ${({ theme }) => theme.color.text1};
    opacity: 0.1;
    height: 24px;
    margin: 0 12px;
`;
