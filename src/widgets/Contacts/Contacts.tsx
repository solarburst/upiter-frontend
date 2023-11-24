'use client';

import { useTranslations } from 'next-intl';

import { Container, UnderlinedTitle } from '@/shared/ui';

import * as S from './Contacts.style';

export const Contacts: React.FC = () => {
    const t = useTranslations('Common');

    return (
        <S.Root>
            <Container>
                <S.Content>
                    <UnderlinedTitle>{t('contacts.title')}</UnderlinedTitle>
                    <S.Caption>{t('contacts.subtitle')}</S.Caption>
                    <S.SocialsList />
                    <S.ContactButton>{t('contacts.writeTo', { method: 'WhatsApp' })}</S.ContactButton>
                </S.Content>
            </Container>
        </S.Root>
    );
};
