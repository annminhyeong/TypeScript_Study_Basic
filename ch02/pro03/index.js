//never
//함수가 리턴값을 가지면 안됨
//함수가 끝나면 안됨 (endpoint)
function 함수() {
    //1. 에러 발생시키기
    throw new Error();
    //2. while 반복문 쓰기
}
function 함수2(parameter) {
    if (typeof parameter == 'string') {
        console.log(parameter);
    }
    else {
        //이상하게 narrowing하는 경우
        //이럴 경우 타입이 never임
        console.log(parameter);
    }
}
//함수표현식의 경우 naver 타입이 등장하는 경우
//return 타입이 자동으로 never타입으로 변경됨
var 함수3 = function () {
    throw new Error();
};
