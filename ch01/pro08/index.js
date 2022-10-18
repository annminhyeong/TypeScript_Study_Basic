// var nunu = {
//   q: 'consume',
//   w: 'snowball',
// };

// var garen = {
//   q: 'strike',
//   w: 'courage',
// };

function 기계(구멍) {
  this.q = 구멍;
  this.w = 'snowball';
}

class Hero {
  constructor(구멍) {
    this.q = 구멍;
    this.w = 'snowball';
  }
}

var nunu1 = new 기계('consume');
console.log(nunu1);

var garen1 = new 기계('strike');
console.log(garen1);
