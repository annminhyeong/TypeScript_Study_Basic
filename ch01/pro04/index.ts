type Animal = string | number | undefined;
let 동물: Animal = 123;

type Animal2 = { name: string; age: number };
let 동물2: Animal2 = { name: 'kim', age: 25 };

type GirlFriend = {
  readonly name: string;
};
const 여친: GirlFriend = {
  name: '엠버',
};

//여친.name = '유라';

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let position: NewType = { x: 3, y: 2 };
