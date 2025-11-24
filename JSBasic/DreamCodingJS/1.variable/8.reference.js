// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a; //1
b = 2;
console.log(a);
console.log(b);

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {
  // 0x1234
  name: '사과',
};

// 객체는 동적 할당 영역인 heap에 저장되고 heap에 저장된 객체 주소를 새로운 변수가 가리키게 됨
let orange = apple; // 0x1234 -> orange 변수는 apple 객체의 주소 값을 가리키게 됨
orange.name = '오렌지'; // 
console.log(apple); // { name: '오렌지' }
console.log(orange); // { name: '오렌지' }
