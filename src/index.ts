let x: number = 10;
const nome: string = "Gabriella";
let numero = 100;

const array: Number[] = [1, 2, 3, 4];

let myTuple: [number, boolean, string, string[]]
myTuple = [3, false, "beleza", ["bebe", "nenem", "baby"]]

const user: { name: string; age: number } = {
  name: "Gabi",
  age: 25,
}

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

// interfaces

interface MathFunctionParams {
  n1: number;
  n2: number;
}

function sumNumbers(nums: MathFunctionParams) {
  return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 2, n2: 9 }));

function multiplyNumbers(nums: MathFunctionParams) {
  return nums.n1 * nums.n2;
}
const someNumbers: MathFunctionParams = {
  n1: 5,
  n2: 10,
};

// generic

function generic<T>(array: T[]) {
  array.forEach((item) => {
    console.log(`item: ${item}`)
  });
}
const a1 = [1, 3, 4]
const a2 = ["a", "b", "c"]
generic(a1);
generic(a2);

// classes

class User {
  name;
  role;
  isAproved;

  constructor(name: string, role: string, isAproved: boolean) {
      this.name = name;
      this.role = role;
      this.isAproved = isAproved;
  }
  showUserName()  {
      console.log(`O nome do user é: ${this.name}`);

  }
  showUserRole(canShow: boolean) {
      if(canShow) {
      console.log(`idade do usuario é ${this.role}`);
      return;
      }
      
      console.log("Informação restrita!");

  }
  
}
const zeca = new User("ze", "adm", true);
zeca.showUserName();
zeca.showUserRole(false);
console.log(zeca);

// interdaces em classes
// interface Ivehiche {
//     brand: String

// }
console.log(x, nome, numero, array, myTuple, user)
console.log(user.age)
console.log(multiplyNumbers(someNumbers))