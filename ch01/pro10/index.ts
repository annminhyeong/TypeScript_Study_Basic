class Person {
  //prototype 변수
  data: number = 0;

  //인스턴스 변수 타입지정해야 생성자에서 쓸 수 있음
  name: string;

  //instance
  constructor(a: string) {
    this.name = a;
  }

  //prototype 함수
  함수() {}
}

let 사람1 = new Person('사람1');
let 사람2 = new Person('사람2');
