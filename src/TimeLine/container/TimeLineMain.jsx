import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNextTimeline } from "../../Common/mockData";
import { actions } from "../state";
import TimeLineList from "../components/TimeLineList";

const TimeLineMain = () => {
  const dispatch = useDispatch();
  const timelines = useSelector((state) => state.timeline.timelines);
  const isLoading = useSelector((state) => state.timeline.isLoading);
  const error = useSelector((state) => state.timeline.error);

  const onAdd = () => {
    const timeline = getNextTimeline();
    dispatch(actions.addTimeline(timeline));
  };

  const onLike = (e) => {
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find((item) => item.id === id);
    dispatch(actions.requestLike(timeline));
  };

  console.log("Timeline render");
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimeLineList timelines={timelines} onLike={onLike} />
      {isLoading && <p>전송 중...</p>}
      {error && <p>에러 발생...</p>}
    </div>
  );
};

export default TimeLineMain;
