'use client';

import { ChildrenProps } from '@/shared/types';

import * as S from './Container.style';

export const Container: React.FC<ChildrenProps> = ({ children }) => {
    return <S.Root>{children}</S.Root>;
};
