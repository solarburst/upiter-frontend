'use client';

import { Container, UnderlinedTitle } from '@/shared/ui';

import * as S from './Contacts.style';

export const Contacts: React.FC = () => {
    return (
        <S.Root>
            <Container>
                <S.Content>
                    <UnderlinedTitle>Контакты</UnderlinedTitle>
                    <S.Caption>Подписывайтесь на нас в соцсетях, оставляйте вопросы и отзывы</S.Caption>
                    <S.SocialsList />
                    <S.ContactButton>Написать в WhatsApp</S.ContactButton>
                </S.Content>
            </Container>
        </S.Root>
    );
};
