var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User() {
        //protected는 상속해줄 수 있지만, 객체가 직접접근은 불가능
        //private는 상속해줄 수 없도 없고 , 객체가 직접접근은 불가능
        this.x = 10;
    }
    return User;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser.prototype.doThis = function () {
        this.x = 20;
    };
    return NewUser;
}(User));
var User2 = /** @class */ (function () {
    function User2() {
        this.y = 20;
    }
    //static 키워드 : 클래스명.변수명으로 접근가능
    //인스턴스.변수명으로 접근 불가능
    User2.x = 10;
    return User2;
}());
var 자식 = new User2();
console.log(User2.x);
console.log(자식.y);
var User3 = /** @class */ (function () {
    function User3() {
        this.intro = User3.skill + 'js 전문가입니다';
    }
    User3.skill = 'js';
    return User3;
}());
var 철수 = new User3();
console.log(철수);
User3.skill = 'ts';
var 철수2 = new User3();
console.log(철수);
