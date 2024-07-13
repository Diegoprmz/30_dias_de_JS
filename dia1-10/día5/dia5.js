console.log("## EJERCICIOS DEL DÍA 4 ##");

console.log("## EJERCICIOS NIVEL 1 ##");

//EJERCICIO 1
const arrayVacio = [];

//EJERCICIO 2
const arrayDiego = ['D', 'I', 'E', 'G', 'O'];

//EJERCICIO 3
let longitudArrayDiego = arrayDiego.length;

//EJERCICIO 4
console.log(arrayDiego[0]);
console.log(arrayDiego[3]);
console.log(arrayDiego[4]);

//EJERCICIO 5
const mixedDatatypes = [true, false, 12, 120, "Diego", 'Hola'];
let longitudMixed = mixedDatatypes.length;
console.log(longitudMixed);

//EJERCICIO 6
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" ,"Amazon"];

//EJERCICIO 7
console.log(itCompanies);

//EJERCICIO 8
console.log(itCompanies.length+1);

//EJERCICIO 9
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[Math.floor(itCompanies.length - 1)]);

//EJERCICIO 10
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

//EJERCICIO 11
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

//EJERCICIO 12
console.log(`${itCompanies} son grandes empresas de TI`);

//EJERCICIO 13
console.log(`${itCompanies.includes("Tesla") ? "Apple" : "La empresa no existe"}`);

//EJERCICIO 14
let conteo0 = itCompanies[0].split("");
if (conteo0.includes("o", "o" || "O" , "o")) {
    console.log(itCompanies[0]);
}

let conteo1 = itCompanies[1].split("");
if (conteo1.includes("o", "o" || "O" , "o")) {
    console.log(itCompanies[1]);
}

let conteo2 = itCompanies[2].split("");
if (conteo2.includes("o", "o" || "O" , "o")) {
    console.log(itCompanies[2]);
}

let conteo3 = itCompanies[3].split("");
if (conteo3.includes("o", "o" || "O" , "o")) {
    console.log(itCompanies[3]);
}

let conteo4 = itCompanies[4].split("");
if (conteo4.includes("o", "o" || "O" , "o")) {
    console.log(itCompanies[4]);
}

let conteo5 = itCompanies[5].split("");
if (conteo5.includes("o", "o" || "O" , "o")) {
    console.log(itCompanies[5]);
}

/* let conteo6 = itCompanies[6].split("");
if (conteo6.includes("o", "o" || "O" , "o")) {
    console.log(conteo6);
    console.log(itCompanies[6]);
} */

//EJERCICIO 15
//let arrayOrdenado = itCompanies.sort();
//console.log(arrayOrdenado);

//EJERCICIO 16
let arrayInvertido = itCompanies.reverse();
console.log(arrayInvertido);
arrayInvertido = arrayInvertido.reverse()

//EJERCICIO 17
let cortando3PrimerasEmpresas = itCompanies.slice(3, itCompanies.length+1);
console.log(cortando3PrimerasEmpresas);

//EJERCICIO 18
let cortando3UltimasEmpresas = itCompanies.slice(0, 3);
console.log(cortando3UltimasEmpresas);

//EJERCICIO 19
let cortandoEmpresasDelMedio = itCompanies.slice(4, 5);
console.log(cortandoEmpresasDelMedio);

//EJERCICIO 20
let quitandoPrimeraEmpresa = itCompanies.shift();
console.log(itCompanies);
let poniendoPrimeraEmpresa = itCompanies.unshift(quitandoPrimeraEmpresa);

//EJERCICIO 21
let quitandoLaIntermedia = itCompanies.splice(3, 1);
console.log(itCompanies);

//EJERCICIO 22
let sinUltimaEmpresa = itCompanies.pop();
console.log(itCompanies);

//EJERCICIO 23
let eliminandoTodoElArray = itCompanies.splice();
console.log(eliminandoTodoElArray);

console.log("## EJERCICIOS NIVEL 2 ##");

