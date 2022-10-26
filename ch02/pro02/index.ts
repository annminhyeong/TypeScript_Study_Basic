function 함수(a: string | undefined) {
  if (a && typeof a == 'string') {
  }
}

type Fish = { swim: string };
type Bird = { fly: string };

function 함수2(animal: Fish | Bird) {
  //1방법. Fish타입안에 swim 값 쓰고 싶을 때 타입 체크하기
  if ('swim' in animal) {
  }
}

//부모클래스 타입인지 체크해줌
let 날짜 = new Date();
if (날짜 instanceof Date) {
}

type Car = {
  wheel: '4개';
  color: string;
};

type Bike = {
  wheel: '2개';
  color: string;
};

function 함수3(x: Car | Bike) {
  if (x.wheel == '4개') {
    //x가 car타입인지 확인
  }
}
