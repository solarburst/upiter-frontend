'use client';

import { Container } from '@/shared/ui';

import * as S from './Title.style';

export const Title: React.FC = () => {
    return (
        <S.Root>
            <Container>
                <S.Content>
                    <S.Heading>Хвосты русалки</S.Heading>
                    <S.Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doese eius tempor incididunt ut labore et dolore
                    </S.Paragraph>
                    <S.OrderButton>Заказать</S.OrderButton>
                </S.Content>
            </Container>
        </S.Root>
    );
};
