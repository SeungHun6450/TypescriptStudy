// Symbol : new Symbol로 사용할 수 없고 Symbol을 함수로 사용해서 symbol 타입을 만들어 낼 수 있다.
// 프리미티브 타입의 값을 담아서 사용, 고유하고 수정 불가능한 값으로 만들어주어 접근을 제어하는데 쓰는 경우가 많았었다.
console.log(Symbol('foo') === Symbol('foo'));

// 함수 사용시 대문자 Symbol
// 타입 사용시 소문자 symbol

const sym = Symbol();

const obj = {
  [sym] : "value",
};

// 접근이 가능
obj[sym]