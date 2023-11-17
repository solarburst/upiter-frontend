'use client';

import styled from 'styled-components';

import { Nav, Paragraph, Socials } from '@/shared/ui';

export const Root = styled.footer`
    width: 100%;
    background: linear-gradient(180deg, #0a1d35 0%, #0a1326 50%, #0a1d35 100%);
`;

export const Text = styled(Paragraph)`
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 48px;
    padding-top: 48px;
`;

export const Wrapper = styled.div<{ isTablet: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${(props) => (props.isTablet ? '' : '80px')};
    border-top: 1px solid #ffffff1a;
    padding: ${(props) => (props.isTablet ? '32px 0' : '')};
    flex-direction: ${(props) => (props.isTablet ? 'column' : '')};
    gap: ${(props) => (props.isTablet ? '32px' : '')};
`;

export const Navigation = styled(Nav)<{ isTablet: boolean }>`
    flex-direction: ${(props) => (props.isTablet ? 'column' : '')};
    align-items: ${(props) => (props.isTablet ? 'center' : '')};
    order: ${(props) => (props.isTablet ? '3' : '')};
    gap: ${(props) => (props.isTablet ? '4px' : '')};
`;

export const FooterSocials = styled(Socials)<{ isTablet: boolean }>`
    order: ${(props) => (props.isTablet ? '2' : '')};
    gap: 16px;

    svg {
        ${(props) => (props.isTablet ? 'width: 40px; height: 40px' : '')}
    }
`;
