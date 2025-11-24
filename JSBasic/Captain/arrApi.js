
let arr = [10, 20, 30];
arr.map(function(item) { // 새로운 값을 반환해줄 뿐 기존의 값을 바꾸진 않음
    return item * 10; // [100, 200, 300]
});

arr.filter(function(item) {
    if (item == 10) { // item 값이 10일 때만 반환
        return true;
    }
});


// map, filter api 는 반복문으로 대체가 가능함
let newArr = [];
arr.forEach(function(item) {
    newArr.push(item * 10);
});
console.log(newArr); // [100, 200, 300]

let newArr2 = [];
arr.forEach(function(item) {
    if (item == 10) {
        newArr2.push(item);
    }
});
console.log(newArr2) // [10]