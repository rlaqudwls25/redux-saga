import React from "react";
import { getNextFriend } from "../../Common/mockData";
import { addFriend } from "../state";
import FriendList from "../components/FriendList";
import { useSelector, useDispatch } from "react-redux";

const FriendMain = () => {
  const friends = useSelector((state) => state.friend.friends);

  const dispatch = useDispatch();

  const onAdd = () => {
    const friend = getNextFriend();
    dispatch(addFriend(friend));
  };

  console.log("FriendMain render");

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  );
};

export default FriendMain;
