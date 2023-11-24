'use client';

import { useTranslations } from 'next-intl';

import { FeedbackCard } from '@/entities';
import { FeedbackItem } from '@/shared/api/types';
import { useAppSelector } from '@/shared/hooks';

import * as S from './Feedback.style';
import { FeedbackProps } from './Feedback.types';

export const Feedback: React.FC<FeedbackProps> = ({ title }) => {
    const t = useTranslations('Common');
    const feedback = useAppSelector<FeedbackItem[]>((state) => state.feedback.feedback);

    return (
        <S.StyledPageSection titleType={title} title={t('reviews.title')}>
            <S.Reviews slidesPerView={4}>
                {feedback.map((item) => (
                    <FeedbackCard src={item.image} key={item.id} />
                ))}
            </S.Reviews>
        </S.StyledPageSection>
    );
};
