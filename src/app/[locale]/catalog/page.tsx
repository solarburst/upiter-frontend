// import Cookies from 'js-cookie';
import { cookies } from 'next/headers';

import { getCategories, getProducts, getSettings } from '@/shared/api';
import { CatalogPage } from '@/views';

const Catalog = async ({ params }: { params: { locale: string } }) => {
    // const locale = Cookies.get('NEXT_LOCALE') || params.locale;
    const locale = cookies().get('NEXT_LOCALE')?.value || params.locale;

    const categories = await getCategories(locale);
    const products = await getProducts(locale);
    const settings = await getSettings();

    return <CatalogPage categories={categories} products={products} settings={settings} />;
};

export default Catalog;
