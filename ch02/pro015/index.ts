interface Person {
  age: number;
  name: string;
}
//Person 인터페이스의 key값들을 타입으로 변경해 유니온타입으로 합쳐줌
type PersonKeys = keyof Person;
let a: PersonKeys = 'age';

interface Person2 {
  [key: string]: number;
}

//index signature에다가 keyof쓰면 타입을 string | number로 변환해줌
type Person2keys = keyof Person2;

type Car = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

//타입변환기
//지네릭으로 들어온 Type에 있는 모든 key값을 string으로 변경함
type TypeChanger<MyType> = {
  [key in keyof MyType]: string;
};

//새로운타입이 전부 string으로 변경됨
type 새로운타입 = TypeChanger<Car>;

type Bus = {
  color: string;
  model: boolean;
  price: number;
};

type BusChanger<MyType, T> = {
  [key in keyof MyType]: T;
};

type NewBus = BusChanger<Bus, boolean>;
type NewBus2 = BusChanger<Bus, string[]>;
