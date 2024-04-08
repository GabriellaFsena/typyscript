"use strict";
let x = 10;
const nome = "Gabriella";
let numero = 100;
const array = [1, 2, 3, 4];
let myTuple;
myTuple = [3, false, "beleza", ["bebe", "nenem", "baby"]];
const user = {
    name: "Gabi",
    age: 25,
};
function logPoint(p) {
    console.log(`${p.x}, ${p.y}`);
}
// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 2, n2: 9 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10,
};
// generic
function generic(array) {
    array.forEach((item) => {
        console.log(`item: ${item}`);
    });
}
const a1 = [1, 3, 4];
const a2 = ["a", "b", "c"];
generic(a1);
generic(a2);
// classes
class User {
    constructor(name, role, isAproved) {
        this.name = name;
        this.role = role;
        this.isAproved = isAproved;
    }
    showUserName() {
        console.log(`O nome do user é: ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
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
console.log(x, nome, numero, array, myTuple, user);
console.log(user.age);
console.log(multiplyNumbers(someNumbers));
