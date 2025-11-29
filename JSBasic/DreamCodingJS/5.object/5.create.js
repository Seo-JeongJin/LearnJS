// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: 🍎`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}: 🍊`);
//   },
// };

// 생성자 함수
function Fruit(name, emoji) {
  this.name = name; // 현재 객체에 name 이라는 이름의 key를 만들고 인자로 받은 name을 value 값으로
  this.emoji = emoji; // this.name, this.emoji 는 앞으로 만들어질 객체(this)가 가질 key가 되는 것임
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // 생략가능
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
