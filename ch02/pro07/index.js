function 함수(x) {
    return x[0];
}
var a = 함수([4, 2]);
var b = 함수(['4', '2']);
//제네릭에서 extends는 해당 타입으로 타입을 제한한다는 의미임
function 함수2(x) {
    return x.length;
}
var c = 함수2(['3']);
