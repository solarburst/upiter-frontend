'use client';

import { useEffect } from 'react';
import ReactModal from 'react-modal';

import { useIsMobile } from '@/shared/hooks';
import { CloseIcon } from '@/shared/ui';

import * as S from './HeaderModal.style';
import { HeaderModalProps } from './HeaderModal.types';

export const HeaderModal: React.FC<HeaderModalProps> = ({ isOpen, onClose, navItems, languages }) => {
    const isMobile = useIsMobile();

    useEffect(() => {
        document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    const handleClose = () => {
        onClose?.();
    };

    if (typeof document === 'undefined') return;

    return (
        <ReactModal isOpen={!!isOpen} closeTimeoutMS={400} shouldCloseOnEsc={true} onRequestClose={handleClose} appElement={document?.body}>
            {!isMobile && (
                <S.ModalHeader>
                    <S.CloseButton onClick={handleClose}>
                        <CloseIcon />
                    </S.CloseButton>
                </S.ModalHeader>
            )}
            <S.ModalContent isMobile={isMobile}>
                <S.ModalNavigation items={navItems} vertical={true} />
                <S.ModalDropdown options={languages} value={languages[0].value} />
                <S.Line />
                <S.ModalSocials />
                <S.ModalButton>Написать в WhatsApp</S.ModalButton>
            </S.ModalContent>
        </ReactModal>
    );
};
