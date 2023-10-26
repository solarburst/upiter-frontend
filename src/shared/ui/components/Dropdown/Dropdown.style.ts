'use client';

import styled from 'styled-components';

export const Root = styled.div`
    position: relative;
    max-width: max-content;
`;

export const Trigger = styled.button<{ open?: boolean }>`
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;

    svg {
        transition: ${({ theme }) => theme.transition.default};
        rotate: ${(props) => (props.open ? '180deg' : '0deg')};
    }
`;

export const OptionsContainer = styled.ul<{
    open?: boolean;
    position?: 'left' | 'right';
}>`
    list-style: none;
    position: absolute;
    top: calc(100% + 24px);
    left: 50%;
    transform: translateX(-50%);
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    ${({ position = 'right' }) => `${position}: 0px;`}

    border-radius: 12px;
    min-width: 160px;
    max-width: 220px;
    background: ${({ theme }) => theme.color.bg3};
    box-shadow: 0px 2px 8px 0px rgba(10, 19, 38, 0.5);
    padding: 4px;
`;

export const OptionItem = styled.li``;

export const OptionButton = styled.button`
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    width: 100%;
    background-color: transparent;
    padding: 6px 8px 6px 12px;
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
    border-radius: 8px;

    &:hover,
    &:focus,
    &:active {
        background: ${({ theme }) => theme.color.accent4};
    }
`;

export const CheckMarkWrapper = styled.span`
    display: flex;
    width: 20px;
`;
