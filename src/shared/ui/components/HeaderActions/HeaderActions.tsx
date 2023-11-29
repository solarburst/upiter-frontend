'use client';

import Cookies from 'js-cookie';
import React, { useTransition } from 'react';
import { useDispatch } from 'react-redux';

import { settingsSlice } from '@/entities';
import { usePathname } from '@/navigation';
import { Currency } from '@/shared/api/types';
import { useAppSelector, useAsyncRouter } from '@/shared/hooks';
import { DropdownOption } from '@/shared/ui';

import * as S from './HeaderActions.style';
import { HeaderActionsProps } from './HeaderActions.types';

export const HeaderActions: React.FC<HeaderActionsProps> = ({ isTablet, languages }) => {
    const router = useAsyncRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

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

    return (
        <S.Root>
            {!isTablet && <S.LanguageSelect options={languages} value={selectedLanguage!.value} onChange={handleLanguageChange} />}
            {!isTablet && <S.ActionsSeparator />}
            {!isTablet && currenciesOptions.length > 0 && (
                <S.CurrencySelect
                    options={currenciesOptions}
                    trigger={currenciesOptions[0].value}
                    value={selectedCurrencyValue?.value}
                    onChange={handleCurrencyChange}
                    disabled={!router.isReady}
                />
            )}
            {/* {!isTablet && <S.ActionsSeparator />} */}
            {/* <S.ActionButton>
                <CartIcon />
                {!isTablet && t('cart.cart')}
            </S.ActionButton> */}
        </S.Root>
    );
};
