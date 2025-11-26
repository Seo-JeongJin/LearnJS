// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
add = (a, b) => {
  return a + b;
}

add = (a, b) => a + b; // 값만 리턴 되는 거라면 {}, return 생략 가능

console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immediately-Invoked Function Expressions)
(function run() {
  console.log('😍');
})(); // 함수를 괄호로 묶어서 (); 로 호출
