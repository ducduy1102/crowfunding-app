import { call } from "redux-saga/effects";
import { requestAuthLogin, requestAuthRegister } from "./auth-requests";
import { toast } from "react-toastify";
import { saveToken } from "utils/auth";

export default function* handleAuthRegister(action) {
  // console.log(action);
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) {
      toast.success("Create new account successfully!");
    }
    console.log(response);
  } catch (error) {}
}

function* handleAuthLogin(action) {
  console.log(action);
  const { payload } = action;
  try {
    const response = yield call(requestAuthLogin, payload);
    console.log(response);
    // accessToken, refreshToken
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
    }
    yield 1;
  } catch (error) {}
}

export { handleAuthLogin };
