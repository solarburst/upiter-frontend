'use client';

import { Container } from '@/shared/ui';

import * as S from './Banner.style';
// import { BannerProps } from './Banner.types';

export const Banner: React.FC = () => {
    return (
        <S.Root>
            <S.BackgroundImage src={'/images/main.png'} width={4096} height={2430} alt="" />
            <Container>
                <S.ContentWrapper>
                    <S.Content>
                        <S.Heading>Хвосты русалки</S.Heading>
                        <S.Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doese eius tempor incididunt ut labore et dolore
                        </S.Paragraph>
                        <S.OrderButton>Заказать</S.OrderButton>
                    </S.Content>
                </S.ContentWrapper>
            </Container>
        </S.Root>
    );
};
