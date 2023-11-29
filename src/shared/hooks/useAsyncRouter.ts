import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

import { useRouter } from '@/navigation';

export const useAsyncRouter = () => {
    const pathname = usePathname;
    const searchParams = useSearchParams();
    const locale = useLocale();
    const [isReady, setIsReady] = useState(false);
    const { push } = useRouter();

    useEffect(() => {
        setIsReady(true);
    }, [pathname, searchParams, locale]);

    return {
        push: (href: string, options?: (NavigateOptions & { locale?: string }) | undefined) => {
            setIsReady(false);
            push(href, options);
        },
        isReady,
    };
};
