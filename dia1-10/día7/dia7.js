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