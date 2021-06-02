"use strict";
// any는 어느 타입이든 상관 없이 사용 가능하다
// message에 사용할 타입을 사용해주면 된다
function returnAny(message) {
    console.log(message);
}
var any1 = returnAny("리턴은 아무거나");
any1.toString();
var looselyTyped = {};
// any가 객체를 통해 계속 전파가 되는 예시, 이후 안정성을 잃는 결과를 가져올 수 있음
var d = looselyTyped.a.b.c.d;
function leakingAny(obj) {
    // a를 number로 설정함으로써 누수가 없게 처리
    var a = obj.num;
    var b = a + 1; // b는 number가 된다
    return b;
}
var c = leakingAny({ num: 0 }); // c는 number
// c.indexOf('0'); // c는 number가 아니므로 에러
