// @flow
import React from 'react';

import { Series as SeriesComponent } from '../components';
import { SeriesIndividualContainer } from '../containers';



const Series = SeriesIndividualContainer(SeriesComponent);

export function SeriesIndividualPage() {
    return (
        <Series />
    );
}
