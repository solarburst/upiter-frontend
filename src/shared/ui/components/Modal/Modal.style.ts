import styled from 'styled-components';

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

    @media screen and (${({ theme }) => theme.media.fromTablet}) {
        max-width: 480px;
        padding: 24px;
    }
`;

export const ModalHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

export const ModalTitle = styled.h2`
    font-size: 24px;
    line-height: 30px;
`;

export const CloseButton = styled.button`
    border: 0;
    background-color: transparent;
    display: flex;
    cursor: pointer;
`;

export const ModalContent = styled.div`
    flex-grow: 1;
`;
