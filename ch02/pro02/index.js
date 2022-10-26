function 함수(a) {
    if (a && typeof a == 'string') {
    }
}
function 함수2(animal) {
    //1방법. Fish타입안에 swim 값 쓰고 싶을 때 타입 체크하기
    if ('swim' in animal) {
    }
}
//부모클래스 타입인지 체크해줌
var 날짜 = new Date();
if (날짜 instanceof Date) {
}
function 함수3(x) {
    if (x.wheel == '4개') {
        //x가 car타입인지 확인
    }
}
