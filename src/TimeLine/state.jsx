import createReducer from "../Common/createReducer";
import createItemsLogic from "../Common/createItemsLogic";
import mergeReducers from "../Common/mergeReducers";

const {
  add,
  remove,
  edit,
  reducer: timelinesReducer,
} = createItemsLogic("timelines");

const INCREASE_NEXT_PAGE = "TimeLine/INCREASE_NEXT_PAGE";

export const addTimeline = add;
export const removeTimeline = remove;
export const editTimeline = edit;
export const increaseNextPage = () => ({ type: INCREASE_NEXT_PAGE });

const INITIAL_STATE = { nextPage: 0 };
const reducer = createReducer(INITIAL_STATE, {
  [INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
});
const reducers = [reducer, timelinesReducer];
export default mergeReducers(reducers);
