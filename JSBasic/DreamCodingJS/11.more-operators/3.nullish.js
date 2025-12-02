// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ?? -> 왼쪽 값이 null, undefined 일 경우에만 오른쪽 값을 사용
// || falshy한 경우 설정(할당) 0, -0, ''
let num = 0;
console.log(num || '-1'); // -1
console.log(num ?? '-1'); // 0 / 0은 null, undefined가 아니므로 num 값 출력
