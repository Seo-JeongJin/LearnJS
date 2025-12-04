"use strict";
/**
 * 글로벌 컨텍스트에서의 this
 * - 브라우저
 * - 노드
 */

const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis); // globalThis는 전역 객체를 가리킴
// globalThis.setTimeout();
// setTimeout(); // globalThis는 생략 가능

/**
 * 함수 내부에서의 this -> use strict 일 때는 함수 내부 스코프 안의 this를 가리키지만 없을 때는 globalThis
 * 엄격모드에서는 undefined
 * 느슨한 모드에서는 globalThis
 */

function fun() {
  console.log(this);
}
fun(); // globalThis 출력

/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴
 */

function Cat(name) {
  this.name = name;
  this.printName = () => {
    console.log(this.name); // 앞으로 만들어질 인스턴스의 name을 가리킴 -> cat.name
  };
}
const cat1 = new Cat("냐옹");
const cat2 = new Cat("미야옹");
cat1.printName();
cat2.printName();
