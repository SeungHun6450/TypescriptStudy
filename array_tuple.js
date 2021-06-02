"use strict";
// array 사용 법, 공통 요소의 모임
// 오류가 생길 수 있으므로 이 방법은 사용을 자제한다.
// let list: Array<number> = [1, 2, 3];
// union을 이용하여 string 추가
var list = [1, 2, 3, "4"];
// [39, "Mark"] 식으로 출력을 하려면 tuple을 사용해야함
// tuple 사용 법, 길이가 정해져있고 앞뒤 타입의 자료형을 정해져 그것만을 사용한다
var x;
x = ["hello", 39];
// 에러 발생 : string, number 순으로 작성해야함
// x= [10, "Mark"];
// x[2]; // 개수가 맞지 않음
var personP = ["Mark", 39];
var first = personP[0], second = personP[1];
