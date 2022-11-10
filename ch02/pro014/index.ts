//index signature 쓰면 object 타입지정 한번에 가능
//[key: string] 모든 문자로 된 속성이라는 의미임
interface StringOnly {
  [key: string]: string;
}

interface User2Interface {
  //object에서 키값을 숫자로 지정해도 문자로 변환 되기 때문에
  //키값 타입을 string으로 해도 문제없음
  [key: number]: string;
}

let user: StringOnly = {
  name: 'kim',
  age: '20',
  location: 'seoul',
};

//자바스크립트에서는 object나 array나 비슷함
let user2: User2Interface = {
  0: 'kim',
  1: '20',
  2: 'seoul',
};
user2[0];
user2[1];
user2[2];

//recursive하게 타입지정하기
//'font-size'의 타입이 MyType이면 다시 MyType함수로 들어가고
//최종적으로 number type에 걸려 종료됨
interface MyType {
  'font-size': MyType | number;
}

let css: MyType = {
  'font-size': {
    'font-size': {
      'font-size': 14,
    },
  },
};
