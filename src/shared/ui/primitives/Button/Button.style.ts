'use client';

import styled from 'styled-components';

import { StyledButtonProps } from './Button.types';

export const Button = styled.button<StyledButtonProps>`
    border: none;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.accent1};
    color: ${({ theme }) => theme.color.text1};
    transition: ${({ theme }) => theme.transition.default};
    font-size: 16px;
    line-height: 26px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.color.accent2};
    }

    &:active {
        background-color: ${({ theme }) => theme.color.accent3};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.color.accent4};
        color: ${({ theme }) => theme.color.text2};
    }

    ${({ paddings = 'small' }) => {
        switch (paddings) {
            case 'large':
                return 'padding: 10px 60px;';
            case 'small':
                return 'padding: 10px 24px;';
        }
    }}

    ${(props) => (props.stretch ? 'width: 100%;' : '')}
`;
