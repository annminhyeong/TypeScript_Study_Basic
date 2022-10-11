let 회원: number | string = 'kim';
let 회원들: (number | string)[] = [1, '2', 3];
let 오브젝트: { a: number | string } = { a: '123' };

let 이름: any;
이름 = 123;
이름 = 'kim';
이름 = [];
이름 = {};

//any보다 안전함
let 이름1: unknown;
이름1 = 123;
이름1 = 'kim';
이름1 = [];
이름1 = {};

let 변수1: string = 이름;
//let 변수2: string = 이름1;

//string or number 타입이므로 에러
let 나이: string | number;
//나이 + 1;

//unknown 타입이므로 에러
let 나이1: unknown = 1;
//나이1 - 1;
