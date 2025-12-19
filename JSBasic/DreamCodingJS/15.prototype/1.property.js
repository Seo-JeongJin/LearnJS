// 자바스크립트의 각 객체는 개별적인 오브젝트 프로토타입을 상속하는게 아니라 동일한 오브젝트 프로토타입을 상속

const dog = { name: '와우', emoji: '🐶' };

console.log(Object.keys(dog)); // [ 'name', 'emoji' ]
console.log(Object.values(dog)); // [ '와우', '🐶' ]
console.log(Object.entries(dog)); // [ [ 'name', '와우' ], [ 'emoji', '🐶' ] ]

console.log('name' in dog); // true
console.log(dog.hasOwnProperty('name')); // true

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);
// {
//   name: { value: '와우', writable: true, enumerable: true, configurable: true },
//   emoji: { value: '🐶', writable: true, enumerable: true, configurable: true }
// }

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc); // { value: '와우', writable: true, enumerable: true, configurable: true }

Object.defineProperty(dog, 'name', {
  // 프로퍼티 재정의 메서드
  value: '멍멍',
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(dog.name); // 멍멍
console.log(Object.keys(dog)); // enumerable: false 가 됐기 때문에 'emoji'만 출력됨
delete dog.name; // configurable: false 값 업데이트 불가
console.log(dog.name); // 멍멍

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: '영희',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: '김',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});
console.log(student); // { firstName: '영희', lastName: '김' }
