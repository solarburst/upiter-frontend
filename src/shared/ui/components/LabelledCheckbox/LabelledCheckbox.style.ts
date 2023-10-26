'use client';

import styled from 'styled-components';

import { LabelProps } from './LabelledCheckbox.types';

export const Root = styled.label<LabelProps>`
    display: grid;
    grid-template-columns: min-content 1fr;
    align-items: center;
    gap: 2px 16px;
    cursor: pointer;
    width: fit-content;

    color: ${({ theme, disabled }) => (disabled ? theme.color.text3 : theme.color.text1)};
    &:has(:disabled) {
        color: ${({ theme }) => theme.color.text3};
    }
`;

export const LabelContent = styled.span``;

export const LabelError = styled.span`
    grid-column: 2 / 3;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.warning1};
`;
