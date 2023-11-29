'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const Root = styled.div`
    // position: absolute;
    // right: 16px;
    // bottom: 12px;
    // margin-left: auto;
    // position: relative;
    // right: 0;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    overflow: hidden;
    z-index: 50;
    pointer-events: auto;
`;

export const SocialsButton = styled.button`
    position: relative;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-top: 0;
    overflow: hidden;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const OpenIcon = styled.span<{ open?: boolean }>`
    transition: ${({ theme }) => theme.transition.slow};
    position: absolute;
    width: 48px;
    height: 48px;
    top: ${(props) => (props.open ? '-48px' : 0)};
    rotate: ${(props) => (props.open ? '-360deg' : 0)};
`;

export const CloseIcon = styled.span<{ open?: boolean }>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    bottom: ${(props) => (props.open ? 0 : '-48px')};
    rotate: ${(props) => (props.open ? '360deg' : 0)};
    background-color: ${({ theme }) => theme.color.accent5};
    transition: ${({ theme }) => theme.transition.slow};
    border-radius: 50%;
`;

export const SocialLink = styled(Link)<{ open?: boolean; background: 'whatsapp' | 'telegram' }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    transition: ${({ theme }) => theme.transition.slow};
    margin-bottom: ${(props) => (props.open ? 0 : '-60px')};
    rotate: ${(props) => (props.open ? 0 : '180deg')};
    background: ${(props) =>
        props.background === 'whatsapp'
            ? 'linear-gradient(0deg, #25cf43 -0.01%, #61fd7d 100%), linear-gradient(37deg, #412d80 -2.85%, #2aabee 107.08%)'
            : 'linear-gradient(180deg, #2aabee 0%, #229ed9 9925.83%)'};
`;
