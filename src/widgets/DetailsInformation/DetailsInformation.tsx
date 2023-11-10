'use client';

import React from 'react';

import { Container, DetailsInfo, DetailsSwiper } from '@/shared/ui';

import * as S from './DetailsInformation.style';

export const DetailsInformation = async () => {
    const gallery = [
        {
            id: 1,
            src: 'https://s3-alpha-sig.figma.com/img/2c51/282b/f0a747b6fb03548fc2698e621db8af34?Expires=1699833600&Signature=Vq86xLt5RKKTERRmt2uUj~~bLArC1VaKLx1pzpSTZTRQH1afRT-seZCqMrn03UGabXUvY5EGWDUDdnYj3tFAWTAJfVZWs3fCJywA4~yry~PxIWsj1C2ZIRZYdJSeRXXYYBTxr2~6FOihGgBK4V0st7fhrkh99GzG9zQrg5-Sgj~Ie6fV~skx5ty06JuFQNUlvPsysjW1k3FYz42NLZc8p~euC61H4fjicEMj88pnLlwuLAV9VNWdyY-GRHU4oadjJ1zHHDErOy5EgLWYjdlev8tfyrdrz7SJ5ATCr9nK4GKmfHtXz1-gtqcJHZ8nlZUj~K2M-VaAsnMAarW2ZM2pfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 2,
            src: 'https://s3-alpha-sig.figma.com/img/de7d/6d0e/fb5610e796986766f2c2a1d514f1b88d?Expires=1699833600&Signature=ewlLA4zrvi2zQvOm68xhUbeT~kfC0yY4k4YZKVNONG6fb73rKE80ZoEEZFxEhmTKVHsesDnPi3WrPVwUtrL71GN676LT-KQLuotiLE3~sl3eH2p0zUz8ZCPxLuD8UCcHALrmIgYN7~bgTVZ-S0aOPAUV5jAHQsOa1guOreIis2~bCIzDnh25pAzQ-NLnAHC9sjB3az3-OWyMEs2qj7A2-2Pir4XgKEWa7ci4fZ9~i5yNsWXscM1TB3lWVnS7rV08j2~7CVHpJqIb9DC~a01ZW1kN3vwOSwpaaLsqSQV5Z~BsqvSdTxarYA3aqvIkDh52sCOUe138cfyu7yn7kG91YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 3,
            src: 'https://s3-alpha-sig.figma.com/img/0a82/9d7b/cd964dde30228c65c35adcf0cd62d381?Expires=1699833600&Signature=Nwz~El9pZB~wQKqXtmLod-ofb4ipqc4gt1s~oRJDLaaHY7R4lFqLX1-yumnmZbniDebOh3WVBxEB7prDdE4ttDYhfE34LusqiKQl5UeB5ka5JaSY6lAcKgGaSClCcgDVQa1VS6GS0Mvqcm-BnEaD1j6uLPsfdZc9rYpgM75XmPJ-0cN-cgFLex7ht2~eg~zOzWrcp85At~Nyk-qmNRRV6ngLyHqx1mquhoyTQRrmYTeBD2NMTpW1FsRhuJHVuLAeSEJ5bf5~LqdWKX5R0ZnbQRkP3RGX-cvH35e2NbnnIMSLbL5JaHRqWGRtIxDjCuFahJZNlEz7ZXpNHItgt6FtaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 4,
            src: 'https://s3-alpha-sig.figma.com/img/de7d/6d0e/fb5610e796986766f2c2a1d514f1b88d?Expires=1699833600&Signature=ewlLA4zrvi2zQvOm68xhUbeT~kfC0yY4k4YZKVNONG6fb73rKE80ZoEEZFxEhmTKVHsesDnPi3WrPVwUtrL71GN676LT-KQLuotiLE3~sl3eH2p0zUz8ZCPxLuD8UCcHALrmIgYN7~bgTVZ-S0aOPAUV5jAHQsOa1guOreIis2~bCIzDnh25pAzQ-NLnAHC9sjB3az3-OWyMEs2qj7A2-2Pir4XgKEWa7ci4fZ9~i5yNsWXscM1TB3lWVnS7rV08j2~7CVHpJqIb9DC~a01ZW1kN3vwOSwpaaLsqSQV5Z~BsqvSdTxarYA3aqvIkDh52sCOUe138cfyu7yn7kG91YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 5,
            src: 'https://s3-alpha-sig.figma.com/img/de7d/6d0e/fb5610e796986766f2c2a1d514f1b88d?Expires=1699833600&Signature=ewlLA4zrvi2zQvOm68xhUbeT~kfC0yY4k4YZKVNONG6fb73rKE80ZoEEZFxEhmTKVHsesDnPi3WrPVwUtrL71GN676LT-KQLuotiLE3~sl3eH2p0zUz8ZCPxLuD8UCcHALrmIgYN7~bgTVZ-S0aOPAUV5jAHQsOa1guOreIis2~bCIzDnh25pAzQ-NLnAHC9sjB3az3-OWyMEs2qj7A2-2Pir4XgKEWa7ci4fZ9~i5yNsWXscM1TB3lWVnS7rV08j2~7CVHpJqIb9DC~a01ZW1kN3vwOSwpaaLsqSQV5Z~BsqvSdTxarYA3aqvIkDh52sCOUe138cfyu7yn7kG91YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 6,
            src: 'https://s3-alpha-sig.figma.com/img/de7d/6d0e/fb5610e796986766f2c2a1d514f1b88d?Expires=1699833600&Signature=ewlLA4zrvi2zQvOm68xhUbeT~kfC0yY4k4YZKVNONG6fb73rKE80ZoEEZFxEhmTKVHsesDnPi3WrPVwUtrL71GN676LT-KQLuotiLE3~sl3eH2p0zUz8ZCPxLuD8UCcHALrmIgYN7~bgTVZ-S0aOPAUV5jAHQsOa1guOreIis2~bCIzDnh25pAzQ-NLnAHC9sjB3az3-OWyMEs2qj7A2-2Pir4XgKEWa7ci4fZ9~i5yNsWXscM1TB3lWVnS7rV08j2~7CVHpJqIb9DC~a01ZW1kN3vwOSwpaaLsqSQV5Z~BsqvSdTxarYA3aqvIkDh52sCOUe138cfyu7yn7kG91YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 7,
            src: 'https://s3-alpha-sig.figma.com/img/de7d/6d0e/fb5610e796986766f2c2a1d514f1b88d?Expires=1699833600&Signature=ewlLA4zrvi2zQvOm68xhUbeT~kfC0yY4k4YZKVNONG6fb73rKE80ZoEEZFxEhmTKVHsesDnPi3WrPVwUtrL71GN676LT-KQLuotiLE3~sl3eH2p0zUz8ZCPxLuD8UCcHALrmIgYN7~bgTVZ-S0aOPAUV5jAHQsOa1guOreIis2~bCIzDnh25pAzQ-NLnAHC9sjB3az3-OWyMEs2qj7A2-2Pir4XgKEWa7ci4fZ9~i5yNsWXscM1TB3lWVnS7rV08j2~7CVHpJqIb9DC~a01ZW1kN3vwOSwpaaLsqSQV5Z~BsqvSdTxarYA3aqvIkDh52sCOUe138cfyu7yn7kG91YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 8,
            src: 'https://s3-alpha-sig.figma.com/img/de7d/6d0e/fb5610e796986766f2c2a1d514f1b88d?Expires=1699833600&Signature=ewlLA4zrvi2zQvOm68xhUbeT~kfC0yY4k4YZKVNONG6fb73rKE80ZoEEZFxEhmTKVHsesDnPi3WrPVwUtrL71GN676LT-KQLuotiLE3~sl3eH2p0zUz8ZCPxLuD8UCcHALrmIgYN7~bgTVZ-S0aOPAUV5jAHQsOa1guOreIis2~bCIzDnh25pAzQ-NLnAHC9sjB3az3-OWyMEs2qj7A2-2Pir4XgKEWa7ci4fZ9~i5yNsWXscM1TB3lWVnS7rV08j2~7CVHpJqIb9DC~a01ZW1kN3vwOSwpaaLsqSQV5Z~BsqvSdTxarYA3aqvIkDh52sCOUe138cfyu7yn7kG91YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 9,
            src: 'https://s3-alpha-sig.figma.com/img/de7d/6d0e/fb5610e796986766f2c2a1d514f1b88d?Expires=1699833600&Signature=ewlLA4zrvi2zQvOm68xhUbeT~kfC0yY4k4YZKVNONG6fb73rKE80ZoEEZFxEhmTKVHsesDnPi3WrPVwUtrL71GN676LT-KQLuotiLE3~sl3eH2p0zUz8ZCPxLuD8UCcHALrmIgYN7~bgTVZ-S0aOPAUV5jAHQsOa1guOreIis2~bCIzDnh25pAzQ-NLnAHC9sjB3az3-OWyMEs2qj7A2-2Pir4XgKEWa7ci4fZ9~i5yNsWXscM1TB3lWVnS7rV08j2~7CVHpJqIb9DC~a01ZW1kN3vwOSwpaaLsqSQV5Z~BsqvSdTxarYA3aqvIkDh52sCOUe138cfyu7yn7kG91YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 10,
            src: 'https://s3-alpha-sig.figma.com/img/de7d/6d0e/fb5610e796986766f2c2a1d514f1b88d?Expires=1699833600&Signature=ewlLA4zrvi2zQvOm68xhUbeT~kfC0yY4k4YZKVNONG6fb73rKE80ZoEEZFxEhmTKVHsesDnPi3WrPVwUtrL71GN676LT-KQLuotiLE3~sl3eH2p0zUz8ZCPxLuD8UCcHALrmIgYN7~bgTVZ-S0aOPAUV5jAHQsOa1guOreIis2~bCIzDnh25pAzQ-NLnAHC9sjB3az3-OWyMEs2qj7A2-2Pir4XgKEWa7ci4fZ9~i5yNsWXscM1TB3lWVnS7rV08j2~7CVHpJqIb9DC~a01ZW1kN3vwOSwpaaLsqSQV5Z~BsqvSdTxarYA3aqvIkDh52sCOUe138cfyu7yn7kG91YA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
    ];

    return (
        <S.Root>
            <Container>
                <S.Information>
                    <DetailsSwiper images={gallery} />
                    <DetailsInfo />
                </S.Information>
            </Container>
        </S.Root>
    );
};
