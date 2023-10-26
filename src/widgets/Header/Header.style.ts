'use client';

import styled from 'styled-components';

import { HeaderActions, Nav } from '@/shared/ui';

export const Root = styled.header``;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    border-bottom: 1px solid #ffffff1a;
`;

export const Navigation = styled(Nav)``;

export const Actions = styled(HeaderActions)``;
