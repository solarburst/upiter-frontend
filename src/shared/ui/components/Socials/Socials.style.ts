'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const Root = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
        width: 24px;
        height: 24px;
    }
`;

export const SocialLink = styled(Link)`
    display: flex;
    align-items: center;
`;
