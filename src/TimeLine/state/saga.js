import { all, call, put, takeLeading } from "redux-saga/effects";
import { actions, types } from "./index";
import { callApiLike } from "../../Common/api";

export function* fetchData(action) {
  // put, call : 부수효과
  // put : redux action 발생
  yield put(actions.setLoading(true));
  // API를 호출하기전에 API가 성공했다고 가정하고 미리 반영하는 방식
  yield put(actions.addLike(action.timeline.id, 1));
  yield call(callApiLike);
  yield put(actions.setLoading(false));
}

// REQUEST_LIKE 액션이 발생할 때 마다 위에 로직이 실행
export default function* () {
  yield all([takeLeading(types.REQUEST_LIKE, fetchData)]);
}
