'use client';

import { useEffect } from 'react';
import ReactModal from 'react-modal';

import { CloseIcon } from '@/shared/ui';

import * as S from './Modal.style';

interface ModalProps {
    children?: React.ReactNode;
    title?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, title, isOpen, onClose }) => {
    useEffect(() => {
        document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    const handleClose = () => {
        onClose?.();
    };

    if (typeof document === 'undefined') return;

    return (
        <ReactModal isOpen={!!isOpen} closeTimeoutMS={400} shouldCloseOnEsc={true} onRequestClose={handleClose} appElement={document?.body}>
            <S.ModalHeader>
                <S.ModalTitle>{title}</S.ModalTitle>
                <S.CloseButton onClick={handleClose}>
                    <CloseIcon />
                </S.CloseButton>
            </S.ModalHeader>
            <S.ModalContent>{children}</S.ModalContent>
        </ReactModal>
    );
};
