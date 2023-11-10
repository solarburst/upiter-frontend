import { useIsMobile } from '@/shared/hooks';

import * as S from './Feedback.style';
import { FeedbackCardProps } from './Feedback.types';

export const FeedbackCard: React.FC<FeedbackCardProps> = ({ src }) => {
    const isMobile = useIsMobile();

    return (
        <S.Root>
            <S.Background src={src} width={isMobile ? 280 : 282} height={isMobile ? 496 : 500} alt={''} />
        </S.Root>
    );
};
