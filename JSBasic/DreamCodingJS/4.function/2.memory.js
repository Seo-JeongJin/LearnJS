
// add 라는 함수의 이름은 함수가 정의된 메모리 주소 공간(힙)을 가리키고 있음 -> add라는 변수에 메모리 주소가 들어있음
function add(a, b) {
  return a + b;
}
const sum = add; // sum 이라는 변수도 add가 가리키고 있는 메모리 주소를 가지게 됨

console.log(sum(1, 2)); // 3
console.log(add(1, 2)); // 3
