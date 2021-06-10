// 정상적으로 동작하 api
// export const callApiLike = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000);
//   });
// };

// 50%의 확률로 예외가 발생하는 api
export function callApiLike() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() * 10 < 5) {
        resolve();
      } else {
        reject("callApiLike 실패");
      }
    }, 1000);
  });
}
