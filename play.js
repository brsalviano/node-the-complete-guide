//Declarando e atribuindo um variável
var name = "Max";

//Imprimindo no console...
console.log(name);

var age = 29; //number
var hasHobbies = true; //boolean

function summarizeUser(userName, userAge, userHasHoby) {
  return (
    "Nome é " +
    userName +
    ", idade é " +
    userAge +
    " e o usuário tem hobbies? " +
    userHasHoby
  );
}

//Chamando a função e imprimindo no cnsole...
console.log(summarizeUser(name, age, hasHobbies));
