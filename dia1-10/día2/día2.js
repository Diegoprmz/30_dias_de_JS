
//EJERCICIOS NIVEL 1

// EJERCICIO 1
let desafio = "30 días de JavaScript";
//EJERCICIO 2
console.log(desafio);
//EJERCICIO 3
console.log(desafio.length);
//EJERCICIO 4 Y 5
console.log(desafio.toUpperCase());
console.log(desafio.toLowerCase());
//EJERCICIO 6 Y 7
console.log(desafio.substring(3,7));
console.log(desafio.substring(3,22));
//EJERCICIO 8
let incluyeScript = desafio.includes("Script");
console.log(incluyeScript);
//EJERCICIO 9 Y 10
let splitEnArray = desafio.split(" ");
console.log(splitEnArray);
//EJERCICIO 11
let marcasTech = " Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon ";
let marcasArray = marcasTech.split(",");
console.log(marcasArray);
//EJERCICIO 12
let pythonReplace = desafio.replace("JavaScript","Python");
console.log(pythonReplace);
//EJERCICIO 13
let caracter15 = desafio.charAt(15);
console.log(caracter15);
//EJERCICIO 14
let lugarDeLaJ = desafio.charAt(12);
let codigoDeLaJ = lugarDeLaJ.charCodeAt();
console.log(codigoDeLaJ);
//EJERCICIO 15
let apareceLaA = desafio.indexOf("a");
console.log(apareceLaA - 1);
//EJERCICIO 16
let ultimaVezQueApareceLaA = desafio.lastIndexOf("a");
console.log(ultimaVezQueApareceLaA);
//EJERCICIO 17
let fraseEjercicio17 = "No puedes terminar una oración con porque porque porque es una conjunción";
let encontrarPorque = fraseEjercicio17.indexOf("porque");
console.log(encontrarPorque);
//EJERCICIO 18
let ultimoPorque = fraseEjercicio17.lastIndexOf("porque");
console.log(ultimoPorque);
//EJERCICIO 19 
let buscarPorque = fraseEjercicio17.search("porque");
console.log(buscarPorque);
//EJERCICIO 20
let nuevaFraseParaEjercicio = "  30 días de JavaScript  ";
let removerEspacios = nuevaFraseParaEjercicio.trim();
console.log(removerEspacios);
//EJERCICIO 21 y 22
let verdaderoInicio = desafio.startsWith("30");
let verdaderoFinal = desafio.endsWith("ipt");
console.log(verdaderoInicio);
console.log(verdaderoFinal);
//EJERCICIO 23
let encontrarTodasLasA = desafio.match(/a/g);
console.log(encontrarTodasLasA);
//EJERCICIO 24
let frase1 = "30 días de ";
let frase2 = "JavaScript";
console.log(frase1 + frase2);
//EJERCICIO 25
console.log(desafio.repeat(2));