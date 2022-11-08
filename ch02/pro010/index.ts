//위치 타입지정
//? : 값 또는 undefined 사용하고 싶을 때
//? 사용는 맨뒤에만 가능
let 멍멍: [string, boolean?] = ['dog', true];

function 함수(...x: [number, string]) {
  console.log(x);
}

함수(1, '2');

let arr = [1, 2, 3];
//rest 파라미터처럼 타입지정
let arr2: [number, number, ...number[]] = [4, 5, ...arr];

function 함수2(...rest: [string, number, ...(string | number)[]]) {}
