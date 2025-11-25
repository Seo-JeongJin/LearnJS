// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름
console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == 3); // false
console.log(2 == '2'); // true
console.log(2 === '2'); // ✨ false
console.log(true == 1); // true ( type은 다르지만 true == 1 )
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false
console.clear();

const obj1 = {
  name: 'js',
};
const obj2 = {
  name: 'js',
};

console.log(obj1 == obj2); // false -> 힙에 저장된 메모리 주소가 다르기 때문에 
console.log(obj1 === obj2); // false
console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true

let obj3 = obj2; // -> 참조값(메모리 주소) 복사
console.log(obj3 == obj2); // true -> 동일한 메모리 주소를 가지고 있음
console.log(obj3 === obj2); // true
