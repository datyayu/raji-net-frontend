// @flow
import React from 'react';

import { SeriesContainer } from '../containers';
import { Series as SeriesComponent } from '../components';


const Series = SeriesContainer(SeriesComponent);


export function SeriesIndividualPage() {
    return (
        <Series />
    );
}
