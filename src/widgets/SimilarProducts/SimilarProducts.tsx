'use client';

import { Container, DefaultTitle, SimilarProductCard } from '@/shared/ui';

import * as S from './SimilarProducts.style';

export const SimilarProducts: React.FC = () => {
    const products = [
        {
            name: 'Небольшое название',
            price: '25 000 Р',
            images: [
                {
                    src: 'https://s3-alpha-sig.figma.com/img/55f4/0732/4c35c22e64a9c15dad22dd4f1de68061?Expires=1699833600&Signature=jU3mztBDF0NnquhB6THsF2R7XWy5os6wEb7eKX-5bpV3SDqsdqvc51vYhYYN45OGHrimmf1m3b2VnhwSBqK3K0oSMjrR2Nd4qzuMq1YsWeA7-7-BBFjZEUNcI7Snvm2ARMozft84Tj0ESCe-MnlcyVWivzdJ7JBXd~5s1PCPTicrhskqcNRe8RZIO7YzA7SVM10~cE1XyPts-mSfTvedc8t3gUoJVQ7m4M6LC4mvladAqfPH-~~pD97VycIg7tDEAEgItqSjvnVwM4vjcjiC4qGZx2nnlPVcPPVzbTQXuaETubY5PZyN2lhjfd2ShV10d8Qw-FFMy0WNrhlcBdkS-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                },
                {
                    src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1699833600&Signature=e55w9nuUeFJfQJBu1llPaTxYYYnD15XKf4vRd3KvkOpBpUHI0LOEKn2Hp4wfQ~VqAovkqoPckaiPvn1X3gV43WsWxRkl1F2GqABFsfRgcP3kVSVZMgymIIt9FvogwB-YccZK-RtfMMko6q-gFcBmoVUw7rtsUZr~tldFl4WX1qvoblVzKL--dogZY7Jfzl3zoaT9pTqtp~eObWX8HV4frvUkpcVVi08Ii7IptFnEWsO8KZiNeWFpEJmO6eSwargjj5G3ZLDM7nCrIeIRwz1u~464AwDEcH51a3oLFXog9VQK-vidAP1tX9at4bqjMuQh7rmzQHC6YWncENBsJ8mWWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                },
                {
                    src: 'https://s3-alpha-sig.figma.com/img/6bf3/ef81/ea5a5500c2251f763e55fd1e427c1e29?Expires=1699833600&Signature=Vj7ZuLteSVP-Hpkg9SPAhKAtbmmAeGag6HNCYp-8Z6X0HIFXYkhUTqRt0SbQGvYJnvt~Jx2jr6acKOcHLl8rSXWILkQXtrFEK16FOsg-JSfScVVKXEzpxS~ESzB8Y-rWiBiwL7RCvhqLVjtLno~upIcIVlJcyKxZrOq9AlRx-f1ZuCuNImvqXYeDkw3CK0ebzvkB4SlwUB1f9QC~9A8TloeEKMKoCpIzvJwnWyIOc3EOH44gYOThaPiVt66Dq9jn542Owy0vYhoI5wolWnzqr9UFzkX~4H3TGxJBYJC4-10OotONkf2JZBNJtChApmbsYket5-4dp5k-rz~b7Hv7Ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                },
                {
                    src: 'https://s3-alpha-sig.figma.com/img/c66b/517e/4ad82b9f2a3ba946f2140be7916282b3?Expires=1699833600&Signature=Veazd5YmfHSWQFAuPmyqf3n2vPQ46Jm589~7onxSGCoMAfaQ2enRPOE-ce9ZonCJ~vwss42DJuFNAddF4y3b7fNLBuOKURkVHYfuzzKyx~D7NDdEs7zUDt6tmn7guKUEg10krXHwV1TovmVS~D-NLcqC9EBMFPJnqvK-z2VxGppULVSC8SBa2CkYX3qM4olkm5w59kgT-hLNdzHaib51a-0FQJRIXwe27NyCGAg28rPyqglEjZzb9l7euZP5SeY636y9rZUbGGlhbhP8JpKYOzl4rRx~N6Zi-nA3bcuA06eN00Sp8gaIYJ62aU1SUmUSsAh2kV4S3ZYLHfgxnJ0PUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                },
            ],
            categories: [1, 3],
            id: 1,
        },
        {
            name: 'Небольшое название',
            price: '25 000 Р',
            images: [
                {
                    src: 'https://s3-alpha-sig.figma.com/img/3317/6ce6/91adbdedc25885c9b94554d3f36b5942?Expires=1699833600&Signature=SXxfLIB9-TG8zhKPVqt8Ke2UhpTVw2v-mpFZxTIXMMHMa2zEqQPPWF~MorR63sSJF8g4TdlaLiMY8Rpa7qc7T2~jeVT72W6HEMxTAcKxFhSryKMyzjd9pR-afGVTvNx2gxEdBpIVbVlVbZGsgWGfd4SYTPoftSrfnwcVspBDt3NP6lyds1dQVwy-Btup~0v1oAq6~W7aNaZARM2Xn-KgDD2CyFwb2PLnoR3eLt7z3Wh-yXLFMGyM~GZw46zJOVKv9PZMA2Omktr4FF5FUFDRhSC3YTilsdqI57FsGP7R~MjnGkroN42tahi-AfeKZhKbU9kuSuhjlQaowqFSKsh8EA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                },
            ],
            categories: [2, 4],
            id: 2,
        },
        {
            name: 'Небольшое название',
            price: '25 000 Р',
            images: [
                {
                    src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1699833600&Signature=e55w9nuUeFJfQJBu1llPaTxYYYnD15XKf4vRd3KvkOpBpUHI0LOEKn2Hp4wfQ~VqAovkqoPckaiPvn1X3gV43WsWxRkl1F2GqABFsfRgcP3kVSVZMgymIIt9FvogwB-YccZK-RtfMMko6q-gFcBmoVUw7rtsUZr~tldFl4WX1qvoblVzKL--dogZY7Jfzl3zoaT9pTqtp~eObWX8HV4frvUkpcVVi08Ii7IptFnEWsO8KZiNeWFpEJmO6eSwargjj5G3ZLDM7nCrIeIRwz1u~464AwDEcH51a3oLFXog9VQK-vidAP1tX9at4bqjMuQh7rmzQHC6YWncENBsJ8mWWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                },
            ],
            categories: [1],
            id: 3,
        },
        {
            name: 'Небольшое название',
            price: '25 000 Р',
            images: [
                {
                    src: 'https://s3-alpha-sig.figma.com/img/6bf3/ef81/ea5a5500c2251f763e55fd1e427c1e29?Expires=1699833600&Signature=Vj7ZuLteSVP-Hpkg9SPAhKAtbmmAeGag6HNCYp-8Z6X0HIFXYkhUTqRt0SbQGvYJnvt~Jx2jr6acKOcHLl8rSXWILkQXtrFEK16FOsg-JSfScVVKXEzpxS~ESzB8Y-rWiBiwL7RCvhqLVjtLno~upIcIVlJcyKxZrOq9AlRx-f1ZuCuNImvqXYeDkw3CK0ebzvkB4SlwUB1f9QC~9A8TloeEKMKoCpIzvJwnWyIOc3EOH44gYOThaPiVt66Dq9jn542Owy0vYhoI5wolWnzqr9UFzkX~4H3TGxJBYJC4-10OotONkf2JZBNJtChApmbsYket5-4dp5k-rz~b7Hv7Ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                },
            ],
            categories: [1, 5],
            id: 4,
        },
        {
            name: 'Небольшое название',
            price: '25 000 Р',
            images: [
                {
                    src: 'https://s3-alpha-sig.figma.com/img/63ce/9415/0dfdb1ac931e2383eac88e51daf77d78?Expires=1699833600&Signature=K1ep~IbzX68Y6HUbwxRE1-uqQKBGShGS52pazG5DNnIuzlRUr0gSAc6MTBzsPnK7O6loIMvtMwz-0jallk-f86pLHwNMxLpeo5Zbk9KqWuu9bMC75-EFqXdEWQBPgbttM~OuwsOSkC9ZifhgGzxhjJM4zl1tmnWT5421iGNcqqiPKwyRugK2NvxD1TM767-Gs7Oue4C4K4NnjHpkl2Y0U8iDip0~sjyBN9yBq8lga~~DJmiksZLoo4FBdfO5u6ANWBqtofE4R1tdDb7ycB12RoktXTSWghdEtEsf8l9Ul5l6IkvtUelxujZNB2suiI9OsehSq~YBsDiX7ZnEMILfVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                },
            ],
            categories: [4],
            id: 5,
        },
        {
            name: 'Небольшое название',
            price: '25 000 Р',
            images: [
                {
                    src: 'https://s3-alpha-sig.figma.com/img/7bd0/6fbb/34f99384e96bec6d86a21bd1b9bda40d?Expires=1699833600&Signature=ekhMpgiuDj3XMZ9SRa7rzpX3l~RSWW8dqAkkU8-LR9Lm6LzeuvZdZe~xFuV6tIQm8Km0jREa7wZY7pXkdGNy4KPT~~NaYv5S0NodREYq14Yw~KU5W4HHkLu5QXuNxKfyVTfeDtpncYOXoKKjC0UQdqlD6q3Vqf5UzAv0dme2ztGeKOt6SLr4OGaIEXxPbmzcs7PbSbOw6eItuHaKhL9lJetz1mJs9qtzu8RrwwwuGs9ioMGjh~XWkseyOXlCVwHxM4fw1~j1Z1ID~wcNAwT~8Rcq0sC3vSJYeVpT~O4yGpMGYESmPFuO~wwdF~0wPlrzc1mx7OwIbTZcMogwbwA4Ow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                },
            ],
            categories: [4, 5],
            id: 6,
        },
    ];

    return (
        <S.Root>
            <Container>
                <S.Title>
                    <DefaultTitle>Похожие товары</DefaultTitle>
                </S.Title>
                <S.Products slidesPerView={4}>
                    {products.map((item) => (
                        <SimilarProductCard src={item.images[0].src} name={item.name} price={item.price} key={item.id} />
                    ))}
                </S.Products>
            </Container>
        </S.Root>
    );
};
