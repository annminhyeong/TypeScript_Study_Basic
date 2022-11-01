class User {
  //protected는 상속해줄 수 있지만, 객체가 직접접근은 불가능
  //private는 상속해줄 수 없도 없고 , 객체가 직접접근은 불가능
  protected x = 10;
}

class NewUser extends User {
  doThis() {
    this.x = 20;
  }
}

class User2 {
  //static 키워드 : 클래스명.변수명으로 접근가능
  //인스턴스.변수명으로 접근 불가능
  static x = 10;
  y = 20;
}
let 자식 = new User2();
console.log(User2.x);
console.log(자식.y);

class User3 {
  static skill = 'js';
  intro = User3.skill + 'js 전문가입니다';
}

let 철수 = new User3();
console.log(철수);

User3.skill = 'ts';

let 철수2 = new User3();
console.log(철수);
