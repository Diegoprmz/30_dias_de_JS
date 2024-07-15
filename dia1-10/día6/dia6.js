console.log("## EJERCICIOS DÍA 6 ##");
console.log("## EJERCICIOS NIVEL 1 ##");

import { fullStack, webTechs } from "./cadenas_dia_6.js";
import { countries } from "./cadenas_dia_6.js";
import { mernStack } from "./cadenas_dia_6.js";
import { alfabeto } from "./cadenas_dia_6.js";


//EJERCICIO 1
for (let i = 0; i < 11; i++) {
    console.log(i);
}

let i1 = 0;
while ( i1 < 11) {
    console.log(i1);
    i1++;
}

let i2 = 0;
do {
    console.log(i2);
    i2++;
} while (i2 <= 10);

//EJERCICIO 2
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

let i3 = 10;
while ( i3 >= 0) {
    console.log(i3);
    i3--;
}

let i4 = 10;
do {
    console.log(i4);
    i4--;
} while (i4 >= 0);

//EJERCICIO 3
let n = Math.floor(Math.random() * 10) + 1 ;
for (let i = 0; i <= n ; i++) {
    console.log(i);
}

//EJERCICIO 4
const hashtag = [];
for (let i = 1; i <= 7; i++) {
    hashtag.push("#");
    console.log(hashtag.join(''));
}

//EJERCICIO 5
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

//EJERCICIO 6
console.log(`i i^2 i^3`);
for (let i = 0; i <= 10; i++) {
    console.log(`${i}  ${i ** 2}  ${i ** 3}`);
}

//EJERCICIO 7
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//EJERCICIO 8
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//EJERCICIO 9
for (let numeroPosible = 2; numeroPosible <= 100; numeroPosible++) {
    let esPrimo = true;
    for (let i = 2; i < numeroPosible; i++ ){
        if (numeroPosible % i == 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log(numeroPosible);
    }
}

//EJERCICIO 10
let suma = 0;
for (let i = 0; i <= 100; i++) {
    suma += i;
    console.log(suma);
}

//EJERCICIO 11
let sumaPares = 0;
let sumaImpares = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sumaPares += i;
    }
    if (i % 2 !== 0) {
        sumaImpares += i;
    }
}

console.log(sumaPares);
console.log(sumaImpares);

//EJERCICIO 12
const sumaTotal = [];
sumaTotal.push(sumaPares);
sumaTotal.push(sumaImpares)
console.log(sumaTotal);

//EJERCICIO 13 y 14
let matriz = [];
for (let i = 1; i <= 5; i++ ){
    var numeroRandom = Math.floor(Math.random() * 1000) + 1 ;
    if (matriz.includes(numeroRandom)) {
         numeroRandom = Math.floor(Math.random() * 1000) + 1 ;
    }
    matriz.push(numeroRandom)
}
console.log(matriz);

//EJERCICIO 15
const arrGenerador = [];
for (let i = 0; i <= 5; i++) {
    var numeroLetra = Math.floor(Math.random() * 2) + 1 ;
    if (numeroLetra == 1) {
        var numeroId = Math.floor(Math.random() * 10);
        arrGenerador.push(numeroId);
    } else {
        var generadorIndexAlfabeto = Math.floor(Math.random() * 28);
        let indexAlfabeto = alfabeto[generadorIndexAlfabeto]
        arrGenerador.push(indexAlfabeto);
    }
}
console.log(arrGenerador.join(""));

console.log("## EJERICIOS NIVEL 2 ##");

//EJERCICIO 1
const generadoraIdAleatorio = [];
let limitador = Math.floor(Math.random() * 15) + 1 ;
for (let i = 0; i <= limitador; i++) {
    var numeroLetra = Math.floor(Math.random() * 2) + 1 ;
    if (numeroLetra == 1) {
        var numeroId = Math.floor(Math.random() * 10);
        generadoraIdAleatorio.push(numeroId);
    } else {
        var generadorIndexAlfabeto = Math.floor(Math.random() * 28);
        let indexAlfabeto = alfabeto[generadorIndexAlfabeto]
        generadoraIdAleatorio.push(indexAlfabeto);
    }
    limitador = Math.floor(Math.random() * 15) + 1 ;
}
console.log(generadoraIdAleatorio.join(""));

//EJERCICIO 2
const codigoHexadecimal = [];
for (let i = 0; i <= 5; i++) {
    let numeroOLetra = Math.floor(Math.random() * 10) + 1 ;
    if (numeroOLetra % 2 == 0) {
        let numeroHexadecimal = Math.floor(Math.random() * 10);
        codigoHexadecimal.push(numeroHexadecimal);
    } else {
        var generadorIndexHexadecimal = Math.floor(Math.random() * 7);
        let indexHexadecimal = alfabeto[generadorIndexHexadecimal];
        codigoHexadecimal.push(indexHexadecimal);
    }
}
console.log(`#${codigoHexadecimal.join('')}`);

//EJERCICIO 3
const codigoRGB = [];
for (let i = 0; i <= 2 ; i++) {
    let codigoNumerico = Math.floor(Math.random() * 255);
    codigoRGB.push(codigoNumerico);
}
console.log(`rgb(${codigoRGB[0]}, ${codigoRGB[1]}, ${codigoRGB[2]})`);

//EJERCICIO 4
const paises = [];
for (const elementoCountries of countries) {
    paises.push(elementoCountries.toUpperCase());
}
console.log(paises);

//EJERCICIO 5
const longitudDeCadaPais = [];
for (const longitudPais of paises) {
    longitudDeCadaPais.push(longitudPais.length);
}
console.log(longitudDeCadaPais);

//EJERCICIO 6
let matrizPaises = [];
for (let i = 0; i <= countries.length - 1; i++) {
    let pais = countries[i];
    let abreviatura = pais.slice(0, 3);
    let longitud = pais.length;
    matrizPaises.push([pais, abreviatura, longitud]);
}
console.log(matrizPaises);

//EJERCICIO 7
const paisesLand = [];
for (let i = 0; i <= countries.length - 1; i++) {
    let pais = countries[i];
    if (pais.includes('land')) {
        paisesLand.push(countries[i]);
    } else if (pais.length == 0) {
        console.log('Todos estos países carecen de la palabra "land"');
    }
}
console.log(paisesLand);

//EJERCICIO 8
const paisesIa = [];
for (let i = 0; i <= countries.length - 1; i++) {
    let pais = countries[i];
    if (pais.includes('ia')) {
        paisesIa.push(countries[i]);
    } else if (pais.length == 0) {
        console.log('Todos estos países carecen de la palabra "ia"');
    }
}
console.log(paisesIa);

//EJERCICIO 9
let palabraMayor = "";
for (let i = 0; i <= countries.length - 1; i++) {
    if (countries[i].length > palabraMayor.length) {
        palabraMayor = countries[i]
    }
}
console.log(palabraMayor);

//EJERCICIO 10
const paisesDeCincoLetras = [];
for (let i = 0; i <= countries.length - 1; i++) {
    if (countries[i].length == 5) {
        paisesDeCincoLetras.push(countries[i])
    }
}
console.log(paisesDeCincoLetras);

//EJERCICIO 11
let palabraMayorWebTechs = "";
for (let i = 0; i <= webTechs.length - 1; i++) {
    if (webTechs[i].length > palabraMayorWebTechs.length) {
        palabraMayorWebTechs = webTechs[i]
    }
}
console.log(palabraMayorWebTechs);

//EJERCICIO 12
const arrayWebTechs = [];
for (let i = 0; i <= webTechs.length - 1 ; i++) {
    let tecnologia = webTechs[i];
    let longitudTecnologia = tecnologia.length;
    arrayWebTechs.push([tecnologia, longitudTecnologia]);
}
console.log(arrayWebTechs);

//EJERCICIO 13
const mernGenerator = [];
for (let i = 0; i <= mernStack.length - 1; i++) {
    mernGenerator.push(mernStack[i].slice(0,1));
}
console.log(mernGenerator.join('').toUpperCase());

//EJERCICIO 14
const tecnologíasWeb = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (const tecnologiaArr of tecnologíasWeb) {
    console.log(tecnologiaArr);
}

//EJERCICIO 15
const frutas = ['banana', 'orange', 'mango', 'lemon'];
const frutasInvertidas = [];
for (let i = frutas.length - 1; i >= 0; i--) {
    frutasInvertidas.push(frutas[i]);
}
console.log(frutasInvertidas);

//EJERCICIO 16
const fullStackJuntos = fullStack[0].concat(fullStack[1]) ;
for (let i = 0; i <= fullStackJuntos.length - 1; i++) {
    console.log(fullStackJuntos[i]);
}

console.log("## EJERCICIOS NIVEL 3 ##");

//EJERCICIO 1
import { countriesComplete } from "../día5/countries.js";

//EJERCICIO 2
const sortedCountries = countriesComplete.sort();

//EJERCICIO 3
const sortedWebTechs = webTechs.sort();
const sortedMernStack = mernStack.sort();

//EJERCICIO 4
const paisesLandComplete = [];
for (let i = 0; i <= sortedCountries.length - 1; i++) {
    if (sortedCountries[i].includes('land')) {
        paisesLandComplete.push(sortedCountries[i]);
    }
}
console.log(paisesLandComplete);

//EJERCICIO 5
let paisMasLargo = "";
for (let i = 0; i <= sortedCountries.length - 1; i++) {
    if (sortedCountries[i].length > paisMasLargo.length) {
        paisMasLargo = sortedCountries[i];
    }
}
console.log(paisMasLargo);

//EJERCICIO 6
//Es el mismo del 4

//EJERCICIO 7
const paisesDeCuatroLetras = [];
for (let i = 0; i <= sortedCountries.length - 1; i++) {
    if (sortedCountries[i].length == 4) {
        paisesDeCuatroLetras.push(sortedCountries[i]);
    }
}
console.log(paisesDeCuatroLetras);

//EJERCICIO 8
const paisesDeDosPalabras = [];
for (let i = 0; i <= sortedCountries.length - 1; i++) {
    if (sortedCountries[i].includes(" ")) {
        paisesDeDosPalabras.push(sortedCountries[i]);
    }
}
console.log(paisesDeDosPalabras);

//EJERCICIO 9
const sortedCountriesReverse = sortedCountries.reverse();
console.log(sortedCountriesReverse.toString().toUpperCase());