var User = /** @class */ (function () {
    function User(name) {
        this.familyName = 'kim';
        this.name = name + this.familyName;
    }
    User.prototype.이름변경함수 = function () {
        this.familyName = 'park';
    };
    return User;
}());
var 유저1 = new User('park');
유저1.name = 'min';
//파리미터 자리에 public 붙이면 인스턴스 변수 생략가능
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.name = name;
    }
    return Person;
}());
var 자식 = new Person('ann');
