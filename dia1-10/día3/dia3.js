
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

console.log('## EJERCICIOS NIVEL 2');


