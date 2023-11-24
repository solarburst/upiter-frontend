import Cookies from 'js-cookie';

import { getCategories, getFeedback, getProductBySlug, getProducts, getSettings } from '@/shared/api';
import { DetailsPage } from '@/views';

const Details = async ({ params }: { params: { slug: string; locale: string } }) => {
    const locale = Cookies.get('NEXT_LOCALE') || params.locale;

    const product = await getProductBySlug(params.slug, locale);
    const settings = await getSettings();
    const feedback = await getFeedback();
    const products = await getProducts(locale);
    const categories = await getCategories(locale);

    return <DetailsPage product={product} settings={settings} feedback={feedback} products={products} categories={categories} />;
};

export default Details;
