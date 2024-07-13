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

//EJERCICIO 1
console.log("Ejercicio 1 terminado");

//EJERCICIO 2
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const textSinPuntos = text.replace(/[.,:;!?]/g, "");
const textArray = textSinPuntos.split(/\s+/);
console.log(textArray.length);
console.log(textArray);

//EJERCICIO 3
let shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
    shoppingCart.unshift("Meat");
    shoppingCart.push("Sugar");
    shoppingCart.splice(4, 1);
    let indice = shoppingCart.indexOf("Tea");
    indice !== -1 ? shoppingCart[indice] = "Te Verde" : "";
    console.log(shoppingCart);

//EJERCICIO 4
import  { countries }  from "./countries.js";
countries.includes("Ethiopia") ? console.log("Ethiopia") : countries.push("Ethiopia");

//EJERCICIO 5
import { webTechs } from "./web_techs.js";
console.log(webTechs.includes("SASS"));
webTechs.includes("SASS") ? console.log("Sass es un preprocesador de CSS") : webTechs.push("SASS"), console.log("Sass es un preprocesador de CSS");

//EJERCICIO 6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

console.log("## EJERCICIOS NIVEL 3 ##");

//EJERCICIO 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
    ages.sort();
    let edadMinima = ages[0];
    let edadMaxima = ages[ages.length - 1];
    console.log(edadMinima);
    console.log(edadMaxima);
    let edadMedia = (ages[ages.length / 2] + ages[ages.length / 2  + 1 ])/2
    console.log(edadMedia);
    let edadPromedio = (ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9])/ages.length
    console.log(edadPromedio);
    let rangoEdades = ages[9] - ages[0]
    console.log(rangoEdades);
    let minimoMenosPromedio = parseInt(Math.abs(ages[0] - edadPromedio));
    let maximoMenosPromedio = parseInt(Math.abs(ages[ages.length - 1] - edadPromedio));
    console.log(minimoMenosPromedio);
    console.log(maximoMenosPromedio);
    console.log(ages);

//EJERCICIO 2
/* countries.splice(0, 10);
console.log(countries); */

//EJERCICIO 3
let longitudPaises = countries.length/2;
let paisDelMedio = Math.ceil(longitudPaises);
console.log(paisDelMedio);

//EJERCICIO 4
countries.unshift("Diegolandia");
let puntoMedioPaises = countries.length/2;
const primeraMitad = countries.slice(0, puntoMedioPaises);
const segundaMitad = countries.slice(puntoMedioPaises);
console.log(primeraMitad);
console.log(segundaMitad);