
// hoisting === JS 엔진이 코드를 실행하기 전에 모든 선언을 먼저 메모리에 등록하는 것

// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능함
print();

function print() {
  console.log('Hello');
}

// 선언 -> 컴파일 단계에서 JS 엔진이 변수의 이름만 등록하는 단계
// 초기화 -> 실행 단계에서 실제로 그 변수에 값을 넣는 순간

// 변수(let, const)와 클래스는 '선언만' 호이스팅이 되고,
// 초기화는 안됨
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생
// console.log(hi);
let hi = 'hi';
let func1 = function () {};

// const cat = new Cat();
class Cat {}

let x = 1;
{
  console.log(x); // x 변수가 초기화 되지 않았다는 메세지 출력(app crash)
  let x = 2; // 블럭 안에서 호이스팅 되어 블럭 가장 위로 올라감 -> 선언만 된 상태(let x;)
}
