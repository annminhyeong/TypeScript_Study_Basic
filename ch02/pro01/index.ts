function 함수(num, ...a: number[]) {
  //파라미터가 배열에 담겨서 오므로 타입을 배열로 선언해야함
  console.log(a);
}

함수(1, 5, 32, 4, 1, 3);

let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr1, ...arr2];

let [변수1, 변수2] = ['변수1', '변수2'];
console.log(변수1);
console.log(변수2);

let { student: student, age: age } = { student: true, age: 20 };
console.log(student);
console.log(age);

let 오브젝트 = { student: true, age: 20 };

function 함수2({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}

함수2(오브젝트);
