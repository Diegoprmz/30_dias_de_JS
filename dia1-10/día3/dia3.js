
/* Comené este código para poder trabajar con lo demás sin tener el alert saliendo simepre


let mensaje = confirm("Desea imprimir?")
console.log(mensaje); */

const hoy = new Date();
console.log(hoy);
console.log(hoy.getMonth());
console.log(hoy.getDate());
console.log(hoy.getHours());
console.log(hoy.getMinutes());
console.log(hoy.getSeconds());
console.log(hoy.getTime());

//Conseguir fecha Unix de forma Date.now()
const allSeconds = Date.now();
console.log(allSeconds);

console.log("## EJERCICIOS NIVEL 1 ##");

// EJERCICIO 1
let firstName = "Diego";  
let lastName = "Perez";
let country = "Mexico";
let city = "Mexico City";
let isMarried = false;
let age = 20;
let year = 2024;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof isMarried);
console.log(typeof age);
console.log(typeof year);

//EJERCICIO 2
console.log(typeof'10' == 10);

//EJERCICIO 3
console.log(parseInt('9.8') == 10);

//EJERCICIO 4
let trueTrue = true;
let trueFalse = false;
let falseFalse = false;
let falseFalseFalse = true;
let trueTrueTrue = true;
let todoFalso = false;

console.log(trueTrue == trueTrueTrue);

//EJERCICIO 5
    let mayor= 4 > 3;
    let mayorIgual = 4 >= 3;
    let menor = 4 < 3;
    let menorIgual = 4 <= 3;
    let igualdadComparacion = 4 == 4;
    let igualdadIdentica = 4 === 4;
    let valorDiferente = 4 != 4;
    let noIgualdad = 4 !== 4;
    let diferenciaDeDatos = 4 != '4';
    let igualandoDatos = 4 == '4';
    let igualandoIdentidades = 4 === '4';

    let Pythonon = 'Python';
    let jargon = 'jargon';
    let longitudPython = Pythonon.length
    let longitudjargon = jargon.length

    console.log(longitudPython == longitudjargon);

    console.log(mayor);
    console.log(mayorIgual);
    console.log(menor);
    console.log(menorIgual);
    console.log(igualdadComparacion);
    console.log(igualdadIdentica);
    console.log(valorDiferente);
    console.log(noIgualdad);
    console.log(diferenciaDeDatos);
    console.log(igualandoDatos);
    console.log(igualandoIdentidades);

//EJERCICIO 6
let ejercicio61 = 4 > 3 && 10 < 12;
let ejercicio62 = 4 > 3 && 10 > 12;
let ejercicio63 = 4 > 3 || 10 < 12;
let ejercicio64 = 4 > 3 || 10 > 12;
let ejercicio65 = !(4 > 3);
let ejercicio66 = !(4 < 3);
let ejercicio67 = !(false);
let ejercicio68 = !(4 > 3 && 10 < 12);
let ejercicio69 = !(4 > 3 && 10 > 12);
let ejercicio610 = !(4 === '4');

let comprobacion61 = ejercicio61 == true;
let comprobacion62 = ejercicio62 == false;
let comprobacion63 = ejercicio63 == true;
let comprobacion64 = ejercicio64 == true;
let comprobacion65 = ejercicio65 == false;
let comprobacion66 = ejercicio66 == true;
let comprobacion67 = ejercicio67 == true;
let comprobacion68 = ejercicio68 == false;
let comprobacion69 = ejercicio69 == true;
let comprobacion610 = ejercicio610 == true;

//Se que hay mejores maneras de comprobar, pero quería también comprobar mi lógica personal XD

//EJERCICIO 7

const fechaEjercicio7 = new Date();

    const añoHoy = fechaEjercicio7.getFullYear(); console.log(añoHoy);
    const mesHoy = fechaEjercicio7.getMonth(); console.log(mesHoy);
    const fechaHoy = fechaEjercicio7.toDateString(); console.log(fechaHoy);
    const diaHoy = fechaEjercicio7.getDay(); console.log(diaHoy);
    const horaActual = fechaEjercicio7.getHours(); console.log(horaActual);
    const minutosActual = fechaEjercicio7.getMinutes(); console.log(minutosActual);
    const segundosUnix = fechaEjercicio7.getTime(); console.log(segundosUnix);

console.log('## EJERCICIOS NIVEL 2 ##');

//EJERCICIO 1
/* let alturaTriangulo = prompt("ingrese la altura del triángul");
let baseTriangulo = prompt("ingrese la base del triángulo");

let alturaTrianguloNumero = parseFloat(alturaTriangulo);
let baseTrianguloNumero = parseFloat(baseTriangulo);

const formulaAreaTriangulo = (alturaTrianguloNumero * baseTrianguloNumero) /2 ; */ //Salió perfecto pero lo voy a comentar para que no moleste lo demás

/* alert(formulaAreaTriangulo); */

//EJERCICIO 2

/* let ladoA = prompt("Ingrese el lado A del triángulo");
let ladoB = prompt("Ingrese el lado B del triángulo");
let ladoC = prompt("Ingrese el lado C del triángulo");

let ladoANumero = parseFloat(ladoA);
let ladoBNumero = parseFloat(ladoB);
let ladoCNumero = parseFloat(ladoC);

const perimetroTriangulo = ladoANumero + ladoBNumero + ladoCNumero;
alert(perimetroTriangulo); */

//EJERCICIO 3

/* let largoRectangulo = prompt("Introduzca el largo del rectángulo");
let anchoRectangulo = prompt("Introduzca el ancho del rectángulo");

let largo = parseFloat(largoRectangulo);
let ancho = parseFloat(anchoRectangulo);

const areaReactangulo = largo * ancho;
const perimetroRectangulo = areaReactangulo * 2; */

//EJERCICIO 4

const pi = 3.14;

//let radio = prompt("Introduzca el radio del círculo");
//let radioNumero = parseFloat(radio);

//const areaCirculo = pi * (radioNumero*radioNumero);
//const perimetroCirculo = 2 * pi * radioNumero;

//EJERCICIO 5

let m = 2;
let interseccionY = -2;
let interseccionX = (-interseccionY) / m;

console.log(interseccionX);
console.log(interseccionY);
console.log(m);

//EJERCICIO 6

let primerEcuacion = [6,10];
let segundaEcuacion = [2,2];

let x1 = primerEcuacion[0];
let x2 = segundaEcuacion[0];

let y1 = primerEcuacion[1];
let y2 = segundaEcuacion[1];

const pendiente = ( y2 - y1 )/( x2 - x1 );
console.log(`Esta es la pendiente: ${Math.abs(pendiente)}`);

//EJERCICIO 7

let comparacionDePendientes = m < pendiente;
console.log(comparacionDePendientes);

//EJERCICIO 8

let x = Math.floor(Math.random() * 100 ) + 1;
let valorDeY = (x ** 2) + ( 6 * x ) + 9;
console.log(`Para valores de X en un rángo de 1 a 100 el resultado de y es: ${valorDeY}`);

//EJERCICIO 9

/* let horasDeTrabajo = prompt("Ingrese las horas trabajadas por semana:");
let salarioPorHora = prompt("Ingrese la tarifa por hora:");

console.log(`Su ganancia semanal es de $${horasDeTrabajo * salarioPorHora}`); */

//EJERCICIO 10

//let nombre = prompt('Escriba su nombre: ')
//console.log(`${nombre.length > 7 ? 'Tu nombre es largo' : 'Tu nombre es corto'} `);

//EJERCICIO 11

//let nombre = prompt('Escriba su nombre');
//let apellido = prompt('Escriba su apellido');

//console.log(`${nombre.length > apellido.length ? `Tu primer nombre, ${nombre}, es más largo que tu apellido, ${apellido}` : `Tu primer apellido, ${apellido}, es más largo que tu nombre, ${nombre}`}`);

//EJERCICIO 12

const myAge = 1000;
const yourAge = 22;

console.log(`Soy ${myAge - yourAge} años mayor que tú.`);

//EJERCICIO 13

/* let añoDeNacimiento = prompt('Escriba su año de nacimiento');
let edad = 2024 - parseInt(añoDeNacimiento2003);

console.log(edad > 18 ? `Tienes ${edad} años. Tienes la edad para conducir. ` : `Tienes ${edad} años. Podrás conducir dentro de ${edad + (18 - edad)} años.`); */ 

//EJERCICIO 14

/* let añosVididos = prompt('Escriba su edad');
let segundosVividos = (añosVididos * 365) * 3600;

console.log(`Viviste ${segundosVividos} segundos`); */

//EJERCICIO 15

let añoActual = hoy.getFullYear();
let mesActual = hoy.getMonth();
let mesDosDigitos = String(mesActual).padStart(2, '0');

let diaActual = hoy.getDate();
let diasDosDigitos = String(diaActual).padStart(2, '0');

let horasActual = hoy.getHours();
let horaDosDigitos = String(horasActual).padStart(2, '0');

let minutoActual = hoy.getMinutes();
let minutosDosDigitos = String(minutoActual).padStart(2, '0');


console.log(`${añoActual}-${mesDosDigitos}-${diasDosDigitos}  ${horaDosDigitos}:${minutosDosDigitos}`);
console.log(`${diasDosDigitos}-${mesDosDigitos}-${añoActual}  ${horaDosDigitos}:${minutosDosDigitos}`);
console.log(`${diasDosDigitos}/${mesDosDigitos}/${añoActual}  ${horaDosDigitos}:${minutosDosDigitos}`);

console.log(`## EJERCICIOS NIVEL 3 ##`);

//EJERCICIO 1

console.log(`${añoActual}-${mesDosDigitos}-${diasDosDigitos}  ${horaDosDigitos}:${minutosDosDigitos}`);