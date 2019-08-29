import { all, takeLatest } from 'redux-saga/effects';
import { ProductTypes } from './Products/types';
import { load } from './Products/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(ProductTypes.LOAD_REQUEST, load),
  ]);
}
