const aereasNacional = ["Latam", "Gol", "Azul"];

//const latam = aereasNacional[0];
//atribuição por desestruturação de arrays.
//const [latam, gol, azul] = aereasNacional;

console.log(azul);

const airCompanies = [
  ...aereasNacional,
  "Delta",
  "United AirLines",
  "Emirates",
];

const [latam, gol, azul, ...internacionais] = airCompanies;
//internacionais

console.log(airCompanies);

const user = {
  name: "Glaucio Daniel",
  email: "glauciodaniel@gmail.com",
  password: "1235454665465464656655465",
};

//destructuring assignment
const { password, ...data } = user;

console.log("Oh meu Deus!", data);
