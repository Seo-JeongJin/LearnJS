
const text = 'hello';
function func() {
  console.log(text);
}
func();

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}

const func1 = outer(); // outer()에서 반환된 inner 라는 참조 값이 func1에 할당됨
func1(); // inside inner: 0