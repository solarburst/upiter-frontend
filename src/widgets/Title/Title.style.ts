'use client';

import styled from 'styled-components';

import { Button } from '@/shared/ui';

export const Root = styled.section`
    background-image: url('/images/main.png');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 255px 0;
`;

export const Heading = styled.h1`
    font-family: ${({ theme }) => theme.fontFamily.unbounded};
    color: ${({ theme }) => theme.color.text1};
    font-size: 60px;
    font-weight: 300;
    line-height: 80px;
    margin-bottom: 8px;
`;

export const Paragraph = styled.p`
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    color: ${({ theme }) => theme.color.text1};
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    margin-bottom: 24px;
    width: 582px;
`;

export const OrderButton = styled(Button)`
    padding: 10px 60px;
`;
