import { all, call, put, takeLeading, take } from "redux-saga/effects";
import { actions, types } from "./index";
import { callApiLike } from "../../Common/api";

// put, call : 부수효과\
// put : redux action 발생
// API를 호출하기전에 API가 성공했다고 가정하고 미리 반영하는 방식
export function* fetchData(action) {
  while (true) {
    const { timeline } = yield take(types.REQUEST_LIKE);
    yield put(actions.setLoading(true));
    yield put(actions.addLike(timeline.id, 1));
    yield put(actions.setError(""));
    try {
      yield call(callApiLike);
    } catch (error) {
      yield put(actions.setError(error));
      yield put(actions.addLike(timeline.id, -1));
    }

    yield put(actions.setLoading(false));
  }
}

// REQUEST_LIKE 액션이 발생할 때 마다 위에 로직이 실행
export default function* () {
  yield all([takeLeading(types.REQUEST_LIKE, fetchData)]);
}
