//모든 ts 파일은 글로벌 변수(모듈)임 (import export 안쓰고 사용가능)
//import, export 모듈있으면 이 파일의 변수는 로컬변수(모듈)가 됨
export {};
export var c = 10;

//import, export 있을 때 특정타입을 글로벌 타입으로 지정하기
declare global {
  type Dog = string;
}
