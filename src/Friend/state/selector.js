import { createSelector } from "reselect";

const getFriends = (state) => state.friend.friends;
export const getAgeLimit = (state) => state.friend.ageLimit;
export const getShowLimit = (state) => state.friend.showLimit;

//createSelector 함수를 이용해서 선택자 함수를 만들면
//메모이제이션 기능을 동작한다
export const getFriendWithAgeLimit = createSelector(
  [getFriends, getAgeLimit],
  (friends, ageLimit) => {
    console.log("call1");
    return friends.filter((item) => item.age <= ageLimit);
  }
);

export const getFriendWithAgeShowLimit = createSelector(
  [getFriendWithAgeLimit, getShowLimit],
  (friendsWithAgeLimit, showLimit) => {
    console.log("call2");
    return friendsWithAgeLimit.slice(0, showLimit);
  }
);
