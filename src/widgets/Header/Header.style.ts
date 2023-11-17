'use client';

import styled from 'styled-components';

import { HeaderActions } from '@/shared/ui';
import { HeaderModal } from '@/shared/ui/components/HeaderModal';
import { Nav } from '@/shared/ui/components/Nav';
import { Button } from '@/shared/ui/primitives/';

export const Root = styled.header<{ isMobile: boolean; isModalOpen: boolean; sticky: boolean }>`
    position: ${(props) => (props.sticky ? 'fixed' : 'absolute')};
    background-color: ${({ theme, sticky }) => (sticky ? theme.color.bg1 : 'transparent')};
    top: 0;
    width: 100%;
    z-index: ${(props) => (props.isMobile && props.isModalOpen ? '1000' : '100')};
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    border-bottom: 1px solid #ffffff1a;

    @media screen and (max-width: 1200px) {
        height: 48px;
    }
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    @media screen and (max-width: 1200px) {
        svg:first-child {
            cursor: pointer;
        }
    }
`;

export const Menu = styled(Button)`
    border: none;
    padding: 0;
    background-color: transparent;

    &:hover {
        background-color: transparent;
    }
`;

export const Navigation = styled(Nav)``;

export const Modal = styled(HeaderModal)``;

export const Actions = styled(HeaderActions)``;
