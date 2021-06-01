// Typescript에서 undefined와 null는 실제로 각각 undefined및 null의 값을 가진다.
// tsconfig 설정을 하지 않으면 다른 모든 타입의 서브타입으로 존재하게 된다. 즉 number에 null이나 undefined를 할당할 수 있다는 의미
// 컴파일 옵션에서 --strictNullCehcks를 사용하면, null과 undefined는 void나 자기 자신들에게만 할당이 가능하다.
// null과 undefined를 할당할 수 있게 하려면 union type을 이용해야한다.

// 에러 발생 시 "strict": true를 주석처리
// let Myname: string = null; 

// let u: undefined = null;
let v: void = undefined;

let union: string | null = null;  // | 사용 시 union

union = "Mark";

// Javascript 에서의 null : 무언가가 있는데 사용할 준비가 덜 된 상태, typeof 연산자 사용시 object
// Javascript 에서의 undefined : 무언가가 아예 준비가 안 된 상태, typeof 연산자 사용시 undefiend