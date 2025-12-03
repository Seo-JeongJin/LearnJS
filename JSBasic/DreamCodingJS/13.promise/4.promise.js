
// 핵심 개념(내가 이해하고 정리한 것)
// Promise 객체가 resolve 되면, resolve() 안의 인자가 다음 then()으로 반환된다 !
// Promise 자체의 리턴 값은 Promise 객체
// -> 그 Promise가 fulfilled 되면 그 안에 담긴 값이 다음 then()의 콜백 인자로 전달됨

// resolve('🍌'); 하면

// getBanana().then(value => {
//   console.log(value);  // '🍌'
// });

// -> 여기서 value 는 resolve('🍌') 의 인자 그대로임

function runInDelay(seconds) {
  return new Promise((resolve, reject) => { // resolve : 성공했을 때 호출, reject : 실패했을 때 호출
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(() => console.log('타이머 완료!')) // runInDelay가 성공적으로 완료되면 then 호출 -> 필요한 일 수행
  .catch(console.error) // 실패한다면 catch -> 에러를 처리
  .finally(() => console.log('끝났다!')); // 성공하든 실패하든 호출
