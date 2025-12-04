function loop() {
  const array = [];
  // var과 let의 차이점!
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      // array에 나중에 실행되는 console.log(i)를 출력하는 함수를 넣는다.
      console.log(i);
    });
  }
  return array;
}

const array = loop();
console.log(array);
array.forEach((func) => func()); // 배열안에 들어있는 함수 호출
