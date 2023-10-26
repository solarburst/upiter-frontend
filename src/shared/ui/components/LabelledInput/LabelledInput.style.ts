'use client';

import styled from 'styled-components';

import { LabelProps } from './LabelledInput.types';

export const Root = styled.label<LabelProps>`
    color: ${({ theme, disabled }) => (disabled ? theme.color.text3 : theme.color.text2)};
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 14px;
    line-height: 24px;

    &:has(:disabled) {
        color: ${({ theme }) => theme.color.text3};
    }
`;

export const LabelContent = styled.span``;

export const LabelError = styled.span`
    color: ${({ theme }) => theme.color.warning1};
    font-size: 12px;
    line-height: 20px;
`;
