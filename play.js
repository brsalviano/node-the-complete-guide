const name = "Max";
let age = 29;
const hasHobbies = true;

//Arrow function
//O escopo é léxico.
const summarizeUser = (userName, userAge, userHasHoby) => {
  return (
    "Nome é " +
    userName +
    ", idade é " +
    userAge +
    " e o usuário tem hobbies? " +
    userHasHoby
  );
};

//Sintaxe curta de uma arrow function quando há uma única instrução e ela é retornada.
const add = (a, b) => a + b;

//Se tiver só um parâmetro, pode omitir os parenteses.
const addOne = (a) => a + 1;
//Se não tiver parâmetro precisa ter os parenteses.

console.log(summarizeUser(name, age, hasHobbies));
console.log(add(1, 2));
console.log(addOne(4));
