'use client';

import styled from 'styled-components';

import { StyledInputProps } from './Input.types';

export const Wrapper = styled.span<StyledInputProps>`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    overflow: hidden;
    ${(props) => (props.stretch ? 'width: 100%;' : '')};
`;

export const Root = styled.input<StyledInputProps>`
    display: flex;
    background-color: ${({ theme }) => theme.color.bg1};
    color: ${({ theme }) => theme.color.text1};
    font-size: 14px;
    line-height: 24px;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.color.border1};
    transition: ${({ theme }) => theme.transition.default};
    resize: vertical;

    ${(props) => (props.stretch ? 'width: 100%;' : '')};
    ${(props) => (props.multiline ? 'height: 100px;' : '')};
    ${(props) => (props.invalid ? `border: 1px solid ${props.theme.color.warning1};` : '')};

    &:focus,
    &:active,
    &:hover {
        border: 1px solid ${({ invalid, theme }) => (invalid ? theme.color.warning1 : theme.color.border2)};
    }

    &:focus-visible {
        outline: 1px solid;
    }

    &:disabled {
        border: 1px solid ${({ theme }) => theme.color.border3};
        color: ${({ theme }) => theme.color.text3};
    }

    &:invalid {
        border: 1px solid ${({ theme }) => theme.color.warning1};
    }

    &::placeholder {
        color: ${({ theme }) => theme.color.text2};
    }
`;
