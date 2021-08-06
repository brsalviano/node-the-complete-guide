const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am ", this.name);
  },
};

// const printName = (personData) => {
//   console.log(personData.name);
// }

//Destructuring: Pegamos só o que nos interessa:
const printName = ({ name }) => {
  console.log(name);
}

const { name, age } = person;

printName(person);
console.log(name, age);

//Destructuring em arrays
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies; //Neste caso, podemos nomear como quisermos...

printName(person);
console.log(hobby1, hobby2);