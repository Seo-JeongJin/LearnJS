
let arr = []
arr[0] = 10;
console.log(arr)
console.log(arr.length)

let arr2 = []
arr2.push(10);
arr2.push('a');
console.log(arr2)

arr2.pop();
console.log(arr2)

arr2.splice(0, 1) // 0번 인덱스에서 하나 지우겠다
console.log(arr2)

let arr3 = ['a', 'b', 'c'];
arr3.forEach(function(value) {
    console.log(value)
})