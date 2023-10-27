import { useEffect, useState } from 'react';

export const useIsTablet = () => {
    const TABLET = '1200px';
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${TABLET})`);

        setIsTablet(media.matches);

        media.addEventListener('change', (event) => setIsTablet(event.matches));
    }, []);

    return isTablet;
};
