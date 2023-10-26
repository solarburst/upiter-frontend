'use client';

import { ThemeProvider as Provider } from 'styled-components';

import { ChildrenProps } from '@/shared/types';

import { defaultTheme } from './themes';

export const ThemeProvider: React.FC<ChildrenProps> = ({ children }) => {
    return <Provider theme={defaultTheme}>{children}</Provider>;
};
