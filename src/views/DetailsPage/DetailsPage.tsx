import React from 'react';

import { Feedback, SimilarProducts } from '@/widgets';
import { DetailsInformation } from '@/widgets/DetailsInformation/DetailsInformation';

export const DetailsPage = async () => {
    return (
        <>
            <DetailsInformation />
            <SimilarProducts />
            <Feedback title={'default'} />
        </>
    );
};
