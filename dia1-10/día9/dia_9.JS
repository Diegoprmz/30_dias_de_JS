import { countries } from "./arrays.js";
import { names } from "./arrays.js";
import { numbers } from "./arrays.js";
import { products } from "./arrays.js";
import { countriesComplete } from "../día5/countries.js";

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

//Ejercicio 1
const preciosTotales = products.map(product => Number(product.price)).reduce((acc, element) => acc + element, 0);
console.log(preciosTotales);

//Ejercicio 2
const sumaTotalProductos = products.reduce((acc, product) => acc + Number(product.price), 0);
console.log(sumaTotalProductos);

//Ejercicio 3
function categorizeCountries() {
    const categorizeCountriesArr = [];
    const paisesLand = countriesComplete.filter((country) => {
        return country.includes('land');
    })
    categorizeCountriesArr.push(paisesLand);

    const paisesIa = countriesComplete.filter((country) => {
        return country.includes('ia');
    })
    categorizeCountriesArr.push(paisesIa);

    const paisesIsland = countriesComplete.filter((country) => {
        return country.includes('Island');
    })
    categorizeCountriesArr.push(paisesIsland);

    const paisesStan = countriesComplete.filter((country) => {
        return country.includes('stan');
    })
    categorizeCountriesArr.push(paisesStan);
    return categorizeCountriesArr;
};
console.log(categorizeCountries());

//Ejercicio 4
const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function lettersAndCountries() {
    const arrLetrasPaises = [];
    for(let i = 0; i < alfabeto.length; i++) {
        const newRaw = countriesComplete.filter((country) => {
            return alfabeto[i] === country.charAt(0);
        })
        arrLetrasPaises.push({
            letter: alfabeto[i],
            countries: newRaw
        });
    }
    return arrLetrasPaises;
}
console.log(lettersAndCountries());

//Ejercicio 5
function getFirstTenCountries() {
    const firstTenCountries = countriesComplete.slice(0, 10);
    return firstTenCountries;
};
console.log(getFirstTenCountries());

//Ejercicio 6
function getLastTenCountries() {
    const lastTenCountries = countriesComplete.slice(countriesComplete.length - 10, countriesComplete.length);
    return lastTenCountries;
}
console.log(getLastTenCountries());

//Ejercicio 7
const countriesByCapitalLetter = lettersAndCountries();
function mostUsedCapittalLetter(objetoPaises) {
    let bandera = 0;
    let letraUsada = '';
    for (const obj of objetoPaises) {
        let largoArr = obj.countries.length;
        if (largoArr > bandera) {
            bandera = largoArr;
            letraUsada = obj.letter;
        }
    }
    return letraUsada;
};
console.log(mostUsedCapittalLetter(countriesByCapitalLetter));

console.log('## Ejercicios nivel 3 ##');

