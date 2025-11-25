// while(조건) {}
// 조건이 false가 될때까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log('아직살아있다!');
  if (i === 1000) {
    break;
  }
  i++;
}

do { // 일단 do 먼저 실행
  console.log('do-while 아직살아있다!');
} while (isActive); // do 실행 후 조건 검사
