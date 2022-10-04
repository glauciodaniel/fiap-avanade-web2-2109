const carros = document.querySelector("#carros");
// document.getElementById - sempre existiu.
const carrosArray = [
  "Chevrolet",
  "Fiat",
  "Ford",
  "Honda",
  "Hyundai",
  "Kia",
  "Mazda",
  "Mercedes-Benz",
  "Nissan",
  "Peugeot",
  "Renault",
  "Toyota",
  "Volkswagen",
];

carrosArray.forEach((value, key) => {
  carros.innerHTML += `<option value="${key}">${value}</option>`;
});

//carrosArray.forEach((value) => console.log(value));

const importados = [
  ["BMW", "320i", "M3", "M4", "X5", "X6", "z4 m40i"],
  ["Audi", "a4", "s4", "s4 avanti", "Q7", "RS7", "e-Tron"],
  ["Mercedes", "gtr", "e63", "s63", "brabus gle", "AMG G63"],
];

importados.forEach((marcas) => {
  const select = document.createElement("select");
  select.setAttribute("id", marcas[0]);
  marcas.forEach((carros, key) => {
    select.innerHTML += `<option value="${carros}">${carros}</option>`;
  });
  document.querySelector("body").appendChild(select);
});

const aereas = [
  "Latam",
  "Gol",
  "Azul",
  "Delta",
  "American Airlines",
  "Emirates",
  "Qatar",
];

const comboAereas = document.createElement("select");
comboAereas.setAttribute("id", "aereas");

aereas.forEach((aerea, key) => {
  comboAereas.innerHTML += `<option value="${key}">${aerea}</option>`;
});
//adicione este combo como um filho no body, no final de todas as tags.
document.querySelector("body").appendChild(comboAereas);
const menu = [
  "Todos",
  "Venda na Amazon",
  "Ofertas do Dia",
  "Prime",
  "Eletrônicos",
  "Ideias para Presente",
  "Brinquedos e Jogos",
  "Computadores",
  "eBooks Kindle",
  "Games",
  "Ferramentas e Construção",
  "Livros",
];

const ulMenu = document.createElement("ul");
ulMenu.setAttribute("id", "menu");
ulMenu.setAttribute("class", "menu-site");

menu.forEach((value, index) => {
  ulMenu.innerHTML += `<li>${value}</li>`;
});

document.querySelector("nav").appendChild(ulMenu);
/////////////////////////////////////////

const newCarros = ["Corsa", "Uno", "Gol", "Palio", "Kombi", "208"];

//adicionar um elemento NO FINAL do array. Push
newCarros.push("Celta", "Monza");

//adicionar um elemento NO INÍCIO do array. Unshift
newCarros.unshift("Fusca");

//remover um elemento do FINAL do array. Pop
const ultimo = newCarros.pop(); //retorna o elemento removido

const primeiro = newCarros.shift(); //retorna o elemento removido

const nomeCompleto = "Glaucio Daniel Souza Santos";
const nomeArray = nomeCompleto.split(" ");
const americanName = [nomeArray.at(-1), nomeArray[0]].join(", ");
// GLAUCIO D S SANTOS
// SANTOS, GLAUCIO
const removeTres = newCarros.splice(0, 3);

console.log(removeTres, "Remove três itens a partir do índice 0");
//console.log(americanName, "Formato americano");
//console.log(newCarros, "NewCarros");
console.log("------------------------------------------");

const frutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];

const primeiras = frutas.slice(3); //copia o array
console.log(frutas, " slice o array original não muda");
console.log(
  primeiras,
  "slice - a partir da primeira posição até a terceira que no caso é o índice 2"
);
//push, pop
//shift, unshift
//splice
//split
//join
console.log("------------------------------------------");
// Programação funcional - imutabilidade, os dados não mudam. O array original não é alterado.
// slice - copia o array.
//slice
const filtro = function (item) {
  return item === "Pera" || item === "Maçã";
  //return item.toLowerCase();
};

// console.log(filtro("Pera"));
const frutasMap = frutas.map(filtro); // map - retorna um novo array. Do início ao fim.
const frutasFilter = frutas.filter(filtro); // filter - retorna um novo array. Filtrando apenas true.
const frutasFind = frutas.find(filtro); // find - retorna a primeira ocorrência que for true.

console.log(frutasFind);

const ages = [
  12, 4, 50, 26, 32, 1, 5, 7, 9, 65, 11, 84, 14, 98, 16, 17, 18, 19,
];

const agesFilter = ages.filter((age) => age >= 18 && age <= 60);

console.log(agesFilter, "adulto");

const agesMap = ages.map((age) => {
  if (age >= 0 && age <= 2) {
    return "bebê";
  } else if (age >= 3 && age <= 11) {
    return "criança";
  } else if (age >= 12 && age <= 17) {
    return "adolescente";
  } else if (age >= 18 && age <= 60) {
    return "adulto";
  } else {
    return "idoso";
  }
});
console.log(agesMap, "agesMap");

const agesFind = ages.find((age) => age > 60);

console.log(agesFind, "idoso");

// três Funções
// map - classifique. 19 - adulto. - mapAge
// filter - retorne somente os adultos. - filterAge
// find - encontre o primeiro idoso. - findAge

//map
//filter
//find
