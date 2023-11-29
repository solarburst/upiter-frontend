'use client';

import Cookies from 'js-cookie';
import { useTranslations } from 'next-intl';
import { useEffect, useTransition } from 'react';
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';

import { settingsSlice } from '@/entities';
import { usePathname } from '@/navigation';
import { Currency } from '@/shared/api/types';
import { useAppSelector, useAsyncRouter, useIsMobile } from '@/shared/hooks';
import { CloseIcon, DropdownOption } from '@/shared/ui';

import * as S from './HeaderModal.style';
import { HeaderModalProps } from './HeaderModal.types';

export const HeaderModal: React.FC<HeaderModalProps> = ({ isOpen, onClose, navItems, languages }) => {
    const router = useAsyncRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const t = useTranslations('Common');

    const isMobile = useIsMobile();
    const dispatch = useDispatch();
    const currencies = useAppSelector<Currency[]>((state) => state.settings.currencies);
    const selectedCurrency = useAppSelector<number>((state) => state.settings.selectedCurrency);

    const currenciesOptions = currencies.map((currency) => ({
        value: currency.name,
        label: <span>{currency.name}</span>,
        id: currency.id,
    }));

    const selectedCurrencyValue = currenciesOptions.find((item) => item.id === selectedCurrency);

    const selectedLanguage = languages.find((language) => language.locale === Cookies.get('NEXT_LOCALE'));

    const handleCurrencyChange = (option: DropdownOption) => {
        dispatch(settingsSlice.actions.setSelectedCurrency(option.id));
        Cookies.set('SELECTED_CURRENCY', option.id.toString());
    };

    const handleLanguageChange = (option: DropdownOption) => {
        if (!isPending) {
            const nextLocale = option.locale;
            startTransition(() => {
                Cookies.set('NEXT_LOCALE', nextLocale!);
                router.push(pathname, { scroll: false, locale: nextLocale });
            });
        }
    };

    useEffect(() => {
        if (typeof document !== undefined) {
            document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
        }
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
                <S.ModalNavigation items={navItems} vertical={true} handleModal={handleClose} />
                <S.ModalDropdown
                    options={languages}
                    value={selectedLanguage?.value}
                    onChange={handleLanguageChange}
                    disabled={!router.isReady}
                />
                <S.CurrencyDropdown options={currenciesOptions} value={selectedCurrencyValue?.value} onChange={handleCurrencyChange} />
                <S.Line />
                <S.ModalSocials />
                <S.ModalButton>{t('contacts.writeTo', { method: 'WhatsApp' })}</S.ModalButton>
            </S.ModalContent>
        </ReactModal>
    );
};
