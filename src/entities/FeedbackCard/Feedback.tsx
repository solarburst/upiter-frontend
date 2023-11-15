import * as S from './Feedback.style';
import { FeedbackCardProps } from './Feedback.types';

export const FeedbackCard: React.FC<FeedbackCardProps> = ({ src }) => {
    return (
        <S.Root>
            <S.Background src={src} width={282} height={500} alt={''} />
        </S.Root>
    );
};
