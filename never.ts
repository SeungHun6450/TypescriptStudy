// throw하는 경우에서 어떠한 형태도 return되지 않는다의 never
function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("failed");
}

function infiniteLoop(): never {
  while (true) {

  }
}

// never는 모든 타입의 subtype이며 모든 타입에 할당이 가능하지만
// ★ never에는 그 어떤것도 할당할 수 없다, 실수 방지를 위해 사용한다

let aN: string = "hello";

if (typeof aN !== 'string'){
  // string - string : 아무것도 할당 할 수 없는 상태이므로 never상태가 된다
  aN;
} 

declare const aN2: string | number;

if (typeof aN2 !== 'string'){
  // string | number - string : number
  aN2;
}

