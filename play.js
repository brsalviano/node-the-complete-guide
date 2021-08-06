const name = "Max"; //Usamos const quando não temos intenção de mudar.
let age = 29; //let é uma forma moderna de declarar variável
const hasHobbies = true;

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
