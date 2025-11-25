// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 참인경우 실행 : 거짓인경우 실행
let fruit = 'apple';
if (fruit === 'apple') {
  console.log('🍎');
} else {
  console.log('😍');
}
fruit === 'apple' ? console.log('🍎') : console.log('😍');

// fruit === 'apple' 일 때 🍎를 emoji에 넣음, 아니면 😍를 emoji에 넣음
let emoji = fruit === 'apple' ? '🍎' : '😍';
console.log(emoji); // 🍎
