console.log("## EJERCICIOS DÍA 6 ##");
console.log("## EJERCICIOS NIVEL 1 ##");

import { webTechs } from "./cadenas_dia_6.js";
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
