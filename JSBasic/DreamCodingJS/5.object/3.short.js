
// key와 value가 가리키고 있는 변수 명이 똑같을 경우 생략가능
const x = 0;
const y = 0;
const coordinate = { x, y }; //{ x: x, y: y };
console.log(coordinate);

function makeObj(name, age) {
  return {
    name, // == name: name
    age, // == age: age
  };
}
