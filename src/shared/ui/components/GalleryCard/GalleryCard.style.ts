'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const Root = styled.article`
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    height: 384px;
    max-width: 384px;
    cursor: pointer;
    width: 100%;
    display: flex;
`;

export const Background = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
`;

export const Content = styled.div`
    padding: 12px 8px;
    display: flex;
    gap: 8px;
    align-items: center;
    align-self: flex-end;
`;

export const AuthorImage = styled(Image)`
    width: 28px;
    height: 28px;
    z-index: 1;
    border-radius: 50%;
`;

export const Text = styled.p`
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.text1};
    z-index: 1;
`;
