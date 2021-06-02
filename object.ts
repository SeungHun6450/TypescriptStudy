// object literal type
const person1 = {name:"Mark", age:39};

// Object.create
const person2 = Object.create({name:'Mark', age: 39});

console.log(person1)
console.log(person2)

// primitive type이 아닌 것을 나타내고 싶을 때 사용하는 타입

let object: object = {};
object = {name:'Mark'};
object = [{name:'Mark'}];
// object = 39; // primitive type 사용 불가
