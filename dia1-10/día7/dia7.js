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