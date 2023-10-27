import { useEffect, useState } from 'react';

export const useIsMobile = () => {
    const MOBILE = '768px';
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${MOBILE})`);

        setIsMobile(media.matches);

        media.addEventListener('change', (event) => setIsMobile(event.matches));
    }, []);

    return isMobile;
};
