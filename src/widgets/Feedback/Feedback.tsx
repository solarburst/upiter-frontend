'use client';

import { FeedbackCard } from '@/entities';

import * as S from './Feedback.style';
import { FeedbackProps } from './Feedback.types';

export const Feedback: React.FC<FeedbackProps> = ({ title }) => {
    const feedback = [
        {
            id: 1,
            image: '/storage//products-images/01HFDR4NJJ59E03RAA92MNVGM9.png',
        },
    ];

    return (
        <S.StyledPageSection titleType={title} title="Отзывы">
            <S.Reviews slidesPerView={4}>
                {feedback.map((item) => (
                    <FeedbackCard src={item.image} key={item.id} />
                ))}
            </S.Reviews>
        </S.StyledPageSection>
    );
};
