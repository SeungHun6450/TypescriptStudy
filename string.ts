// Template String : 행에 걸쳐있거나, 표현식을 넣을 수 있는 문자열 `기호 사용

let fullName: string = 'Mark Lee';
let age: number = 39;

let sentence: string =`Hello, My name is ${fullName}.

I'll be ${age-3} years old three years age`;

console.log(sentence)