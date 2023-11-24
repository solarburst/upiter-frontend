// import Cookies from 'js-cookie';
import { cookies } from 'next/headers';

import { getBanner, getCategories, getFeedback, getGallery, getProducts, getSettings } from '@/shared/api';
import { MainPage } from '@/views';

const Main = async ({ params }: { params: { locale: string } }) => {
    const locale = cookies().get('NEXT_LOCALE')?.value || params.locale;

    const categories = await getCategories(locale);
    const products = await getProducts(locale);
    const settings = await getSettings();
    const gallery = await getGallery();
    const feedback = await getFeedback();
    const banner = await getBanner(locale);

    return (
        <>
            <MainPage
                categories={categories}
                products={products}
                settings={settings}
                gallery={gallery}
                feedback={feedback}
                banner={banner}
            />
        </>
    );
};

export default Main;
