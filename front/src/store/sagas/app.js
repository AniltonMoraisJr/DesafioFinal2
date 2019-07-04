import { call, put } from "redux-saga/effects";
import handleAuthentication from "../../services/authenticateService";
import { Creators as AppCreators } from "../ducks/app";

export function* authenticate(action) {
  try {
    const { data } = yield call(handleAuthentication, action.payload);
    const { user } = data;
    if (user[0].user_type === "ADMIN")
      yield put(AppCreators.authenticate_success(data));
    else
      yield put(
        AppCreators.authenticate_error({ message: "User is not Admin" })
      );
  } catch (error) {
    console.log(error);
  }
}
