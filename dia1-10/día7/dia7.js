console.log("## EJERCICIOS DÍA 7 ##");

console.log("## EJERCICIOS NIVEL 1 ##");

//EJERCICIO 1
/* function fullName() {
    console.log('Diego Perez Muñoz');
} */

//EJERCICIO 2
function fullName(firstName, lastName) {
    let space = "";
    return firstName + space + lastName; 
}

//EJERCICIO 3
function addNumbers(a, b) {
    return a + b;
}

//EJERCICIO 4
function areaOfRectangle(base, altura) {
    return base * altura;
}

//EJERCICIO 5
function perimeterOfRectangle(base, altura) {
    return (base + altura) * 2; 
}

//EJERCICIO 6
function volumeOfRectPrism(base, largo, alto) {
    return base * largo * alto;
}

//EJERCICIO 7
function areaOfCircle(r) {
    return Math.PI * r * r;
}

//EJERCICIO 8
function circumOfCircle(r) {
    return (Math.PI * 2) * r;
}

//EJERCICIO 9
function density(mass, volume) {
    return mass/volume;
}

//EJERCICIO 10
function speed(distance, time) {
    return distance/time;
}

//EJERCICIO 11
function weight(mass, gravity = 9.81) {
    return mass * gravity;
}

//EJERCICIO 12
function convertCelsiusToFahrenheit(celcius) {
    const celciusToFahrenheit = (celcius * 9/5) + 32;
    return celciusToFahrenheit;
}

//EJERCICIO 13
/* let pesoUsuario = prompt('Introduzca su peso en kg:');
let pesoEnKilos = parseFloat(pesoUsuario);
let altura = prompt('Introduzca su altura en metros:');
let alturaEnMetros = parseFloat(altura);
function imc(peso, altura) {
    let calcularIMC = peso / (altura * altura);
    let imcFinal = calcularIMC.toFixed(1);
    return imcFinal;
}
let imcUsuario = imc(pesoEnKilos, alturaEnMetros)
console.log(imcUsuario);
if (imcUsuario < 18.5) {
    alert('Peso bajo');
} else if (imcUsuario == 18.5 || imcUsuario < 24.9) {
    alert('Peso normal');
} else if (imcUsuario == 25 || imcUsuario < 29.9) {
    alert('Sobrepeso');
} else if (imcUsuario > 30 ) {
    alert('Grado de obesidad');
} */

//EJERCICIO 14
function checkSeason(mes) {
    switch (mes.toLowerCase()) {
        case 'septiembre':
        case 'octubre':
        case 'noviembre':
            return 'Otoño';
        case 'diciembre':
        case 'enero':
        case 'febrero':
            return 'Invierno';
        case 'marzo':
        case 'abril':
        case 'mayo':
            return 'Primavera';
        case 'junio':
        case 'julio':
        case 'agosto':
            return 'Verano';
    
        default:
            return 'Mes no valido';
    }
}

//EJERCICIO 15

/* let a1 = parseInt(prompt('Numero 1'));
let b2 = parseInt(prompt('Numero 2'));
let c3 = parseInt(prompt('Numero 3'));

function majorDaTres(a, b, c) {
    let max = 0; 
    if (a > b) {
        max = a;
    } else {
        max = b;
    }
    if (c > max) {
        max = c;
    }

    return max;
}
const mayorDeTresNumeros = majorDaTres(a1, b2, c3);
console.log(mayorDeTresNumeros); */

console.log("## EJERCICIOS NIVEL 2 ##");

//EJERCICIO 1
function solveLinEquation(a, b, c) {
    let interseccionY = -c / b;
    let interseccionX = -c / a;
    let pendiente = -a / b;
    return {interseccionX , interseccionY, pendiente};
}

//EJERCICIO 2
function solveQuadEcuation(a, b, c) {
    let valorX1 = (-b + Math.sqrt((b ** 2) - 4 * a * c)) / 2;
    let valorX2 = (-b - Math.sqrt((b ** 2) - 4 * a * c)) / 2;
    const ecuacionCuadratica = [valorX1, valorX2];
    return ecuacionCuadratica;
}

//EJERCICIO 3
function printArray(arr) {
    for (const print of arr) {
        console.log(print);
    }
}

//EJERCICIO 4
function showDateTime() {
    const date = new Date();
    let dia = date.getDate().toString().padStart(2, '0');
    let mes = (date.getMonth() + 1 ).toString().padStart(2, '0');
    let año = date.getFullYear();

    let hora = date.getHours().toString().padStart(2, '0');
    let minutos = date.getMinutes().toString().padStart(2, '0');

    let formato = `${dia}/${mes}/${año}  ${hora}:${minutos}`;
    return formato;
}
console.log(showDateTime());

//EJERCICIO 5
function swapValues(a, b) {
    let cambio = a;
    let newX = b;
    let newY = cambio;

    let newValues = `X = ${newX}, Y = ${newY}`;
    return newValues;
}

//EJERCICIO 6
const arrEjemplo = [1, 2, 3, 4, 5];
function reverseArray(arr) {
    const newArrReverse = [];
    for (const element of arr) {
        newArrReverse.unshift(element);
    }
    return newArrReverse;
}
console.log(reverseArray(arrEjemplo));

//EJERCICIO 7
const frutas = [
    "manzana",
    "banana",
    "naranja",
    "uva",
    "mango",
    "piña",
    "fresa",
    "kiwi",
    "melón",
    "sandía",
    "pera",
    "durazno",
    "cereza",
    "mora",
    "frambuesa",
    "arándano",
    "higo",
    "ciruela",
    "papaia",
    "granada",
    "coco",
    "limón",
    "mandarina",
    "aguacate",
    "guayaba",
    "papaya"
];

function capitalizedArray(arr) {
    const arrayCapitalizado = [];
    for (const elemento of arr) {
        arrayCapitalizado.push(elemento.charAt(0).toUpperCase() + elemento.slice(1).toLowerCase());
    }
    return arrayCapitalizado;
}

console.log(capitalizedArray(frutas));

//EJERCICIO 8
function addItem(element) {
    const arrayItems = [];
    arrayItems.push(element);
    return arrayItems;
}

//EJERCICIO 9
function removeItem(elemento, arr) {
    const arrayLower = arr.map(element => element.toLowerCase());
    elemento = elemento.toLowerCase();
    let index = arrayLower.indexOf(elemento);
    if (index !== -1) {
        arrayLower.splice(index, 1);
    }
    return arrayLower;
}

//EJERCICIO 10
function sumOfNumbers(i) {
    let numeroUsuario = i;
    let sumaDeNumeros = 0;
    for ( let i = 0; i <= numeroUsuario; i++) {
        sumaDeNumeros += i;
    }
    return sumaDeNumeros;
}
console.log(sumOfNumbers(5));

//EJERCICIOS 11
function sumOfOdds(number) {
    let numeroUsuario = parseInt(number);
    let sumaImpares = 0;
    for (let i = 0; i <= numeroUsuario; i++) {
        if (i % 2 !== 0) {
            sumaImpares += i;
        };
    }
    return sumaImpares;
}
console.log(sumOfOdds(10));

//EJERCICIO 12
function sumofEven(number) {
    let numeroUsuario = number;
    let sumaPares = 0;
    for (let i = 0; i <= numeroUsuario; i++){
        if (i % 2 == 0) {
            sumaPares += i;
        }
    }
    return sumaPares;
}
console.log(sumofEven(5));

//EJERCICIO 13
function evensAndOdds(naturalNumber) {
    let numeroUsuario = naturalNumber;
    let numeroImpar = 0;
    let numeroPar = 0;
    for(let i = 0; i <= numeroUsuario; i++) {
        if (i % 2 == 0) {
            numeroPar++
        } else {
            numeroImpar++
        }
    }
    return {
        numeroImpar,
        numeroPar
    }
}
console.log(evensAndOdds(100));

//EJERCICIO 14
function sumaValoresIlimitaods(...Numbers) {
    let sumaDeNumerosIlimitados = 0;
    for (const number of Numbers) {
        sumaDeNumerosIlimitados += number;
    }
    return sumaDeNumerosIlimitados;
}

console.log(sumaValoresIlimitaods(5, 9, 16, 20, 35));

//EJERCICIO 15
function randomUserIp() {
    let primerOcteto = Math.floor(Math.random() * 255) + 1;
    let segundoOcteto = Math.floor(Math.random() * 255) + 1;
    let tercerOcteto = Math.floor(Math.random() * 255) + 1;
    let cuartoOcteto = Math.floor(Math.random() * 255) + 1;
    const randomIp = `${primerOcteto}.${segundoOcteto}.${tercerOcteto}.${cuartoOcteto }`;
    return randomIp;
}
console.log(randomUserIp());

//EJERCICIO 16
function randomMacAddress() {
    const arrHexadecimal = "0123456789ABCDEF";
    let direccionMac = '';
    for (let i = 0; i <= 5; i++) {
        direccionMac += arrHexadecimal[Math.floor(Math.random() * 16)];
        direccionMac += arrHexadecimal[Math.floor(Math.random() * 16)];
        if (i < 5) direccionMac += ":";
    }
    return direccionMac;
}
console.log(randomMacAddress());

//EJERCICIO 17
function randomHexaNumberGenerator() {
    const arrHexadecimal = "0123456789ABCDEF";
    let codigoHexadecimal = '#';
    for (let i = 0; i <= 5; i++) {
        codigoHexadecimal += arrHexadecimal[Math.floor(Math.random() * 16)];
    }
    return codigoHexadecimal;
}
console.log(randomHexaNumberGenerator());

//EJERCICIO 18
function userIdGenerator() {
    const arrHexadecimal = "0123456789ABCDEF";
    let userId = '';
    for (let i = 0; i <= 6; i++) {
        userId += arrHexadecimal[Math.floor(Math.random() * 16)];
    }
    return userId;
}
console.log(`Id de usuario: ${userIdGenerator()}`);

console.log("## EJERCICIOS NIVEL 3 ##");

//EJERCICIO 1
function userIdGeneratedByUser() {
    const arrHexadecimal = "0123456789ABCDEF";
    let cantidadCaracteres = parseInt(prompt(`¿Cuántos carácteres tendrán los ID's?`));
    let cantidadIds = parseInt(prompt(`¿Cuántos ID's se van a generar?`));
    let objetoIds = '';
    for (let i = 0; i < cantidadIds; i++) {
        for (let j = 0; j <= cantidadCaracteres; j++) {
            objetoIds += arrHexadecimal[Math.floor(Math.random() * 16)];
        }
        if (i == cantidadIds - 1) {
            break;
        } else {
            objetoIds += ', ';
        }
    }
    return objetoIds;
}

//EJERCICIO 2
function rgbColorGenerator() {
    let primerOcta = Math.floor(Math.random() * 256);
    let segundoOcta = Math.floor(Math.random() * 256);
    let tercerOcta = Math.floor(Math.random() * 256);
    return `rgb(${primerOcta}, ${segundoOcta}, ${tercerOcta})`;
}
console.log(rgbColorGenerator());

//EJERCICIO 3
function arrayOfHexaColors() {
    const arrHexadecimal = "0123456789ABCDEF";
    let contador = Math.floor(Math.random() * 6) + 1;
    const colores = [];
    for (let i = 0; i <= contador; i++) {
        let codigo = '';
        codigo += '#';
        for (let j = 0; j <= 5; j++) {
            codigo += arrHexadecimal[Math.floor(Math.random() * 16)];
        }
        colores.push(codigo)
    }
    return colores;
}
console.log(arrayOfHexaColors());

//EJERCICIO 4
function arrayOfRgbColors() {
    let contador = Math.floor(Math.random() * 6) + 1;
    const colores = [];
    for (let i = 0; i <= contador; i++) { //Genera un número de codigos de color
        let numero = '';
        for (let j = 0; j <= 2; j++){ //Genera los tres octas de los códigos
            let codigo = Math.floor(Math.random() * 256);
            numero += codigo;
            if (j == 2) {
                break;
            } else {
                numero += ', ';
            }
            
        }
        colores.push(`rgb(${numero})`);
    }
    return colores;
}
console.log(arrayOfRgbColors());

//EJERCICIO 5
function convertHexaToRgb(hexa) {
    if (hexa.startsWith('#')) {
        hexa = hexa.slice(1);
    }
    let r = parseInt(hexa.slice(0, 2), 16);
    let g = parseInt(hexa.slice(2, 4), 16);
    let b = parseInt(hexa.slice(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
}
console.log(convertHexaToRgb('#ffffff'));

//EJERCICIO 6
function convertRgbToHexa(rgb) {
    if (rgb.startsWith('rgb(')) {
        rgb = rgb.slice(4, -1);
    }
    const [r, g, b] = rgb.split(',').map(num => parseInt(num.trim(), 10));
    const toHex = num => num.toString(16).padStart(2, '0');

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
console.log(convertRgbToHexa("rgb(255,2,80)"));

//EJERCICIO 7
function generateColors(codeType, numberCodes) {
    if (codeType == 'hexa') {
        const arrHexadecimal = "0123456789ABCDEF";
        let contador = numberCodes;
        const colores = [];
        for (let i = 0; i < contador; i++) {
            let codigo = '';
            codigo += '#';
            for (let j = 0; j <= 5; j++) {
                codigo += arrHexadecimal[Math.floor(Math.random() * 16)];
            }
            colores.push(codigo)
        }
        return colores;
    } else if (codeType == 'rgb') {
        const colores = [];
        for (let i = 0; i < numberCodes; i++) { //Genera un número de codigos de color
        let numero = '';
        for (let j = 0; j <= 2; j++){ //Genera los tres octas de los códigos
            let codigo = Math.floor(Math.random() * 256);
            numero += codigo;
            if (j == 2) {
                break;
            } else {
                numero += ', ';
            }
            
        }
        colores.push(`rgb(${numero})`);
        }
        return colores;
    }
}
console.log(generateColors("rgb", 5));

//EJERCICIO 8
function shuffleArray(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temporal = arr[i];
        arr[i] = arr[j];
        arr[j] = temporal;
    }
    return arr;
}
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffleArray(arr));

//EJERCICIO 9
function factorial(num) {
    let fac = num;
    for (let i = num; i >= 1; i--) {
        if (i > 1) {
            let temp = fac * (i - 1);
            fac = temp;
        } else if (i = 1) {
            let temp = fac * i;
            fac = temp;
        }
    }
    return fac;
}
console.log(factorial(8));

//EJERCICIO 10
function isEmpty(element) {
    let bandera = '';
    if (element) {
        bandera += 'No está vacío';
    } else {
        bandera += 'Está vacío';
    }
    return bandera;
}
console.log(isEmpty());

//EJERCICIO 11
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(5,8, 9, 1, 2, 222, 777));

//EJERCICIO 12
const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50
];
function sumOfArrayItems(arr) {
    for(let i =0; i <= arr.length - 1; i++) {
        if (typeof(arr[i]) !== 'number') {
            console.log('Arr no es un número');
            continue;
        } else {
            arr = arr.reduce((acc , val) => acc + val, 0);
        }
        return arr;
    }
}
console.log(sumOfArrayItems(numbers));

//EJERCICIO 13
function average(arr) {
    let largo = arr.length;
    for(let i =0; i <= arr.length - 1; i++) {
        if (typeof(arr[i]) !== 'number') {
            console.log('Arr no es un número');
            continue;
        } else {
            arr = arr.reduce((acc , val) => acc + val, 0);
        }
        return arr/largo;
    }
}
console.log(average(numbers));

//EJERCICIO 14
const fruits = ['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot'];
function modifyArray(arr){
    if (arr.length < 4) {
        console.log('Elemento no encontrado');
    } else {
        arr[4] = arr[4].toUpperCase();
    }
    return arr;
}
console.log(modifyArray(fruits));

//EJERCICIO 15
function isPrime(num) {
    if (num <=1 ) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if ( num % i === 0) {
            return 'No es primo';
        }
    }
    return `El numero ${num} es primo`;
}
console.log(isPrime(19));

//EJERCICIO 16
function isUnique(arr) {
    const seen = new Set();
    const duplicados = new Set();

    for (const element of arr) {
        if (seen.has(element)) {
            duplicados.add(element);
        } else {
            seen.add(element);
        }
    }
    for (const element of arr) {
        if (duplicados.has(element)) {
            console.log(`El elemento ${element} está repetido`);
        } else {
            console.log(`El elemento ${element} es único`);
        }
    }
}

//EJERCICIO 17
const mixedArray = [
    [1, 'texto', true],         // Primera fila: número, cadena, booleano
    [3.14, 'más texto', false], // Segunda fila: número, cadena, booleano
    [null, [1, 2, 3], { clave: 'valor' }] // Tercera fila: null, array, objeto
];
const numberArray = [10, 20, 30, 40, 50];

function typeOfData(arr) {
    const tipos = new Set();

    function addElementTypes(subArray) {
        for (const element of subArray) {
            if (Array.isArray(element)) {
                addElementTypes(element); // Recursión para manejar arrays anidados
            } else {
                tipos.add(typeof(element));
            }
        }
    }
    addElementTypes(arr);

    console.log(tipos);
    if (tipos.size > 2) {
        return `El array tiene distintos tipos de datos`;
    } else { 
        return `El array es un único tipo de datos`;
    }
}
console.log(typeOfData(mixedArray));
console.log(typeOfData(numberArray));

//EJERCICIO 18
function isValidVariable(variable) {
    for (const item of toString(variable)) {
        if (item == /.,;@/g) {
            return 'Variable no válida';
        } else {
            return 'Variable válida';
        }
    }
}
const $isNoche = true;
const isNight_ = false;
console.log(isValidVariable($isNoche));

//EJERCICIO 19
function randomArraySeven() {
    const repetidos = new Set();
    const randomNumbers = [];
    for (let i = 0; i <= 6; i++) {
        let posibleNumber = Math.floor(Math.random() * 10);
        if (repetidos.has(posibleNumber)) {
            i--;
            continue;
        } else {
            repetidos.add(posibleNumber);
            randomNumbers.push(posibleNumber);
        }
    }
    return randomNumbers.sort();
}

console.log(randomArraySeven());

//EJERCICIO 20
import { countriesComplete } from "../día5/countries.js";
let otherCountriesComplete = countriesComplete;

function reverseCountries(arr) {
    return otherCountriesComplete.reverse();
}
console.log(reverseCountries());