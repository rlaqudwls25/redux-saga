import React from "react";
import { getNextFriend } from "../../Common/mockData";
import { addFriend, setAgeLimit, setShowLimit } from "../state";
import FriendList from "../components/FriendList";
import NumberSelect from "../components/NumberSelect";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../common";
import {
  getAgeLimit,
  getShowLimit,
  getFriendWithAgeLimit,
  getFriendWithAgeShowLimit,
} from "../state/selector";

const FriendMain = () => {
  const [ageLimit, showLimit, friendsWithAgeLimit, friendsWithAgeShowLimit] =
    useSelector(
      (state) => [
        getAgeLimit(state),
        getShowLimit(state),
        getFriendWithAgeLimit(state),
        getFriendWithAgeShowLimit(state),
      ],
      shallowEqual
    );

  const dispatch = useDispatch();

  const onAdd = () => {
    const friend = getNextFriend();
    dispatch(addFriend(friend));
  };

  console.log("FriendMain render");

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect
        onChange={(v) => dispatch(setAgeLimit(v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix="세 이하만 보기"
      ></NumberSelect>
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect
        onChange={(v) => dispatch(setShowLimit(v))}
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix="명 이하만 보기"
      ></NumberSelect>
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  );
};

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];

export default FriendMain;
