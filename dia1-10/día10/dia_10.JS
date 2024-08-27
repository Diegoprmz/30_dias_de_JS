console.log('## Ejercicios Día 10##');

console.log('## Ejercicios Nivel 1 ##');
import { paises } from "../../paises_comun.js";

//Ejercicio1
const setVacio = new Set();

//Ejercicio2
const setAlDiez = new Set();
for (let i = 1; i <= 10; i++) {
    setAlDiez.add(i);
}
console.log(setAlDiez);

//Ejercicio3
setAlDiez.delete(8);
console.log(setAlDiez);

//Ejercicio4
setAlDiez.clear();
console.log(setAlDiez);

//Ejercicio5
const palabras = ["sol", "luna", "estrella", "mar", "montaña"];
const setString = new Set();
for (const palabra of palabras) {
    setString.add(palabra);
};
console.log(setString);

//Ejercicio6
const mapaPaises = new Map();
for (const pais of paises) {
    mapaPaises.set(pais, pais.length);
}
console.log(mapaPaises);

console.log('## Ejercicios Nivel 2 ##');

//Ejercicio1
const arrPrimero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrSegundo = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const arrTercero = [...arrPrimero, ...arrSegundo];

console.log(arrTercero);

//Ejercicio2
const array1 = [12, 45, 78, 23, 56, 89, 34, 67, 90, 21, 15];
const array2 = [15, 47, 90, 29, 58, 22, 64, 21, 11, 92, 41];

const A = new Set(array1);
const B = new Set(array2);

const c = array1.filter((num) => B.has(num));
const C = new Set(c);

console.log(C);

//Ejercicio3
const diferenciaDeSets = array1.filter((num) => !B.has(num));
console.log(diferenciaDeSets);


console.log('## Ejercicios Nivel 3 ##');

//Ejercicio1
import { countries_data } from "../../countries_data.js";
const lenguajesEnElMundo = new Set();
countries_data.forEach((pais) => {
    pais.languages.forEach((lenguaje) => lenguajesEnElMundo.add(lenguaje));
});
console.log(lenguajesEnElMundo);

//Ejercicio2
const paisesConLengua = new Map();
for (const pais of countries_data) {
    paisesConLengua.set(pais.name, pais.languages);
}
console.log(paisesConLengua);


function lenguasHabladas(countries, numeroDeLenguas) {
    const lenguajeFrecuencia = new Map();

    //Cuenta la frecuencia de cada lenguaje
    for (const pais of countries) {
        for (const lenguaje of pais.languages) {
            if (lenguajeFrecuencia.has(lenguaje)) {
                lenguajeFrecuencia.set(lenguaje, lenguajeFrecuencia.get(lenguaje) + 1);
            } else {
                lenguajeFrecuencia.set(lenguaje, 1);
            }
        }
    }
    
    const lenguajeArray = Array.from(lenguajeFrecuencia.entries()); //Convierte el Map en un array de pares

    lenguajeArray.sort((a, b) => b[1] - a[1]); //Ordena el array descendentemente

    const lenguasMasHabladas = lenguajeArray.slice(0, numeroDeLenguas); //Idiomas más hablados

    return lenguasMasHabladas;
}
const numeroDeLenguas = 25;
const lenguasMasHabladas = lenguasHabladas(countries_data, numeroDeLenguas);

console.log(lenguasMasHabladas);