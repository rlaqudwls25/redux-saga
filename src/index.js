import React from "react";
import ReactDOM from "react-dom";
import TimelineMain from "./TimeLine/container/TimeLineMain";
import FriendMain from "./Friend/container/FriendMain";
import { Provider } from "react-redux";
import store from "./Common/store";

ReactDOM.render(
  <Provider store={store}>
    <FriendMain />
    <TimelineMain />
  </Provider>,
  document.getElementById("root")
);
