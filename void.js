"use strict";
// void는 어떤 타입도 가지지 않는 빈 상태
// 일반적으로 값을 반환하지 않은 일종의 undefined를 반환하는 return 타입으로 사용한다
function returnVoid(message) {
    console.log(message);
    return undefined;
}
;
returnVoid("리턴이 없다.");
