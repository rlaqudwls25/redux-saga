import createReducer from "../../Common/createReducer";
import createItemsLogic from "../../Common/createItemsLogic";
import mergeReducers from "../../Common/mergeReducers";

const { reducer: timelinesReducer } = createItemsLogic("timelines");

export const types = {
  ADD: "timeline/ADD",
  REMOVE: "timeline/REMOVE",
  EDIT: "timeline/EDIT",
  INCREASE_NEXT_PAGE: "timeline/INCREASE_NEXT_PAGE",
  REQUEST_LIKE: "timeline/REQUEST_LIKE",
  ADD_LIKE: "timeline/ADD_LIKE",
  SET_LOADING: "timeline/SET_LOADING",
  SET_ERROR: "timeline/SET_ERROR",
};

export const actions = {
  addTimeline: (timeline) => ({ type: types.ADD, timeline }),
  removeTimeline: (timeline) => ({ type: types.REMOVE, timeline }),
  editTimeline: (timeline) => ({ type: types.EDIT, timeline }),
  increaseNextPage: () => ({ type: types.INCREASE_NEXT_PAGE }),
  requestLike: (timeline) => ({ type: types.REQUEST_LIKE, timeline }),
  addLike: (timelineId, value) => ({ type: types.ADD_LIKE, timelineId, value }),
  setLoading: (isLoading) => ({
    type: types.SET_LOADING,
    isLoading,
  }),
  setError: (error) => ({
    type: types.SET_ERROR,
    error,
  }),
};

const INITIAL_STATE = {
  timelines: [],
  nextPage: 0,
  isLoading: false,
  error: "",
};
const reducer = createReducer(INITIAL_STATE, {
  [types.ADD]: (state, action) => state.timelines.push(action.timeline),
  [types.REMOVE]: (state, action) =>
    (state.timelines = state.timelines.filter(
      (timeline) => timeline.id !== action.timeline.id
    )),
  [types.EDIT]: (state, action) => {
    const index = state.timelines.findIndex(
      (timeline) => timeline.id === action.timeline.id
    );
    if (index >= 0) {
      state.timelines[index] = action.timeline;
    }
  },
  [types.INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
  [types.ADD_LIKE]: (state, action) => {
    const timeline = state.timelines.find(
      (item) => item.id === action.timelineId
    );
    if (timeline) {
      timeline.likes += action.value;
    }
  },
  [types.SET_LOADING]: (state, action) => (state.isLoading = action.isLoading),
  [types.SET_ERROR]: (state, action) => (state.error = action.error),
});
const reducers = [reducer, timelinesReducer];
export default mergeReducers(reducers);
