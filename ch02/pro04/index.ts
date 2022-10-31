class User {
  name: string;
  private familyName: string = 'kim';
  constructor(name: string) {
    this.name = name + this.familyName;
  }

  이름변경함수() {
    this.familyName = 'park';
  }
}

let 유저1 = new User('park');
유저1.name = 'min';

//파리미터 자리에 public 붙이면 인스턴스 변수 생략가능
class Person {
  constructor(public name: string) {
    this.name = name;
  }
}

let 자식 = new Person('ann');
