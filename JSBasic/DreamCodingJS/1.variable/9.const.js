// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; 이렇게 하면 안됨!

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
// apple = {}; // const 이므로 다른 객체로 재할당 하는 것은 불가
// apple = { color: 'green' }; // 객체 자체를 다른 객체로 바꾸는 것이므로 불가
console.log(apple);
apple.name = 'orange'; // but, apple 객체 안에 있는 값들은 변경 가능
apple.display = '🍏';
console.log(apple);
