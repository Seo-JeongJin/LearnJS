// Symbol 심벌
// 유일한 키를 생성할 수 있음 🔑
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
const key1 = Symbol('key');
const key2 = Symbol('key');
map.set(key1, 'Hello');
console.log(map.get(key2)); // undefined
console.log(key1 === key2); // false

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); // true
 
console.log(Symbol.keyFor(k1)); // key
console.log(Symbol.keyFor(key1)); // undefined

const obj = { [k1]: 'Hello', [Symbol('key')]: 1 }; // (순서대로) 전역 심벌, 새로 생성된 심벌
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key')]);

// 정리 
// Symbol('key') -> 매번 새로운 유일한 값 생성
// Symbol.for('key') -> 전역 레지스트리에서 공유되는 심벌
// Symbol.keyFor() -> 전역 레지스트리로 만든 것만 이름 반환

// - 객체의 심벌 키는 동일한 심벌 객체로 접근해야 한다
