function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나과 사과를 같이 가지고 오기
async function fetchFruits() {
  // Promise 를 호출하는 함수를 리턴할 때는 await 키워드 필수
  const banana = await getBanana(); // Promise의 값이 resolve 되면 resolve 된 값을 반환한 후 변수에 할당
  const apple = await getApple();
  return [banana, apple];
}

fetchFruits() //
  .then((fruits) => console.log(fruits));
