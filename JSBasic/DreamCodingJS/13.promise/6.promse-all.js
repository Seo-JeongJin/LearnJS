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

// 바나나와 사과를 같이 가지고 오기
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log); // 출력까지 4초 걸림(바나나 1초 + 사과 3초)

// Promise.all 병렬적으로 한번에 모든 Promise들을 실행!
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log('all', fruits)); // 출력까지 3초 걸림(바나나는 1초이기에 이미 완료된 상태, 사과는 3초로 더 늦으므로 사과 시간에 맞춰 출력됨)

// Promise.race 주어진 Promise중에 제일 빨리 수행된것이 이김!
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log('race', fruit)); // 1초 뒤 'race 🍌' 출력

Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log); // 실행되지 않음 -> getOrange() 는 실행되지 않으므로

// 모든 결과에 대해 받아보고 싶다면 allSettled
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-settle', fruits))
  .catch(console.log);
