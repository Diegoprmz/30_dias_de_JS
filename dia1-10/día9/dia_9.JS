import { countries } from "./arrays.js";
import { names } from "./arrays.js";
import { numbers } from "./arrays.js";
import { products } from "./arrays.js";

console.log('## Ejercicios Día 9 ##');
console.log('## Ejercicios Nivel 1 ##');

// Ejercicio 1
// El método forEach itera sobre cada uno de los elementos de un array y devuelve el resultado de una función. El método map puede cambiar los elementos de dicho array y devolver el mismo array modificado. El método filter filtra los elementos de un array y los devuelve y el método reduce itera sobre los elementos de un array pero solamente devuelve un elemento. (El array reducido).

//Ejercicio 2
function callbackFunction(callbackFunction) {
    
}

//Ejercicio 3
countries.forEach(countrie => {
    console.log(countrie);
});

//Ejercicio 4
names.forEach( name => {
    console.log(name);
});

//Ejercicio 5
numbers.forEach(numero => {
    console.log(numero);
});

//Ejercicio 6
const nuevosPaises = countries.map((countrie) => countrie.toUpperCase() );
console.log(nuevosPaises);

//Ejercicio 7
const longitudesPaises = countries.map((countrie) => countrie.length);
console.log(longitudesPaises);

//Ejercicio 8
const numbersSquare = numbers.map((number) => number * number);
console.log(numbersSquare);

//Ejercicio 9
const namesUppercase = names.map((name) => name.toUpperCase());
console.log(namesUppercase);

//Ejercicio 10
// Ya está resuelto 

//Ejercicio 11
const countriesLand = countries.filter((countrie) => countrie.includes('land'));
console.log(countriesLand);

//Ejercicio 12
const paisesLargos = countries.filter((countrie) => {
    return countrie.length > 6;
});
console.log(paisesLargos);

//Ejercicio 13
// El ejercicio 12 también va de lo mismo

//Ejercicio 14
const paisesConE = countries.filter((countrie) => {
    return countrie.charAt(0) == 'E' ;
});
console.log(paisesConE);

//Ejercicio 15
const preciosValidos = products.filter((product) => {
    return product.price;
});
console.log(preciosValidos);

//Ejercicio 16
function getStringList(arr) {
    return arr.filter((element) => {
        return typeof element === String;
    })
};

//Ejercicio 17
const sumaDeTodosLosNumerosDeNumbers = numbers.reduce((acc, number) => acc += number);
console.log(sumaDeTodosLosNumerosDeNumbers);

//Ejercicio 18
const newCountriesPhrase = countries.reduce((phrase, countrie) => phrase + ', ' + countrie);
console.log(newCountriesPhrase + ' son paises de Europa');

//Ejercicio 19
//La diferencia entre some y any es que el método some, lee el array y si alguno de los elementos del array cumple con la condición, se devolverá dicho elemento. Con el método any, absolutamente todos los elementos del array se verán afectados. Ambos devuelven un booleano.

//Ejercicio 20
const nombresMayoresA7 = names.some((nombre) => {
    return nombre.length > 7;
});
console.log(nombresMayoresA7);

//Ejercicio 21
const paisesPalabraLand = countries.every((country) => {
    return country.includes('land');
});
console.log(paisesPalabraLand);

//Ejercicio 22
//La diferencia entre find y findIndex es que find retorna el primer elemento que cumpla con la condición. Mientras que findIndex devuelve el index del primer elemento que cumpla con la condición.

//Ejercicio 23
const paisCon6Letras = countries.find((country) => {
    return country.length == 6;
});
console.log(paisCon6Letras);

//Ejercicio 24
const pais6LetrasOtro = countries.findIndex((country) => {
    return country.length == 6;
});
console.log(pais6LetrasOtro);

//Ejericico 25
const dondeNoruega = countries.findIndex((element) => {
    return element == 'Norway';
});
console.log(dondeNoruega);

//Ejercicio 26
const dondeRusia = countries.findIndex((element) => {
    return element == 'Russia';
});
console.log(dondeRusia);

console.log('## Ejercicios nivel 2 ##');