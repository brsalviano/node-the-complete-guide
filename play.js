const hobbies = ["Sports", "Cooking"];

const copiedArray = hobbies.slice();
console.log(hobbies);

//Criando uma cópia usando spread operator.
const anotherCopy = [...hobbies];
//Também funciona com objetos {...nomeObjeto}


//Rest operator faz o contrário (junta/merge argumentos em um array).
const toArray = (...args) => {
  return args;
}

//Podemos passar n parâmetros
console.log(toArray(1, 2, 3, 4));