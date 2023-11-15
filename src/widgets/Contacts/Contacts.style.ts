'use client';

import styled from 'styled-components';

import { Button, Socials } from '@/shared/ui';

export const Root = styled.div`
    margin-bottom: 32px;

    @media screen and (max-width: 768px) {
        margin-bottom: 40px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Caption = styled.p`
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    color: ${({ theme }) => theme.color.text1};
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    margin: 12px 0 24px;

    @media screen and (max-width: 768px) {
        text-align: center;
        line-height: 24px;
        margin-top: 8px;
    }
`;

export const SocialsList = styled(Socials)`
    gap: 24px;

    svg {
        width: 40px;
        height: 40px;
    }
`;

export const ContactButton = styled(Button)`
    margin-top: 32px;
    border-radius: unset;

    @media screen and (max-width: 768px) {
        margin-top: 24px;
    }
`;
