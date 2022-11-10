interface CarType {
  model: string;
  price: number;
}

//implemets 인터페이스 쓰면 interface에 있는 속성 들고 있는지 체크해줌
class Car implements CarType {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}
let 붕붕이 = new Car('morning');
