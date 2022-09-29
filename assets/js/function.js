const resultado = document.querySelector("#resultado");

//arrow function não acessa 'arguments'

let myFunc = {
  showArguments() {
    resultado.innerHTML = arguments;
    console.log(arguments);
  },
};

myFunc.showArguments(
  "BMW",
  "AUDI",
  "MERCEDES",
  "BENTLEY",
  "FERRARI",
  "LAMBORGHINI"
);
//arrow function não possui ou não acessa arguments.
let myFunc2 = {
  showArguments2: () => {
    resultado.innerHTML = arguments;
    console.log(arguments);
  },
};
myFunc2.showArguments2(
  "Corsa",
  "Escort",
  "Uno",
  "Santana",
  "Gol",
  "Fusca",
  "Kombi"
);
