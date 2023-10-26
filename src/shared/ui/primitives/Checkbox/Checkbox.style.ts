'use client';

import styled from 'styled-components';

export const Root = styled.span`
    position: relative;
    display: flex;
    width: 20px;
    height: 20px;

    input {
        position: absolute;
        top: -5px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        opacity: 0;
        z-index: 2;
        cursor: pointer;
    }

    input + span {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: ${({ theme }) => theme.transition.default};
        background-color: ${({ theme }) => theme.color.bg2};
        color: ${({ theme }) => theme.color.text1};
        border: 1px solid ${({ theme }) => theme.color.accent5};
        border-radius: 50%;
    }

    input:checked + span {
        background-color: ${({ theme }) => theme.color.accent5};
    }

    input:disabled + span {
        opacity: 0.7;
    }

    input:focus + span {
        outline: 1px solid;
    }

    input:hover,
    input:active {
        &:not(:disabled) + span {
            scale: 1.05;
        }
    }
`;
