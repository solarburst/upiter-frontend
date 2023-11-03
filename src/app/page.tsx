import React from 'react';

import { Catalog, Footer, Gallery, Header, Title, UiKit } from '@/widgets';

const Main = () => {
    return (
        <>
            <Header />
            <Title />
            {/* <UiKit /> */}
            <Catalog />
            <Gallery />
            <Footer />
        </>
    );
};

export default Main;
