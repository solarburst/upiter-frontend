import { Montserrat, Unbounded } from 'next/font/google';

const montserrat = Montserrat({
    preload: true,
    style: ['normal'],
    subsets: ['cyrillic', 'latin'],
});

const unbounded = Unbounded({
    preload: true,
    style: ['normal'],
    subsets: ['cyrillic', 'latin'],
});

export const defaultTheme = {
    media: {
        toTablet: '(max-width: 767.9px)',
        fromTablet: '(min-width: 768px)',
        toLaptop: '(max-width: 1023.9px)',
        fromLaptop: '(max-width: 1024px)',
    },

    fontFamily: {
        montserrat: `${montserrat.style.fontFamily}, Arial, sans-serif`,
        unbounded: `${unbounded.style.fontFamily}, Arial, sans-serif`,
    },

    color: {
        accent1: '#412D80',
        accent2: '#4E3699',
        accent3: '#2E1F59',
        accent4: '#30445F',
        accent5: '#6B7F99',

        text1: '#FFFFFF',
        text2: '#6B7F99',
        text3: '#202B42',

        bg1: '#0A1326',
        bg2: '#FFFFFF',
        bg3: '#202b42',

        border1: '#30445F',
        border2: '#6B7F99',
        border3: '#202B42',

        warning1: '#FF274B',
    },

    transition: {
        fast: '100ms',
        default: '200ms',
        slow: '400ms',
    },
};
