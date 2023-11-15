import styled from 'styled-components';

import { Dropdown } from '@/shared/ui/components';
import { Nav } from '@/shared/ui/components/Nav';
import { Socials } from '@/shared/ui/components/Socials';
import { Button } from '@/shared/ui/primitives';

export const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => `${theme.color.bg1}B4`};
`;

export const ModalComponent = styled.section`
    position: absolute;
    background-color: ${({ theme }) => theme.color.bg3};
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    z-index: 100;
`;

export const ModalHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

export const CloseButton = styled.button`
    border: 0;
    background-color: transparent;
    display: flex;
    cursor: pointer;
`;

export const ModalContent = styled.div<{ isMobile: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${(props) => (props.isMobile ? '64px' : '')};
`;

export const ModalNavigation = styled(Nav)``;

export const ModalDropdown = styled(Dropdown)`
    margin-top: 24px;
    font-size: 16px;
    z-index: 100;
`;

export const Line = styled.hr`
    color: ${({ theme }) => theme.color.text1};
    opacity: 0.1;
    width: 100%;
    margin: 32px 0;
`;

export const ModalSocials = styled(Socials)`
    svg {
        width: 40px;
        height: 40px;
    }
`;

export const ModalButton = styled(Button)`
    margin: 24px 0;
`;
