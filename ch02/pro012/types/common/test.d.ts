//d.ts는 타입정의 보관용 파일임
//d.ts는 글로벌 모듈아님
//config파일 설정하면 글로벌모듈처럼 사용가능 보통은 export해서 씀
export type Age = number;

export interface Person {
  name: string;
}
