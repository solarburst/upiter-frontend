import { useIsMobile } from '@/shared/hooks';

import * as S from './SimilarProductCard.style';
import { SimilarProductCardProps } from './SimilarProductCard.types';

export const SimilarProductCard: React.FC<SimilarProductCardProps> = ({ src, name, price }) => {
    const isMobile = useIsMobile();

    return (
        <S.Root>
            <S.SimilarProductImage>
                <S.Background src={src} width={isMobile ? 280 : 282} height={440} alt={''} />
            </S.SimilarProductImage>
            <S.Name>{name}</S.Name>
            <S.Price>{price}</S.Price>
        </S.Root>
    );
};
