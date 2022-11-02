export type Name = string;
export var 나이 = 25;

//타입명 겹치는 거 namespace에 정의해서 충돌 방지함
namespace 네임스페이스 {
  export type Name1 = string | number;
}

//네임스페이스에 있는 타입 사용하기
let 변수: 네임스페이스.Name1 = 123;
