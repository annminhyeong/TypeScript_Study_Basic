var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function 함수(num) {
    var a = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        a[_i - 1] = arguments[_i];
    }
    //파라미터가 배열에 담겨서 오므로 타입을 배열로 선언해야함
    console.log(a);
}
함수(1, 5, 32, 4, 1, 3);
var arr1 = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr1, true), arr2, true);
var _a = ['변수1', '변수2'], 변수1 = _a[0], 변수2 = _a[1];
console.log(변수1);
console.log(변수2);
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age;
console.log(student);
console.log(age);
var 오브젝트 = { student: true, age: 20 };
function 함수2(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수2(오브젝트);
