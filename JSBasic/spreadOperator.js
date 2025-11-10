
// Spread Operator - Object

let obj = {
    a : 10,
    b : 20
};

// let user = {
//     a : obj.a,
//     b : obj.b,
//     c : 30
// };

let user = {
    ...obj, // obj 안에 있는 key-value 값이 모조리 들어감
    c : 30
}



// Spread Operator - Array

let arr = ['a', 'b'];

// let newArr = [arr[0], arr[1], 'c'];

let newArr = [...arr, 'c'];