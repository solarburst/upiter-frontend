import * as S from './SimilarProductCard.style';
import { SimilarProductCardProps } from './SimilarProductCard.types';

export const SimilarProductCard: React.FC<SimilarProductCardProps> = ({ src, name, price }) => {
    return (
        <S.Root>
            <S.SimilarProductImage>
                <S.Background src={src} width={282} height={440} alt={''} />
            </S.SimilarProductImage>
            <S.Name>{name}</S.Name>
            <S.Price>{price}</S.Price>
        </S.Root>
    );
};
