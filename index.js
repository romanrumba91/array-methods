//Metados de arreglos

//Metodo .forEach
//Recorrer un arreglo, no nos devuelve nada por si mismo

const arr = [1, 2, 3, 4, 5];
const resultado = [];
arr.forEach(function (elem) {
  resultado.push(elem * 2);
});

// console.log(resultado);

// arr.forEach((elem) => console.log(elem));

//Retorno implicito
//No puede contener condicionales
//No bucles o varias lineas de codigo

//Nosotros podemos usar el metodo forEach para obtener el mismo resultado de metodos que veremos a continuacion pero con mas codigo y por lo tanto nos ahorran tiempo y hacen mas eficiente nuestro codigo

// ----- map-------

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

const newArray = arr2.map((e) => e * 2);
console.log(arr2);
console.log(newArray);

const ironhackers = ["Emanuel", "Leonardo", "Alan"];

const hiIronhackers = ironhackers.map((e) => `Hola ${e}`);
const two = ironhackers.map((e) => "hola" + " " + e);

console.log(two);

const students = [
  {
    name: "Tony Parker",
    firstProject: 80,
    secondProject: 75,
    finalExam: 90,
  },
  {
    name: "Marc Barchini",
    firstProject: 84,
    secondProject: 65,
    finalExam: 65,
  },
  {
    name: "Claudia Lopez",
    firstProject: 45,
    secondProject: 95,
    finalExam: 99,
  },
  {
    name: "Alvaro Briattore",
    firstProject: 82,
    secondProject: 92,
    finalExam: 70,
  },
  {
    name: "Isabel Ortega",
    firstProject: 90,
    secondProject: 32,
    finalExam: 85,
  },
  {
    name: "Francisco Martinez",
    firstProject: 90,
    secondProject: 55,
    finalExam: 78,
  },
  {
    name: "Jorge Carrillo",
    firstProject: 83,
    secondProject: 77,
    finalExam: 90,
  },
  {
    name: "Miguel López",
    firstProject: 80,
    secondProject: 75,
    finalExam: 75,
  },
  {
    name: "Carolina Perez",
    firstProject: 85,
    secondProject: 72,
    finalExam: 67,
  },
  {
    name: "Ruben Pardo",
    firstProject: 89,
    secondProject: 72,
    finalExam: 65,
  },
];

const promedio = students.map(function (obj) {
  return {
    name: obj.name,
    prom: (obj.firstProject + obj.secondProject + obj.finalExam) / 3,
  };
});
console.log(promedio);

// ---- filter ------

// Este metodo itera un arreglo y crea uno nuevo pero nos devuelve unicamente los valores que pasen una condicion
//Devuelve un arreglo igual de largo que el original o mas corto

//utilizar el metodo filter para que nos devuelva los num pares de un arreglo

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isPair = arr3.filter((num) => num % 2 === 0);
console.log(isPair);

const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
];

const mayores = people.filter(
  (person) => person.age >= 21 // > =
);
console.log(mayores);


// reduce
//  Es un metodo que nos transformar un array/lista de valores en un solo valor
const arr4 = ["1", "2", "3", "4"];

//Reduce comianza con el acumulador igual al primer valor del arreglo y valor actual  comianza con el segundo valor

const resulted = arr4.reduce((acumulador, valorActual) => {
  return acumulador + valorActual;
});

// console.log(resulted);

const menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 },
];

// your code:

const averageCalories = menu.reduce((acc, comida) => {
  console.log("acumulador ", acc);
  console.log("valorActual ", comida);
  return acc + comida.calories;
}, 0);

console.log(averageCalories);