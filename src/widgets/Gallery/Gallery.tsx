'use client';

import { GalleryCard } from '@/entities';
import { Container, UnderlinedTitle } from '@/shared/ui';

import * as S from './Gallery.style';
// import { GalleryOption, GalleryProps } from './Gallery.types';

export const Gallery: React.FC = () => {
    const gallery = [
        {
            id: 1,
            image: 'https://s3-alpha-sig.figma.com/img/2c51/282b/f0a747b6fb03548fc2698e621db8af34?Expires=1699833600&Signature=Vq86xLt5RKKTERRmt2uUj~~bLArC1VaKLx1pzpSTZTRQH1afRT-seZCqMrn03UGabXUvY5EGWDUDdnYj3tFAWTAJfVZWs3fCJywA4~yry~PxIWsj1C2ZIRZYdJSeRXXYYBTxr2~6FOihGgBK4V0st7fhrkh99GzG9zQrg5-Sgj~Ie6fV~skx5ty06JuFQNUlvPsysjW1k3FYz42NLZc8p~euC61H4fjicEMj88pnLlwuLAV9VNWdyY-GRHU4oadjJ1zHHDErOy5EgLWYjdlev8tfyrdrz7SJ5ATCr9nK4GKmfHtXz1-gtqcJHZ8nlZUj~K2M-VaAsnMAarW2ZM2pfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            author_image:
                'https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1699833600&Signature=hMAO0MPQGcMqjPmdlAsEoVGEuJbSXhqKXxFMPdZ1zFPZBwkTCWDOP~nSoa38Swi5kf4z3FPmKlznkMYQ2pB9a3lM62bDSh0ThUsP285wQtFLVe84v5ETQVRgedIZ7MG7FQNholzsKEEFNLi0ogQzhlRGCND5n9N1J7GpPHFZzZUryDFw6EM6jVzpKfSaYXqRZZ1p2-EU7iAO1uVcDbB77tB5cilBdc39r3GACzES1w3c~e8~TgDyJaFcVfeJuRmYC~v3djKQrsLyZGuN2KfKacmvwGn28xyRxKn6pRhjz1g-oh9cD~Jlk7rOpzbxJ9AmL-vsBbh0wKCEpgYuTgsXAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            author_name: 'loremipsum',
        },
        {
            id: 2,
            image: 'https://s3-alpha-sig.figma.com/img/de7d/6d0e/fb5610e796986766f2c2a1d514f1b88d?Expires=1699833600&Signature=ewlLA4zrvi2zQvOm68xhUbeT~kfC0yY4k4YZKVNONG6fb73rKE80ZoEEZFxEhmTKVHsesDnPi3WrPVwUtrL71GN676LT-KQLuotiLE3~sl3eH2p0zUz8ZCPxLuD8UCcHALrmIgYN7~bgTVZ-S0aOPAUV5jAHQsOa1guOreIis2~bCIzDnh25pAzQ-NLnAHC9sjB3az3-OWyMEs2qj7A2-2Pir4XgKEWa7ci4fZ9~i5yNsWXscM1TB3lWVnS7rV08j2~7CVHpJqIb9DC~a01ZW1kN3vwOSwpaaLsqSQV5Z~BsqvSdTxarYA3aqvIkDh52sCOUe138cfyu7yn7kG91YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            author_image:
                'https://s3-alpha-sig.figma.com/img/51b4/1f20/db95c385c8df9dbc1cafee5ea93687e3?Expires=1699833600&Signature=eDjjWSZSETUOPDhrBFdQjM6~-g39nsNGF3Jkfw0Xukj2rVlCXjwE9qaGXBh6s1bcJe8ViwMBCq-3cqjwSbkY2jQe-OH7m8DdQKDNfr~ooYUOrjx~D4MrrPwe7HXzU5aALY6MzAZxQEkpmRHYmpokd6pt8wdcOLYtIkqKusRupNGhBo~Jd~Tpmu60IcN~aKilioaeCJobBJqNtV1lkcNfw9TxL7FoJI~M4EOpcy8xOF8x2dIaPMlHCFBJGYBxzebx~Xm9mQS82OeRiej6fDg6kjpi2VY8YRZA1g3wMBLaRTXMctwlqxIg2DT0Ta1LhLueAfXgVJx7~PQImnwXH7C2lw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            author_name: 'loremipsum',
        },
        {
            id: 3,
            image: 'https://s3-alpha-sig.figma.com/img/0a82/9d7b/cd964dde30228c65c35adcf0cd62d381?Expires=1699833600&Signature=Nwz~El9pZB~wQKqXtmLod-ofb4ipqc4gt1s~oRJDLaaHY7R4lFqLX1-yumnmZbniDebOh3WVBxEB7prDdE4ttDYhfE34LusqiKQl5UeB5ka5JaSY6lAcKgGaSClCcgDVQa1VS6GS0Mvqcm-BnEaD1j6uLPsfdZc9rYpgM75XmPJ-0cN-cgFLex7ht2~eg~zOzWrcp85At~Nyk-qmNRRV6ngLyHqx1mquhoyTQRrmYTeBD2NMTpW1FsRhuJHVuLAeSEJ5bf5~LqdWKX5R0ZnbQRkP3RGX-cvH35e2NbnnIMSLbL5JaHRqWGRtIxDjCuFahJZNlEz7ZXpNHItgt6FtaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            author_image:
                'https://s3-alpha-sig.figma.com/img/b263/ae2a/fb120378836111a07a5300c568dee5c5?Expires=1699833600&Signature=cZY7ZjXNf7XNEIHZx6U7l~hnJkB2iRUCYZKT-jT5dtDIH6sifUeCPWipbxU6GhEWa7-UTrlbPWb8GWPn-QDnyWOGEiN8mGE4Knia2LEoIbrkHV-BHXVojY1g~8aI1dU~wV8WKJGB26aGmm53zsUgyP8SptHS3T~eJb3rLS3drqIoMaXA7GHcYZ-RUXXnxIszp66Yz2cVWFhYV5YaQ5HzGpecfVgVFkHkxS~R8JqMikpynXegHm98FK4DfyGKYLHL86y84fSUbTr3lWAqQtJndwMR8uHriyg9KS1k9qlKIWLk4CYWPfe~Gu8FaEUFF9SzXHdyqQUkNnKb0k7Bb2yJ7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            author_name: 'loremipsum',
        },
        {
            id: 4,
            image: 'https://s3-alpha-sig.figma.com/img/de7d/6d0e/fb5610e796986766f2c2a1d514f1b88d?Expires=1699833600&Signature=ewlLA4zrvi2zQvOm68xhUbeT~kfC0yY4k4YZKVNONG6fb73rKE80ZoEEZFxEhmTKVHsesDnPi3WrPVwUtrL71GN676LT-KQLuotiLE3~sl3eH2p0zUz8ZCPxLuD8UCcHALrmIgYN7~bgTVZ-S0aOPAUV5jAHQsOa1guOreIis2~bCIzDnh25pAzQ-NLnAHC9sjB3az3-OWyMEs2qj7A2-2Pir4XgKEWa7ci4fZ9~i5yNsWXscM1TB3lWVnS7rV08j2~7CVHpJqIb9DC~a01ZW1kN3vwOSwpaaLsqSQV5Z~BsqvSdTxarYA3aqvIkDh52sCOUe138cfyu7yn7kG91YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            author_image:
                'https://s3-alpha-sig.figma.com/img/51b4/1f20/db95c385c8df9dbc1cafee5ea93687e3?Expires=1699833600&Signature=eDjjWSZSETUOPDhrBFdQjM6~-g39nsNGF3Jkfw0Xukj2rVlCXjwE9qaGXBh6s1bcJe8ViwMBCq-3cqjwSbkY2jQe-OH7m8DdQKDNfr~ooYUOrjx~D4MrrPwe7HXzU5aALY6MzAZxQEkpmRHYmpokd6pt8wdcOLYtIkqKusRupNGhBo~Jd~Tpmu60IcN~aKilioaeCJobBJqNtV1lkcNfw9TxL7FoJI~M4EOpcy8xOF8x2dIaPMlHCFBJGYBxzebx~Xm9mQS82OeRiej6fDg6kjpi2VY8YRZA1g3wMBLaRTXMctwlqxIg2DT0Ta1LhLueAfXgVJx7~PQImnwXH7C2lw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            author_name: 'loremipsum',
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
                        <GalleryCard src={item.image} author_image={item.author_image} author_name={item.author_name} key={item.id} />
                    ))}
                </S.Gallery>
            </Container>
        </S.Root>
    );
};
