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

// 함수 내부에서 await 키워드를 사용하려면 그 함수는 반드시 async 로 정의되어 있어야 한다.
// await 는 비동기 작업이 끝날 때까지 기다리라고 하는건데 일반적인 동기 함수는 중간에 멈추는 기능이 없기 때문
// 동기 함수 : 멈추면 세상(브라우저)도 같이 멈춤
// async 함수 : 멈추면 자기만 멈추고 세상은 계속 돌아감
//   - async 함수 내부에 Promise가 없어도 됨. (자동으로 Promise)로 반환됨
//   - async 함수 호출한 쪽에서는 그 결과가 Promise이기 때문에 then()이나 await로 껍질을 까야만 값을 쓸 수 있음
// 바나나과 사과를 같이 가지고 오기
async function fetchFruits() {
  // Promise 를 호출하는 함수를 리턴할 때는 await 키워드 필수
  const banana = await getBanana(); // Promise의 값이 resolve 되면 resolve 된 값을 반환한 후 변수에 할당
  const apple = await getApple();
  return [banana, apple];
}

fetchFruits() //
  .then((fruits) => console.log(fruits));
