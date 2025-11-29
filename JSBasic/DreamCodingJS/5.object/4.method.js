const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: 🍎`);
  },
};

apple.display(); // apple 객체 안의 display라는 이름의 함수 호출( () )
