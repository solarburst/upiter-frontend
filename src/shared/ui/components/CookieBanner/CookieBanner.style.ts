'use client';

import Link from 'next/link';
import styled from 'styled-components';

import { Button } from '@/shared/ui/primitives';

export const Root = styled.div<{ isOpen: boolean }>`
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    position: fixed;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.bg3};
    z-index: 50;

    @media screen and (max-width: 768px) {
        width: calc(100% - 16px);
        bottom: 8px;
        z-index: 3;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 8px 12px;
    margin: 0 auto;
`;

export const Text = styled.span`
    color: ${({ theme }) => theme.color.text1};
    font-size: 14px;
    line-height: 18px;
`;

export const PrivacyLink = styled(Link)`
    text-decoration: underline;
    color: #2aabee;
`;

export const AcceptButton = styled(Button)`
    padding: 8px 12px;
    font-size: 14px;
    line-height: 24px;
`;
