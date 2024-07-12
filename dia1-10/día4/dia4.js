//Ejercicios día 4

console.log("## EJERCICIOS NIVEL 1 ##");

//EJERCICIO 1
/* let edadUsuario = parseInt(prompt("Ingrese su edad:"));
if (edadUsuario >= 18) {
    console.log("Tienes edad para conducir.");
} else if (edadUsuario < 18) {
    console.log(`Te faltan ${18 - edadUsuario} años para poder conducir.`);
} */

//EJERCICIO 2
/* let edadUsuario = parseInt(prompt("Ingrese su edad:"));
const edadDeDiego = 20;

if (edadDeDiego < edadUsuario) {
    console.log(`Eres ${edadUsuario - edadDeDiego} mayor que yo.`);
} else if (edadDeDiego == edadUsuario) {
    console.log(`Tenemos la misma edad.`);
} else if (edadDeDiego > edadUsuario) {
    console.log(`Eres ${edadDeDiego - edadUsuario} menor que yo.`);
} */

//EJERCICIO 3
const a = 4;
const b = 3;

if (a < b) {
    console.log("a es menor que b");
} else {
    console.log("b es menor que a");
}

console.log(`${a > b ? "a es mayor que b" : "b es mayor que a"} `);

//EJERCICIO 4
let numeroAleatorio = Math.floor(Math.random() * 1000 + 1 );
console.log(numeroAleatorio);
if ((numeroAleatorio % 2) == 0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}

console.log("## EJERCICIOS NIVEL 2 ##");

//ERJCICIO 1
/* let calificacionEstudiante = parseInt(prompt("Ingrese la calificación del morro"));
if (calificacionEstudiante >= 0 && calificacionEstudiante < 50) {
    console.log("F");
} else if (calificacionEstudiante >= 50 && calificacionEstudiante < 60) {
    console.log("D");
} else if (calificacionEstudiante >= 60 && calificacionEstudiante < 70) {
    console.log("C");
} else if (calificacionEstudiante >= 70 && calificacionEstudiante < 80) {
    console.log("B");
} else if (calificacionEstudiante >= 80 && calificacionEstudiante < 100) {
    console.log("A");
} else {
    console.log("NP");
} */

//EJERCICIO 2
/* let mesDeUsuario = prompt("¿Qué mes del año es?");
mesDeUsuario =  mesDeUsuario.toUpperCase();
if (mesDeUsuario == "JULIO" || mesDeUsuario == "JUNIO" || mesDeUsuario == "AGOSTO") {
    console.log("Verano");
} else if (mesDeUsuario == "MARZO" || mesDeUsuario == "ABRIL" || mesDeUsuario == "MAYO") {
    console.log("Primavera");
} else if (mesDeUsuario == "DICIEMBRE" || mesDeUsuario == "ENERO" || mesDeUsuario == "FEBRERO") {
    console.log("Invierno");
} else if (mesDeUsuario == "SEPTIEMBRE" || mesDeUsuario == "OCTUBRE" || mesDeUsuario == "NOVIEMBRE") {
    console.log("Otoño");
} */

//EJERCICIO 3
/* let diaUsuario = prompt("¿Qué día es hoy?").toUpperCase();

switch (diaUsuario) {
    case "LUNES":
        console.log(`El día ${diaUsuario.toLowerCase()} es un día laborable`);
        break;
    
    case "MMARTES" :
        console.log(`El día ${diaUsuario.toLowerCase()} es un día laborable`);
        break;

    case "MIERCOLES":
        console.log(`El día ${diaUsuario.toLowerCase()} es un día laborable`);
        break;

    case "JUEVES":
        console.log(`El día ${diaUsuario.toLowerCase()} es un día laborable`);
        break;

    case "VIERNES":
        console.log(`El día ${diaUsuario.toLowerCase()} es un día laborable`);
        break;

    case "SABADO":
        console.log(`El día ${diaUsuario.toLowerCase()} no es un día laborable`);
        break;

    case "DOMINGO":
        console.log(`El día ${diaUsuario.toLowerCase()} no es un día laborable`);
        break;

    default:
        console.log(`Introduce un día válido.`);
        break;
} */

console.log("## EJERCICIOS NIVEL 3 ##");

/* let mesesDelAño = {
    "enero": 0,
    "febrero": 1,
    "marzo": 2,
    "abril": 3,
    "mayo": 4,
    "junio": 5,
    "julio": 6,
    "agosto": 7,
    "septiembre": 8,
    "octubre": 9,
    "noviembre": 10,
    "diciembre": 11
}

let mesString = prompt("¿Qué mes quiere preguntar?").toLowerCase();
let mesindex = mesesDelAño[mesString];

if (mesindex !== undefined) {
    let año = new Date().getFullYear();
    let diasEnMes = new Date(año, mesindex + 1, 0).getDate();
    console.log(`El mes de ${mesString} tiene ${diasEnMes} días.`);
} else {
    console.log("Mes no válido");
} */