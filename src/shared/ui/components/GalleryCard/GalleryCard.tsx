import * as S from './GalleryCard.style';

export const GalleryCard: React.FC = () => {
    return (
        <S.Root>
            <S.Background
                src={`https://s3-alpha-sig.figma.com/img/de7d/6d0e/fb5610e796986766f2c2a1d514f1b88d?Expires=1699833600&Signature=ewlLA4zrvi2zQvOm68xhUbeT~kfC0yY4k4YZKVNONG6fb73rKE80ZoEEZFxEhmTKVHsesDnPi3WrPVwUtrL71GN676LT-KQLuotiLE3~sl3eH2p0zUz8ZCPxLuD8UCcHALrmIgYN7~bgTVZ-S0aOPAUV5jAHQsOa1guOreIis2~bCIzDnh25pAzQ-NLnAHC9sjB3az3-OWyMEs2qj7A2-2Pir4XgKEWa7ci4fZ9~i5yNsWXscM1TB3lWVnS7rV08j2~7CVHpJqIb9DC~a01ZW1kN3vwOSwpaaLsqSQV5Z~BsqvSdTxarYA3aqvIkDh52sCOUe138cfyu7yn7kG91YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
                width={384}
                height={384}
                alt={''}
            />
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
