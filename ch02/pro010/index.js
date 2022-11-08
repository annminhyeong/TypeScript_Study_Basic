var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//위치 타입지정
//? : 값 또는 undefined 사용하고 싶을 때
//? 사용는 맨뒤에만 가능
var 멍멍 = ['dog', true];
function 함수() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
함수(1, '2');
var arr = [1, 2, 3];
//rest 파라미터처럼 타입지정
var arr2 = __spreadArray([4, 5], arr, true);
function 함수2() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
}
