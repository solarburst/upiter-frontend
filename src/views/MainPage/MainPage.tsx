import React from 'react';

import { Banner } from '@/entities';
// import { getCategories, getProducts } from '@/shared/api';
import { Catalog, Gallery } from '@/widgets';

export const MainPage = async () => {
    // const categories = await getCategories();
    // console.log(categories);
    // const products = await getProducts();
    // console.log(products);

    const categories = [
        {
            id: 1,
            slug: 'hvosty',
            name: 'Хвосты',
            products: 7,
            sizes: '<table><tbody><tr><th colspan="1" rowspan="1"><p>Размер</p></th><th colspan="1" rowspan="1"><p>Обхват груди</p></th><th colspan="1" rowspan="1"><p>Обхват талии</p></th><th colspan="1" rowspan="1"><p>Обхват бедер</p></th></tr><tr><td colspan="1" rowspan="1"><p><span>XS</span></p></td><td colspan="1" rowspan="1"><p><span>80-84</span></p></td><td colspan="1" rowspan="1"><p><span>62-66</span></p></td><td colspan="1" rowspan="1"><p><span>88-92</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span>S</span></p></td><td colspan="1" rowspan="1"><p><span>84-88</span></p></td><td colspan="1" rowspan="1"><p><span>66-70</span></p></td><td colspan="1" rowspan="1"><p><span>92-96</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span>M</span></p></td><td colspan="1" rowspan="1"><p><span>88-92</span></p></td><td colspan="1" rowspan="1"><p><span>70-74</span></p></td><td colspan="1" rowspan="1"><p><span>96-100</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span>L</span></p></td><td colspan="1" rowspan="1"><p><span>92-96</span></p></td><td colspan="1" rowspan="1"><p><span>74-78</span></p></td><td colspan="1" rowspan="1"><p><span>100-104</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span>XL</span></p></td><td colspan="1" rowspan="1"><p><span>96-100</span></p></td><td colspan="1" rowspan="1"><p><span>78-82</span></p></td><td colspan="1" rowspan="1"><p><span>104-108</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span>XXL</span></p></td><td colspan="1" rowspan="1"><p><span>100-104</span></p></td><td colspan="1" rowspan="1"><p><span>82-86</span></p></td><td colspan="1" rowspan="1"><p><span>108-112</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span>XXXL</span></p></td><td colspan="1" rowspan="1"><p><span>104-108</span></p></td><td colspan="1" rowspan="1"><p><span>86-90</span></p></td><td colspan="1" rowspan="1"><p><span>112-116</span></p></td></tr></tbody></table>',
        },
        {
            id: 2,
            slug: 'swimwear',
            name: 'Купальники',
            products: 1,
            sizes: '<p></p>',
        },
        {
            id: 3,
            slug: 'accessories',
            name: 'Аксессуары',
            products: 1,
            sizes: '<p></p>',
        },
    ];

    const products = [
        {
            id: 3,
            slug: 'tail',
            name: 'Хвост',
            images: ['/storage//products-images/01HFDR4NJJ59E03RAA92MNVGM9.png'],
            short_description: 'А ещё реплицированные с зарубежных источников,',
            description:
                '<p>А ещё реплицированные с зарубежных источников, современные исследования ассоциативно распределены по отраслям. Предварительные выводы неутешительны:</p>',
            prices: [
                {
                    amount: '10000',
                    currency: '2',
                },
                {
                    amount: '100',
                    currency: '2',
                },
            ],
            categoryId: 1,
        },
        {
            id: 4,
            slug: 'tail1',
            name: 'Хвост1',
            images: ['/storage//products-images/01HFDR8VA9YC8E362H7H98DMVV.png'],
            short_description: 'С другой стороны, начало повседневной работы',
            description:
                '<p>Безусловно, современная методология разработки однозначно определяет каждого участника как способного принимать собственные решения касаемо вывода текущих активов. Таким образом, постоянное информационно-пропагандистское о</p>',
            prices: [
                {
                    amount: '25000',
                    currency: '1',
                },
                {
                    amount: '200',
                    currency: '2',
                },
                {
                    amount: '190',
                    currency: '3',
                },
            ],
            categoryId: 1,
        },
        {
            id: 5,
            slug: 'tail3',
            name: 'Хвост3',
            images: ['/storage//products-images/01HFDRC9HM39T1455EY0VV9CGW.png'],
            short_description: 'Прежде всего, базовый вектор развития прекрасно подходит для реализации стандартных подходов',
            description:
                '<p>Прежде всего, базовый вектор развития прекрасно подходит для реализации стандартных подходов. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: граница обучения кадров говорит о возможностях кластеризации усилий</p>',
            prices: [
                {
                    amount: '15000',
                    currency: '1',
                },
                {
                    amount: '150',
                    currency: '2',
                },
                {
                    amount: '130',
                    currency: '3',
                },
            ],
            categoryId: 1,
        },
        {
            id: 6,
            slug: 'tail4',
            name: 'Хвост4',
            images: ['/storage//products-images/01HFDRF3BBZQGKZ0WAW9NAGM36.png'],
            short_description: 'Также как новая модель организационной деятельности требует',
            description:
                '<p>Также как новая модель организационной деятельности требует анализа прогресса профессионального сообщества. В целом, конечно, начало повседневной работы по формированию позиции позволяет оценить значение форм воздействия.</p>',
            prices: [
                {
                    amount: '30000',
                    currency: '1',
                },
            ],
            categoryId: 1,
        },
        {
            id: 7,
            slug: 'tail5',
            name: 'Хвост5',
            images: [],
            short_description: 'Кстати, тщательные исследования конкурентов лишь добавляют фракционных разногласий и обнародованы',
            description:
                '<p>Господа, консультация с широким активом напрямую зависит от как самодостаточных, так и внешне зависимых концептуальных решений. Однозначно, стремящиеся вытеснить традиционное производство, нанотехноло</p>',
            prices: [
                {
                    amount: '20000',
                    currency: '1',
                },
            ],
            categoryId: 1,
        },
        {
            id: 8,
            slug: 'tail6',
            name: 'Хвост6',
            images: ['/storage//products-images/01HFDRTTV6R7JA9PTHY68DMY67.png'],
            short_description: 'В рамках спецификации современных стандартов, элементы политического процесса',
            description:
                '<p>Приятно, граждане, наблюдать, как базовые сценарии поведения пользователей, превозмогая сложившуюся непростую экономическую ситуацию, описаны максимально подробно.</p>',
            prices: [
                {
                    amount: '500',
                    currency: '2',
                },
            ],
            categoryId: 1,
        },
        {
            id: 9,
            slug: 'tail7',
            name: 'Хвост7',
            images: [],
            short_description: 'Однозначно, сделанные на базе интернет-аналитики выводы представляют',
            description:
                '<p>В частности, дальнейшее развитие различных форм деятельности требует определения и уточнения направлений прогрессивного развития.</p>',
            prices: [
                {
                    amount: '30000',
                    currency: '1',
                },
                {
                    amount: '300',
                    currency: '2',
                },
            ],
            categoryId: 2,
        },
        {
            id: 10,
            slug: 'tail8',
            name: 'Хвост8',
            images: ['/storage//products-images/01HFDS0BGV455BQ2786VKS201C.png'],
            short_description: 'И нет сомнений, что представители современных социальных резервов представляют собой не что иное',
            description:
                '<p>Мы вынуждены отталкиваться от того, что перспективное планирование влечет за собой процесс внедрения и модернизации благоприятных перспектив. Лишь интерактивные прототипы,</p>',
            prices: [
                {
                    amount: '35000',
                    currency: '1',
                },
            ],
            categoryId: 1,
        },
        {
            id: 11,
            slug: 'tail9',
            name: 'Хвост9',
            images: ['/storage//products-images/01HFDS4S04F5SZ0B5N019K8EBB.png'],
            short_description: 'Сложно сказать, почему диаграммы связей, которые представляют собой яркий пример',
            description:
                '<p>Для современного мира социально-экономическое развитие напрямую зависит от направлений прогрессивного развития.</p>',
            prices: [
                {
                    amount: '24000',
                    currency: '1',
                },
            ],
            categoryId: 3,
        },
    ];

    return (
        <>
            <Banner />
            <Catalog categories={categories} products={products} />
            <Gallery />
        </>
    );
};
