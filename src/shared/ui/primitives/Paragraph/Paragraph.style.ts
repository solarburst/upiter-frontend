'use client';

import styled from 'styled-components';

export const Root = styled.p`
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    color: ${({ theme }) => theme.color.text2};
`;
