'use client';

import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Status = styled.span<{ status: string }>`
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    font-size: 16px;
    color: ${(props) => (props.status === 'ok' ? 'green' : 'red')};
`;
