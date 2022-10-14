let 이름: 123;
이름 = 123;

let 접니다: '대머리' | '솔로';
접니다 = '대머리';
접니다 = '솔로';

function 함수(a: 'hello'): 0 | 1 {
  return 1;
}

function 함수2(a: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
  return [a];
}
함수2('가위');

//as const : 객체 value값을 타입으로 지정해줌
var 자료 = {
  name: 'kim',
} as const;

function 내함수(a: 'kim') {}
내함수(자료.name);
