import { useTranslations } from 'next-intl';

import { Product } from '@/shared/api/types';
import { useAppSelector, useCurrency } from '@/shared/hooks';
import { getImageUrl } from '@/shared/lib';

import * as S from './OrderCard.style';
import { OrderCardProps } from './OrderCard.types';

export const OrderCard: React.FC<OrderCardProps> = () => {
    const t = useTranslations('Order');
    const product = useAppSelector<Product | null>((state) => state.product.product);
    const size = useAppSelector<string | null>((state) => state.product.size);
    const selectedCurrency = useAppSelector<number>((state) => state.settings.selectedCurrency);
    const price = useCurrency(product?.prices || [], selectedCurrency);

    return (
        <S.Root>
            {product && (
                <>
                    <S.Product>
                        <S.CardImage src={getImageUrl(product.images[0])} width={80} height={106} alt="" />
                        <S.Info>
                            <S.InfoBlock>
                                <S.Name>{product.name}</S.Name>
                                <S.Information>{product.short_description}</S.Information>
                            </S.InfoBlock>
                            <S.InfoBlock>{size && <S.Information>{`${t('size')}: ${size}`}</S.Information>}</S.InfoBlock>
                        </S.Info>
                    </S.Product>
                    <S.Price>{price}</S.Price>
                </>
            )}
        </S.Root>
    );
};
