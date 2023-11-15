'use client';

import { Container, SimilarProductCard } from '@/shared/ui';

import * as S from './SimilarProducts.style';

export const SimilarProducts: React.FC = () => {
    const products = [
        {
            name: 'Небольшое название',
            price: '25 000 Р',
            images: [
                {
                    src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1701043200&Signature=R32nY3VuHORHu29DVSkG5CdMlHGz7mRCV8kNcq8sxl1xfBcJQr~TnjmqqIh8hRemwb6sbdll08tl~UZCFCPwshOn9inyMkkL9jkeG-CI1y261MAj-WJ0y~PaW7digwE-yBFGiq2XGycz6QjUUJjcaZ-lmkFkjq7lF1XRj~2QTQyZ76n~Wq1aqnCSoKxE1EHhB2hnB6QmvYQmD4XXpJPoh9ArsItGQV5LiXBR4PYMJahozwGebmVrJfVICXxoPRhQN7svki8D~kKJMl0WcTKJONC8RfAjgVwfWd06ZCzLX4Rbw8-rLdXDLEGSG~SOLt1~-aFbK4osYCNHg6qchkE0gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                },
                {
                    src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1701043200&Signature=R32nY3VuHORHu29DVSkG5CdMlHGz7mRCV8kNcq8sxl1xfBcJQr~TnjmqqIh8hRemwb6sbdll08tl~UZCFCPwshOn9inyMkkL9jkeG-CI1y261MAj-WJ0y~PaW7digwE-yBFGiq2XGycz6QjUUJjcaZ-lmkFkjq7lF1XRj~2QTQyZ76n~Wq1aqnCSoKxE1EHhB2hnB6QmvYQmD4XXpJPoh9ArsItGQV5LiXBR4PYMJahozwGebmVrJfVICXxoPRhQN7svki8D~kKJMl0WcTKJONC8RfAjgVwfWd06ZCzLX4Rbw8-rLdXDLEGSG~SOLt1~-aFbK4osYCNHg6qchkE0gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                },
                {
                    src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1701043200&Signature=R32nY3VuHORHu29DVSkG5CdMlHGz7mRCV8kNcq8sxl1xfBcJQr~TnjmqqIh8hRemwb6sbdll08tl~UZCFCPwshOn9inyMkkL9jkeG-CI1y261MAj-WJ0y~PaW7digwE-yBFGiq2XGycz6QjUUJjcaZ-lmkFkjq7lF1XRj~2QTQyZ76n~Wq1aqnCSoKxE1EHhB2hnB6QmvYQmD4XXpJPoh9ArsItGQV5LiXBR4PYMJahozwGebmVrJfVICXxoPRhQN7svki8D~kKJMl0WcTKJONC8RfAjgVwfWd06ZCzLX4Rbw8-rLdXDLEGSG~SOLt1~-aFbK4osYCNHg6qchkE0gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                },
                {
                    src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1701043200&Signature=R32nY3VuHORHu29DVSkG5CdMlHGz7mRCV8kNcq8sxl1xfBcJQr~TnjmqqIh8hRemwb6sbdll08tl~UZCFCPwshOn9inyMkkL9jkeG-CI1y261MAj-WJ0y~PaW7digwE-yBFGiq2XGycz6QjUUJjcaZ-lmkFkjq7lF1XRj~2QTQyZ76n~Wq1aqnCSoKxE1EHhB2hnB6QmvYQmD4XXpJPoh9ArsItGQV5LiXBR4PYMJahozwGebmVrJfVICXxoPRhQN7svki8D~kKJMl0WcTKJONC8RfAjgVwfWd06ZCzLX4Rbw8-rLdXDLEGSG~SOLt1~-aFbK4osYCNHg6qchkE0gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
                    src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1701043200&Signature=R32nY3VuHORHu29DVSkG5CdMlHGz7mRCV8kNcq8sxl1xfBcJQr~TnjmqqIh8hRemwb6sbdll08tl~UZCFCPwshOn9inyMkkL9jkeG-CI1y261MAj-WJ0y~PaW7digwE-yBFGiq2XGycz6QjUUJjcaZ-lmkFkjq7lF1XRj~2QTQyZ76n~Wq1aqnCSoKxE1EHhB2hnB6QmvYQmD4XXpJPoh9ArsItGQV5LiXBR4PYMJahozwGebmVrJfVICXxoPRhQN7svki8D~kKJMl0WcTKJONC8RfAjgVwfWd06ZCzLX4Rbw8-rLdXDLEGSG~SOLt1~-aFbK4osYCNHg6qchkE0gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
                    src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1701043200&Signature=R32nY3VuHORHu29DVSkG5CdMlHGz7mRCV8kNcq8sxl1xfBcJQr~TnjmqqIh8hRemwb6sbdll08tl~UZCFCPwshOn9inyMkkL9jkeG-CI1y261MAj-WJ0y~PaW7digwE-yBFGiq2XGycz6QjUUJjcaZ-lmkFkjq7lF1XRj~2QTQyZ76n~Wq1aqnCSoKxE1EHhB2hnB6QmvYQmD4XXpJPoh9ArsItGQV5LiXBR4PYMJahozwGebmVrJfVICXxoPRhQN7svki8D~kKJMl0WcTKJONC8RfAjgVwfWd06ZCzLX4Rbw8-rLdXDLEGSG~SOLt1~-aFbK4osYCNHg6qchkE0gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
                    src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1701043200&Signature=R32nY3VuHORHu29DVSkG5CdMlHGz7mRCV8kNcq8sxl1xfBcJQr~TnjmqqIh8hRemwb6sbdll08tl~UZCFCPwshOn9inyMkkL9jkeG-CI1y261MAj-WJ0y~PaW7digwE-yBFGiq2XGycz6QjUUJjcaZ-lmkFkjq7lF1XRj~2QTQyZ76n~Wq1aqnCSoKxE1EHhB2hnB6QmvYQmD4XXpJPoh9ArsItGQV5LiXBR4PYMJahozwGebmVrJfVICXxoPRhQN7svki8D~kKJMl0WcTKJONC8RfAjgVwfWd06ZCzLX4Rbw8-rLdXDLEGSG~SOLt1~-aFbK4osYCNHg6qchkE0gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
                    src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1701043200&Signature=R32nY3VuHORHu29DVSkG5CdMlHGz7mRCV8kNcq8sxl1xfBcJQr~TnjmqqIh8hRemwb6sbdll08tl~UZCFCPwshOn9inyMkkL9jkeG-CI1y261MAj-WJ0y~PaW7digwE-yBFGiq2XGycz6QjUUJjcaZ-lmkFkjq7lF1XRj~2QTQyZ76n~Wq1aqnCSoKxE1EHhB2hnB6QmvYQmD4XXpJPoh9ArsItGQV5LiXBR4PYMJahozwGebmVrJfVICXxoPRhQN7svki8D~kKJMl0WcTKJONC8RfAjgVwfWd06ZCzLX4Rbw8-rLdXDLEGSG~SOLt1~-aFbK4osYCNHg6qchkE0gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
                    src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1701043200&Signature=R32nY3VuHORHu29DVSkG5CdMlHGz7mRCV8kNcq8sxl1xfBcJQr~TnjmqqIh8hRemwb6sbdll08tl~UZCFCPwshOn9inyMkkL9jkeG-CI1y261MAj-WJ0y~PaW7digwE-yBFGiq2XGycz6QjUUJjcaZ-lmkFkjq7lF1XRj~2QTQyZ76n~Wq1aqnCSoKxE1EHhB2hnB6QmvYQmD4XXpJPoh9ArsItGQV5LiXBR4PYMJahozwGebmVrJfVICXxoPRhQN7svki8D~kKJMl0WcTKJONC8RfAjgVwfWd06ZCzLX4Rbw8-rLdXDLEGSG~SOLt1~-aFbK4osYCNHg6qchkE0gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
                    <S.Heading>Похожие товары</S.Heading>
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
