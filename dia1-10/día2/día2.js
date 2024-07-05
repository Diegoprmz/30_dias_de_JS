
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


//EJERCICIOS DE NIVEL 2

//EJERCICIO 1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
//EJERCICIO 2
let fraseMadreTeresa = '"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."';
console.log(fraseMadreTeresa);
//EJERCICIO 3
let comprobacion = typeof('10');
console.log(comprobacion == 10);//False
let newComprobacion = comprobacion;
console.log(newComprobacion === comprobacion);//True
//EJERCICIO 4
let comprbarFloat = parseFloat(9.8);
console.log(comprbarFloat == 10);//False
let nuevoFloat = Math.ceil(comprbarFloat);
console.log(nuevoFloat == 10);//True
//EJERCICIO 5
let palabrasEncontrarPython = "Python";
let palabrasEncontrarJerga = "Jerga";
console.log("Python " + palabrasEncontrarPython.includes("on"));
console.log("Jerga " + palabrasEncontrarJerga.includes("on"));
//EJERCICIO 6
let comprobarJergon = "Espero que este curso no esté lleno de jerga";
console.log("Jargon " + comprobarJergon.includes("jargon"));
//EJERCICIO 7
let min0 = 0;
let max100 = 100;
let numeroAleatorioEntre0y10 = Math.floor(Math.random() * (max100 - min0 + 1)) + min0;
console.log("Número aleatorio entre 0 y 100: " + numeroAleatorioEntre0y10);
//EJERCICIO 8
let min50 = 50;
let numeroAleatorioEntre50y10 = Math.floor(Math.random() * (max100 - min50 + 1)) + min50;
console.log("Número aleatorio entre 50 y 100: " + numeroAleatorioEntre50y10);
//EJERCICIO 9
let max255 = 255;
let numeroAleatorioEntre0y255 = Math.floor(Math.random() * (max255 - min0 + 1)) + min0;
console.log("Número aleatorio entre 0 y 255: " + numeroAleatorioEntre0y255);
//EJERCICIO 10
let palabraRecorrido = "JavaScript";
let marcadorPalabra = Math.floor(Math.random() * (9 - 0 + 1) - 0);
let caracterRandom = palabraRecorrido.charAt(marcadorPalabra);
console.log(marcadorPalabra);
console.log(caracterRandom);
//EJERCICIO 11
console.log("Este ejercicio está de hueva");
console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125\t");
console.log("No estuvo tan mal");
//EJERCICIO 12
let separandoFrases = fraseEjercicio17.substring(35, 55);
console.log(separandoFrases);