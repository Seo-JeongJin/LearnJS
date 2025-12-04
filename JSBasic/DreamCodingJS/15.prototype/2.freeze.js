// 동결! Object.freeze 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
// (단, 얕은 꽁꽁 얼림!)
const ellie = { name: '엘리' };
const dog = { name: '와우', emoji: '🐶', owner: ellie };
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);
ellie.name = '엘리얌'; // 특정한 객체에서 다른 객체를 참조하고 있다면 참조하고 있는 객체는 얼리지 않음
console.log(dog);

// 밀봉! Object.seal 값의 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
const cat = { ...dog };
//Object.assign(cat, dog);
Object.seal(cat);
console.log(cat);
cat.name = '냐옹'; // 수정됨
console.log(cat);
delete cat.emoji; // 삭제 안됨
console.log(cat);

console.log(Object.isFrozen(dog)); // 얼려졌나
console.log(Object.isSealed(cat)); // 밀봉됐나

// 확장 금지 preventExtensions 추가 ❌
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐응'; // 수정됨
console.log(tiger);
delete tiger.name; // 삭제됨
console.log(tiger);
tiger.age = 1; // 프로퍼티 추가 안됨
console.log(tiger);
