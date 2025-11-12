
function fetchMenu(callbackFunction) {
    setTimeout(() => {
        // #2
        let data = {firstMenu : "sushi"};
        callbackFunction(data);
        return data;
    }, 5000);
    // return {firstMenu : "sushi"};
}

let menu;
fetchMenu(function (result) {
    console.log("5초 뒤 실행", result);
    menu = result;
});
// #1
console.log("출력 결과 : ", menu);



// 🧠 핵심 개념: setTimeout()은 비동기 함수

// 자바스크립트는 기본적으로 **한 줄씩 위에서 아래로 실행되는 언어(동기적)**인데,
// setTimeout 같은 건 **“비동기 함수”**라서
// 👉 바로 실행되지 않고, 일정 시간이 지난 뒤에 “나중에” 실행돼.

// 🚶 실행 순서 완벽히 따라가보자
// ① fetchMenu(callbackFunction) 호출
// menu = fetchMenu(function (result) {
//   console.log("5초 뒤 실행", result);
// });


// 여기서 callbackFunction 자리에 저 익명함수가 들어가.

// ② fetchMenu 내부 실행
// setTimeout(() => {
//     let data = { firstMenu: "sushi" };
//     callbackFunction(data);
//     return data;
// }, 5000);


// 이 코드는 이렇게 작동함 👇

// setTimeout이 실행되면,
// “5초 뒤에 이 콜백 함수를 실행해줘” 라고 브라우저에 부탁하고
// 바로 다음 줄로 넘어감.

// 즉, 5초 기다리지 않고 즉시 함수가 끝나버림.

// 그래서 fetchMenu 함수는 아무것도 return하지 않음 → undefined 리턴됨.

// ③ menu 변수엔 뭐가 들어갈까?
// menu = fetchMenu(...);


// → fetchMenu()가 즉시 끝나니까
// → menu에는 undefined가 들어감.

// 그래서 아래 코드가 실행될 때 👇

// console.log("출력 결과:", menu);


// ➡ “출력 결과: undefined” 가 먼저 찍힘 ⚡

// ④ 5초 뒤에 일어나는 일

// 이제 5초가 지나면 setTimeout 내부 콜백이 실행됨 👇

// let data = { firstMenu: "sushi" };
// callbackFunction(data);


// → callbackFunction 즉, 우리가 fetchMenu 호출할 때 넘긴 함수가 실행됨.

// 그 함수 안에는 이게 있었지:

// function (result) {
//   console.log("5초 뒤 실행", result);
// }


// 그래서 콘솔에 이렇게 뜸:

// 5초 뒤 실행 { firstMenu: "sushi" }