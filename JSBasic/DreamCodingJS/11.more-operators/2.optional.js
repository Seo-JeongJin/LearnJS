// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (ECMAScript 2020)
// ?.
// null 또는 undefined을 확인할때
let item = { price: 1 };
const price = item?.price; // === item && item.price; / item이 있으면 price에 접근, 없으면 undefined
console.log(price);

let obj = { name: '🐶', owner: { name: '엘리' } };
function printName(obj) {
  const ownerName = obj?.owner?.name; // === obj && obj.owner && obj.owner.name; / obj가 있다면, owner가 있다면 name에 접근, 없으면 undefined
  console.log(ownerName);
}
printName(obj);
