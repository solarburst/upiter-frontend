'use client';

import Image from 'next/image';
import styled from 'styled-components';

import { Button } from '@/shared/ui';

export const Root = styled.section`
    position: relative;
`;

export const BackgroundImage = styled(Image)`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-height: 720px;

    @media screen and (${({ theme }) => theme.media.fromLaptop}) {
        min-height: 650px;
        align-items: flex-start;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        align-items: center;
        justify-content: center;
        width: unset;
        padding: 160px 0 172px;
    }
`;

export const Heading = styled.h1`
    font-family: ${({ theme }) => theme.fontFamily.unbounded};
    color: ${({ theme }) => theme.color.text1};
    font-size: 60px;
    font-weight: 300;
    line-height: 80px;
    margin-bottom: 8px;

    @media screen and (max-width: 768px) {
        font-size: 32px;
        line-height: normal;
        text-align: center;
    }
`;

export const Paragraph = styled.p`
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    color: ${({ theme }) => theme.color.text1};
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    margin-bottom: 24px;

    @media screen and (max-width: 768px) {
        text-align: center;
        line-height: 24px;
        margin-bottom: 22px;
    }
`;

export const OrderButton = styled(Button)`
    padding: 10px 60px;
`;
