import { call } from "redux-saga/effects";
import { requestAuthRegister } from "./auth-requests";
import { toast } from "react-toastify";

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
