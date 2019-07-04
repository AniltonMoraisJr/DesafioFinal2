import { all, takeLatest } from "redux-saga/effects";
import { Types as AppTypes } from "../ducks/app";
import { authenticate } from "./app";
export default function* rootSaga() {
  yield all([takeLatest(AppTypes.AUTHENTICATE, authenticate)]);
}
