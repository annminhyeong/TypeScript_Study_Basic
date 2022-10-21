//type 대신 interface로 타입지정 가능
interface Square {
  color: string;
  width: number;
}
let 네모: Square = { color: 'red', width: 100 };

interface Student {
  name: string;
}

//interface는 중복선언이 가능하지만 type은 불가능
//중복선언하면 두개가 합쳐짐
interface Student {
  score: number;
}

//extends 부모 타입 상속 받기 가능
interface Teacher extends Student {
  age: number;
}

let 학생: Student = { name: 'kim', score: 50 };
let 선생: Teacher = { name: 'kim', age: 20, score: 10 };

type Animal = { name: string };
//type도 & 붙이면 타입 두개 결합 가능
type Cat = { age: number } & Animal;
let 야옹이: Cat = { name: 'kim', age: 20 };
