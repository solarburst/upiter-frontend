'use client';

import Image from 'next/image';
import styled from 'styled-components';

import { Paragraph } from '@/shared/ui/primitives/Paragraph';

export const Root = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Product = styled.div`
    display: flex;
    gap: 24px;
`;

export const CardImage = styled(Image)`
    object-fit: cover;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 240px;
`;

export const InfoBlock = styled.div``;

export const Name = styled.h4`
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    color: ${({ theme }) => theme.color.text1};
    font-size: 16px;
`;

export const Information = styled(Paragraph)`
    font-size: 14px;
    line-height: 24px;
`;

export const Price = styled.h4`
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    color: ${({ theme }) => theme.color.text1};
    font-size: 16px;
    font-weight: 600;
    align-self: flex-end;
`;
