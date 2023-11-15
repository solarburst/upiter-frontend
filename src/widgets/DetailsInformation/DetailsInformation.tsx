'use client';

import React from 'react';

import { Container, DetailsInfo, DetailsSwiper } from '@/shared/ui';

import * as S from './DetailsInformation.style';

export const DetailsInformation = () => {
    const gallery = [
        {
            id: 1,
            src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1701043200&Signature=R32nY3VuHORHu29DVSkG5CdMlHGz7mRCV8kNcq8sxl1xfBcJQr~TnjmqqIh8hRemwb6sbdll08tl~UZCFCPwshOn9inyMkkL9jkeG-CI1y261MAj-WJ0y~PaW7digwE-yBFGiq2XGycz6QjUUJjcaZ-lmkFkjq7lF1XRj~2QTQyZ76n~Wq1aqnCSoKxE1EHhB2hnB6QmvYQmD4XXpJPoh9ArsItGQV5LiXBR4PYMJahozwGebmVrJfVICXxoPRhQN7svki8D~kKJMl0WcTKJONC8RfAjgVwfWd06ZCzLX4Rbw8-rLdXDLEGSG~SOLt1~-aFbK4osYCNHg6qchkE0gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 2,
            src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1701043200&Signature=R32nY3VuHORHu29DVSkG5CdMlHGz7mRCV8kNcq8sxl1xfBcJQr~TnjmqqIh8hRemwb6sbdll08tl~UZCFCPwshOn9inyMkkL9jkeG-CI1y261MAj-WJ0y~PaW7digwE-yBFGiq2XGycz6QjUUJjcaZ-lmkFkjq7lF1XRj~2QTQyZ76n~Wq1aqnCSoKxE1EHhB2hnB6QmvYQmD4XXpJPoh9ArsItGQV5LiXBR4PYMJahozwGebmVrJfVICXxoPRhQN7svki8D~kKJMl0WcTKJONC8RfAjgVwfWd06ZCzLX4Rbw8-rLdXDLEGSG~SOLt1~-aFbK4osYCNHg6qchkE0gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 3,
            src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1701043200&Signature=R32nY3VuHORHu29DVSkG5CdMlHGz7mRCV8kNcq8sxl1xfBcJQr~TnjmqqIh8hRemwb6sbdll08tl~UZCFCPwshOn9inyMkkL9jkeG-CI1y261MAj-WJ0y~PaW7digwE-yBFGiq2XGycz6QjUUJjcaZ-lmkFkjq7lF1XRj~2QTQyZ76n~Wq1aqnCSoKxE1EHhB2hnB6QmvYQmD4XXpJPoh9ArsItGQV5LiXBR4PYMJahozwGebmVrJfVICXxoPRhQN7svki8D~kKJMl0WcTKJONC8RfAjgVwfWd06ZCzLX4Rbw8-rLdXDLEGSG~SOLt1~-aFbK4osYCNHg6qchkE0gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 4,
            src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1701043200&Signature=R32nY3VuHORHu29DVSkG5CdMlHGz7mRCV8kNcq8sxl1xfBcJQr~TnjmqqIh8hRemwb6sbdll08tl~UZCFCPwshOn9inyMkkL9jkeG-CI1y261MAj-WJ0y~PaW7digwE-yBFGiq2XGycz6QjUUJjcaZ-lmkFkjq7lF1XRj~2QTQyZ76n~Wq1aqnCSoKxE1EHhB2hnB6QmvYQmD4XXpJPoh9ArsItGQV5LiXBR4PYMJahozwGebmVrJfVICXxoPRhQN7svki8D~kKJMl0WcTKJONC8RfAjgVwfWd06ZCzLX4Rbw8-rLdXDLEGSG~SOLt1~-aFbK4osYCNHg6qchkE0gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 5,
            src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1701043200&Signature=R32nY3VuHORHu29DVSkG5CdMlHGz7mRCV8kNcq8sxl1xfBcJQr~TnjmqqIh8hRemwb6sbdll08tl~UZCFCPwshOn9inyMkkL9jkeG-CI1y261MAj-WJ0y~PaW7digwE-yBFGiq2XGycz6QjUUJjcaZ-lmkFkjq7lF1XRj~2QTQyZ76n~Wq1aqnCSoKxE1EHhB2hnB6QmvYQmD4XXpJPoh9ArsItGQV5LiXBR4PYMJahozwGebmVrJfVICXxoPRhQN7svki8D~kKJMl0WcTKJONC8RfAjgVwfWd06ZCzLX4Rbw8-rLdXDLEGSG~SOLt1~-aFbK4osYCNHg6qchkE0gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 6,
            src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1701043200&Signature=R32nY3VuHORHu29DVSkG5CdMlHGz7mRCV8kNcq8sxl1xfBcJQr~TnjmqqIh8hRemwb6sbdll08tl~UZCFCPwshOn9inyMkkL9jkeG-CI1y261MAj-WJ0y~PaW7digwE-yBFGiq2XGycz6QjUUJjcaZ-lmkFkjq7lF1XRj~2QTQyZ76n~Wq1aqnCSoKxE1EHhB2hnB6QmvYQmD4XXpJPoh9ArsItGQV5LiXBR4PYMJahozwGebmVrJfVICXxoPRhQN7svki8D~kKJMl0WcTKJONC8RfAjgVwfWd06ZCzLX4Rbw8-rLdXDLEGSG~SOLt1~-aFbK4osYCNHg6qchkE0gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 7,
            src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1701043200&Signature=R32nY3VuHORHu29DVSkG5CdMlHGz7mRCV8kNcq8sxl1xfBcJQr~TnjmqqIh8hRemwb6sbdll08tl~UZCFCPwshOn9inyMkkL9jkeG-CI1y261MAj-WJ0y~PaW7digwE-yBFGiq2XGycz6QjUUJjcaZ-lmkFkjq7lF1XRj~2QTQyZ76n~Wq1aqnCSoKxE1EHhB2hnB6QmvYQmD4XXpJPoh9ArsItGQV5LiXBR4PYMJahozwGebmVrJfVICXxoPRhQN7svki8D~kKJMl0WcTKJONC8RfAjgVwfWd06ZCzLX4Rbw8-rLdXDLEGSG~SOLt1~-aFbK4osYCNHg6qchkE0gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 8,
            src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1701043200&Signature=R32nY3VuHORHu29DVSkG5CdMlHGz7mRCV8kNcq8sxl1xfBcJQr~TnjmqqIh8hRemwb6sbdll08tl~UZCFCPwshOn9inyMkkL9jkeG-CI1y261MAj-WJ0y~PaW7digwE-yBFGiq2XGycz6QjUUJjcaZ-lmkFkjq7lF1XRj~2QTQyZ76n~Wq1aqnCSoKxE1EHhB2hnB6QmvYQmD4XXpJPoh9ArsItGQV5LiXBR4PYMJahozwGebmVrJfVICXxoPRhQN7svki8D~kKJMl0WcTKJONC8RfAjgVwfWd06ZCzLX4Rbw8-rLdXDLEGSG~SOLt1~-aFbK4osYCNHg6qchkE0gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 9,
            src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1701043200&Signature=R32nY3VuHORHu29DVSkG5CdMlHGz7mRCV8kNcq8sxl1xfBcJQr~TnjmqqIh8hRemwb6sbdll08tl~UZCFCPwshOn9inyMkkL9jkeG-CI1y261MAj-WJ0y~PaW7digwE-yBFGiq2XGycz6QjUUJjcaZ-lmkFkjq7lF1XRj~2QTQyZ76n~Wq1aqnCSoKxE1EHhB2hnB6QmvYQmD4XXpJPoh9ArsItGQV5LiXBR4PYMJahozwGebmVrJfVICXxoPRhQN7svki8D~kKJMl0WcTKJONC8RfAjgVwfWd06ZCzLX4Rbw8-rLdXDLEGSG~SOLt1~-aFbK4osYCNHg6qchkE0gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        },
        {
            id: 10,
            src: 'https://s3-alpha-sig.figma.com/img/6a9c/0997/3111584cc32c4e819c90bd2a833fb6f2?Expires=1701043200&Signature=R32nY3VuHORHu29DVSkG5CdMlHGz7mRCV8kNcq8sxl1xfBcJQr~TnjmqqIh8hRemwb6sbdll08tl~UZCFCPwshOn9inyMkkL9jkeG-CI1y261MAj-WJ0y~PaW7digwE-yBFGiq2XGycz6QjUUJjcaZ-lmkFkjq7lF1XRj~2QTQyZ76n~Wq1aqnCSoKxE1EHhB2hnB6QmvYQmD4XXpJPoh9ArsItGQV5LiXBR4PYMJahozwGebmVrJfVICXxoPRhQN7svki8D~kKJMl0WcTKJONC8RfAjgVwfWd06ZCzLX4Rbw8-rLdXDLEGSG~SOLt1~-aFbK4osYCNHg6qchkE0gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
