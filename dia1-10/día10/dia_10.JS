console.log('## Ejercicios Día 10##');

console.log('## Ejercicios Nivel 1 ##');

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
