
let arr = ['apple', 10];

let [myFruit, myNum] = arr;
console.log(myFruit); // apple
console.log(myNum); // 10




let josh = {
    skill : 'js',
    age : 21,
};

// let mySkill = josh.skill;
// let myAge = josh.age;
// console.log(mySkill); // js
// console.log(myAge); // 21


let {skill, age} = josh;
console.log(skill) // js
console.log(age) // 21


let {skill : mySkill, age : myAge} = josh;
console.log(mySkill) // js
console.log(myAge); // 21
