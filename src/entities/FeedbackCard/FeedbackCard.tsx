import { getImageUrl } from '@/shared/lib';

import * as S from './FeedbackCard.style';
import { FeedbackCardProps } from './FeedbackCard.types';

export const FeedbackCard: React.FC<FeedbackCardProps> = ({ src }) => {
    return (
        <S.Root>
            <S.Background src={getImageUrl(src)} width={282} height={500} alt={''} />
        </S.Root>
    );
};
