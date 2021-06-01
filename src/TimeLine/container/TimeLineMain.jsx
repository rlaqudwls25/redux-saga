import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNextTimeline } from "../../Common/mockData";
import { addTimeline } from "../state";
import TimeLineList from "../components/TimeLineList";

// 리팩터링 후
const TimeLineMain = () => {
  const timelines = useSelector((state) => state.timeline.timelines);

  const dispatch = useDispatch();

  const onAdd = () => {
    const timeline = getNextTimeline();

    dispatch(addTimeline(timeline));
  };

  console.log("Timeline render");
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimeLineList timelines={timelines} />
    </div>
  );
};

export default TimeLineMain;
