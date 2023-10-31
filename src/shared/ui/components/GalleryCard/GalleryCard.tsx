import * as S from './GalleryCard.style';
import { GalleryCardProps } from './GalleryCard.types';

export const GalleryCard: React.FC<GalleryCardProps> = ({ src }) => {
    return (
        <S.Root>
            <S.Background src={src} width={384} height={384} alt={''} />
            <S.Content>
                <S.AuthorImage
                    src={`https://s3-alpha-sig.figma.com/img/51b4/1f20/db95c385c8df9dbc1cafee5ea93687e3?Expires=1699833600&Signature=eDjjWSZSETUOPDhrBFdQjM6~-g39nsNGF3Jkfw0Xukj2rVlCXjwE9qaGXBh6s1bcJe8ViwMBCq-3cqjwSbkY2jQe-OH7m8DdQKDNfr~ooYUOrjx~D4MrrPwe7HXzU5aALY6MzAZxQEkpmRHYmpokd6pt8wdcOLYtIkqKusRupNGhBo~Jd~Tpmu60IcN~aKilioaeCJobBJqNtV1lkcNfw9TxL7FoJI~M4EOpcy8xOF8x2dIaPMlHCFBJGYBxzebx~Xm9mQS82OeRiej6fDg6kjpi2VY8YRZA1g3wMBLaRTXMctwlqxIg2DT0Ta1LhLueAfXgVJx7~PQImnwXH7C2lw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
                    width={56}
                    height={56}
                    alt={''}
                />
                <S.Text>loremipsum</S.Text>
            </S.Content>
        </S.Root>
    );
};
