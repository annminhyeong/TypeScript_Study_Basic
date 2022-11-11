//extends : 오른쪽타입을 T가 가지고 있는지 확인
type Age<T> = T extends string ? T : unknown;

let a: Age<string>;
let a2: Age<number>;

type FirstItem<T> = T extends any[] ? [0] : any;
let age1: FirstItem<string[]>;
let age2: FirstItem<number>;

//infer : 왼쪽에있는 타입 추출해줌
type 타입추출<T> = T extends infer R ? R : unknown;
//배열타입 추출 ex) string[] => string
type 타입추출1<T> = T extends (infer R)[] ? R : unknown;
//함수리턴타입 추출 ex) ()=>void => void
type 타입추출2<T> = T extends () => infer R ? R : unknown;

type a = 타입추출1<string[]>;
type b = 타입추출2<() => void>;

//함수 넣으면 리턴타입만 추출하는 방법
type c = ReturnType<() => void>;
