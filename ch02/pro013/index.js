//implemets 인터페이스 쓰면 interface에 있는 속성 들고 있는지 체크해줌
var Car = /** @class */ (function () {
    function Car(a) {
        this.price = 1000;
        this.model = a;
    }
    return Car;
}());
var 붕붕이 = new Car('morning');
