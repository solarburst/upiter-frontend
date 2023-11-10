'use client';

import styled from 'styled-components';

import { Button } from '@/shared/ui';

export const Root = styled.section`
    background-image: url('/images/main.png');
    background-repeat: no-repeat;
    background-position-x: 65%;
    background-position-y: 90%;
    background-size: cover;

    @media screen and (max-width: 768px) {
        background:
            linear-gradient(0deg, rgba(10, 19, 38, 0.4) 0%, rgba(10, 19, 38, 0.4) 100%),
            url('/images/main.png'),
            lightgray -579.244px -177.64px / 341.172% 139.911% no-repeat;
        background-position-x: 65%;
        background-position-y: 90%;
        background-size: cover;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 255px 0;
    width: 582px;

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
