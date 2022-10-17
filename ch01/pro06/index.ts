type 함수타입 = (a: string) => number;

let 함수: 함수타입 = function (a) {
  return 10;
};

type Member = {
  name: string;
  pulsOne: (a: number) => number;
};

let 회원정보: Member = {
  name: 'kim',
  pulsOne(x) {
    return x + 1;
  },
};

회원정보.pulsOne(1);
