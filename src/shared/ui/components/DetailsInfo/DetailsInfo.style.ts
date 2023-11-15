'use client';

import styled from 'styled-components';

import { Button } from '@/shared/ui/primitives';
import { Paragraph } from '@/shared/ui/primitives/Paragraph';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`;

export const TitleName = styled.h3`
    color: ${({ theme }) => theme.color.text1};
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    font-size: 24px;
    font-weight: 400;
    line-height: normal;
`;

export const TitlePrice = styled.p`
    color: ${({ theme }) => theme.color.text1};
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    font-size: 24px;
    font-weight: 400;
    line-height: normal;
`;

export const SizeInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
`;

export const SizeButton = styled.button`
    border: none;
    padding: 0;
    background: none;
    cursor: pointer;
    color: #2aabee;
    text-decoration: underline;
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
`;

export const BuyButton = styled(Button)`
    margin: 48px 0;
    padding: 10px 60px;
    width: fit-content;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    border-top: 1px solid #ffffff1a;
    gap: 12px;
`;

export const InfoFeature = styled(Paragraph)`
    color: ${({ theme }) => theme.color.text1};
    font-weight: 600;
`;

export const InfoText = styled(Paragraph)`
    color: ${({ theme }) => theme.color.text1};
`;

export const InfoList = styled.ul`
    list-style-type: none;
`;

export const InfoListItem = styled.li`
    position: relative;
    color: ${({ theme }) => theme.color.text1};
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    padding-left: 24px;

    &::before {
        content: '•';
        position: absolute;
        left: 8px;
    }
`;
