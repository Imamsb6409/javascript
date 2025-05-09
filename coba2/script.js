    // console.log(2+"2"+1+1-1);
    // console.log(Boolean("false"));
    // console.log(typeof (null));
    // let x = 5;
    // let y = ++x;
    // console.log(y);

    // function greet(name) {
    //     return "Hello, " + name + "!";
    // }

    // console.log(greet("Alice"));

    // const person = {
    //     nama: "John",
    //     // nama sebagai key dan John sebagai value
    //     umur: 30,
    //     city: "New York"
    // }

// console.log(person.umur);
// person.ttl = "06April2009";
// console.log(person.ttl);
// delete person.city;
// // menghapus key city
// console.log(person);
// let fruits = ['apple', 'banana', 'orange'];
// fruits[0] = 'grape';
// console.log(fruits);
// function myFunc(...params) {
//     console.log(params.length);
// }
// myFunc("one","three", "four");

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3));

let mySet = new Set([1, 2, 3]);
mySet.add(2);
console.log(mySet);


const names = ['abdul', 'budi', 'banu', 'chandra', 'bejo'];
const [name1, name2,name3, ...rest] = names;
console.log(rest);
const arrayOne = [1, 2, 3];
const arrayTwo = [...arrayOne, 4, 5];
console.log(arrayTwo);