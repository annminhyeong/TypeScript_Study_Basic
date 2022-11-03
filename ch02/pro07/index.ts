function 함수<MyType>(x: MyType[]): MyType {
  return x[0];
}

let a = 함수<number>([4, 2]);
let b = 함수<string>(['4', '2']);

interface LengthCheck {
  length: number;
}

//제네릭에서 extends는 해당 타입으로 타입을 제한한다는 의미임
function 함수2<MyType extends LengthCheck>(x: MyType) {
  return x.length;
}

let c = 함수2<string[]>(['3']);
