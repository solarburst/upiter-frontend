'use client';

import styled from 'styled-components';

import { Nav, Socials } from '@/shared/ui';

export const Root = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
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
`;

export const FooterSocials = styled(Socials)<{ isTablet: boolean }>`
    order: ${(props) => (props.isTablet ? '2' : '')};

    svg {
        ${(props) => (props.isTablet ? 'width: 40px; height: 40px' : '')}
    }
`;
