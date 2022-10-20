var Person = /** @class */ (function () {
    //instance
    function Person(a) {
        //prototype 변수
        this.data = 0;
        this.name = a;
    }
    //prototype 함수
    Person.prototype.함수 = function () { };
    return Person;
}());
var 사람1 = new Person('사람1');
var 사람2 = new Person('사람2');
