
function returnAdd(a, b) {
    return a + b;
}
console.log(returnAdd(3, 8))


function logText() {
    console.log('hi');
}
logText();


function logMsg(msg) {
    msg(); // 함수가 들어와햐만 정상적으로 작동
}


let logNum1 = () => {
    return 'a';
}
console.log(logNum1());

let logNum2 = () => 'a'; // logNum1() 이랑 똑같음
console.log(logNum2());