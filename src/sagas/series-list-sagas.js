import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { SeriesListActions } from '../actions';
import seriesDefaultImage from '../assets/images/sample-series.jpg';


const mockSeriesList = [
    { id: 1, name: 'Dungeon de deai wo motomeru machigaiteru daou ka?', image: seriesDefaultImage },
    { id: 1, name: 'Dungeon de deai wo motomeru machigaiteru daou ka?', image: seriesDefaultImage },
    { id: 1, name: 'Dungeon de deai wo motomeru machigaiteru daou ka?', image: seriesDefaultImage },
    { id: 1, name: 'Dungeon de deai wo motomeru machigaiteru daou ka?', image: seriesDefaultImage },
    { id: 1, name: 'Dungeon de deai wo motomeru machigaiteru daou ka?', image: seriesDefaultImage },
    { id: 1, name: 'Dungeon de deai wo motomeru machigaiteru daou ka?', image: seriesDefaultImage },
    { id: 1, name: 'Dungeon de deai wo motomeru machigaiteru daou ka?', image: seriesDefaultImage },
    { id: 1, name: 'Dungeon de deai wo motomeru machigaiteru daou ka?', image: seriesDefaultImage },
    { id: 1, name: 'Dungeon de deai wo motomeru machigaiteru daou ka?', image: seriesDefaultImage },
    { id: 1, name: 'Dungeon de deai wo motomeru machigaiteru daou ka?', image: seriesDefaultImage },
    { id: 1, name: 'Dungeon de deai wo motomeru machigaiteru daou ka?', image: seriesDefaultImage },
    { id: 1, name: 'Dungeon de deai wo motomeru machigaiteru daou ka?', image: seriesDefaultImage },
    { id: 1, name: 'Dungeon de deai wo motomeru machigaiteru daou ka?', image: seriesDefaultImage },
    { id: 1, name: 'Dungeon de deai wo motomeru machigaiteru daou ka?', image: seriesDefaultImage },
    { id: 1, name: 'Dungeon de deai wo motomeru machigaiteru daou ka?', image: seriesDefaultImage },
    { id: 1, name: 'Dungeon de deai wo motomeru machigaiteru daou ka?', image: seriesDefaultImage },
];

function mockApiCall() {
    return Promise.resolve(mockSeriesList);
}


function* fetchSeriesList(action) {
   try {
      const seriesList = yield call(mockApiCall, 0);
      yield put(SeriesListActions.setSeriesList(seriesList));
   } catch (error) {
      yield put(SeriesListActions.failedToGetSeriesList(error));
   }
}


export default function* seriesListSaga() {
  yield* takeLatest(SeriesListActions.GET_SERIES_LIST, fetchSeriesList);
}