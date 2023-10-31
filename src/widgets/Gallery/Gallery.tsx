'use client';

import { Container, GalleryCard, UnderlinedTitle } from '@/shared/ui';

import * as S from './Gallery.style';
// import { GalleryOption, GalleryProps } from './Gallery.types';

export const Gallery: React.FC = () => {
    const gallery = [
        {
            id: 1,
            image: 'https://s3-alpha-sig.figma.com/img/de7d/6d0e/fb5610e796986766f2c2a1d514f1b88d?Expires=1699833600&Signature=ewlLA4zrvi2zQvOm68xhUbeT~kfC0yY4k4YZKVNONG6fb73rKE80ZoEEZFxEhmTKVHsesDnPi3WrPVwUtrL71GN676LT-KQLuotiLE3~sl3eH2p0zUz8ZCPxLuD8UCcHALrmIgYN7~bgTVZ-S0aOPAUV5jAHQsOa1guOreIis2~bCIzDnh25pAzQ-NLnAHC9sjB3az3-OWyMEs2qj7A2-2Pir4XgKEWa7ci4fZ9~i5yNsWXscM1TB3lWVnS7rV08j2~7CVHpJqIb9DC~a01ZW1kN3vwOSwpaaLsqSQV5Z~BsqvSdTxarYA3aqvIkDh52sCOUe138cfyu7yn7kG91YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 2,
            image: 'https://s3-alpha-sig.figma.com/img/de7d/6d0e/fb5610e796986766f2c2a1d514f1b88d?Expires=1699833600&Signature=ewlLA4zrvi2zQvOm68xhUbeT~kfC0yY4k4YZKVNONG6fb73rKE80ZoEEZFxEhmTKVHsesDnPi3WrPVwUtrL71GN676LT-KQLuotiLE3~sl3eH2p0zUz8ZCPxLuD8UCcHALrmIgYN7~bgTVZ-S0aOPAUV5jAHQsOa1guOreIis2~bCIzDnh25pAzQ-NLnAHC9sjB3az3-OWyMEs2qj7A2-2Pir4XgKEWa7ci4fZ9~i5yNsWXscM1TB3lWVnS7rV08j2~7CVHpJqIb9DC~a01ZW1kN3vwOSwpaaLsqSQV5Z~BsqvSdTxarYA3aqvIkDh52sCOUe138cfyu7yn7kG91YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 3,
            image: 'https://s3-alpha-sig.figma.com/img/de7d/6d0e/fb5610e796986766f2c2a1d514f1b88d?Expires=1699833600&Signature=ewlLA4zrvi2zQvOm68xhUbeT~kfC0yY4k4YZKVNONG6fb73rKE80ZoEEZFxEhmTKVHsesDnPi3WrPVwUtrL71GN676LT-KQLuotiLE3~sl3eH2p0zUz8ZCPxLuD8UCcHALrmIgYN7~bgTVZ-S0aOPAUV5jAHQsOa1guOreIis2~bCIzDnh25pAzQ-NLnAHC9sjB3az3-OWyMEs2qj7A2-2Pir4XgKEWa7ci4fZ9~i5yNsWXscM1TB3lWVnS7rV08j2~7CVHpJqIb9DC~a01ZW1kN3vwOSwpaaLsqSQV5Z~BsqvSdTxarYA3aqvIkDh52sCOUe138cfyu7yn7kG91YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 4,
            image: 'https://s3-alpha-sig.figma.com/img/de7d/6d0e/fb5610e796986766f2c2a1d514f1b88d?Expires=1699833600&Signature=ewlLA4zrvi2zQvOm68xhUbeT~kfC0yY4k4YZKVNONG6fb73rKE80ZoEEZFxEhmTKVHsesDnPi3WrPVwUtrL71GN676LT-KQLuotiLE3~sl3eH2p0zUz8ZCPxLuD8UCcHALrmIgYN7~bgTVZ-S0aOPAUV5jAHQsOa1guOreIis2~bCIzDnh25pAzQ-NLnAHC9sjB3az3-OWyMEs2qj7A2-2Pir4XgKEWa7ci4fZ9~i5yNsWXscM1TB3lWVnS7rV08j2~7CVHpJqIb9DC~a01ZW1kN3vwOSwpaaLsqSQV5Z~BsqvSdTxarYA3aqvIkDh52sCOUe138cfyu7yn7kG91YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
    ];

    return (
        <S.Root>
            <Container>
                <S.Title>
                    <UnderlinedTitle>Галерея</UnderlinedTitle>
                    <S.TitleDescription>фотографии наших покупателей</S.TitleDescription>
                </S.Title>
                <S.Gallery>
                    {gallery.map((item) => (
                        <GalleryCard src={item.image} key={item.id} />
                    ))}
                </S.Gallery>
            </Container>
        </S.Root>
    );
};
