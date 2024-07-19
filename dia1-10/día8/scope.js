/* var a = "JavaScript"; // declarar una variable sin let o const la hace disponible en el objeto window y esta se encuentra en cualquier lugar
var b = 10; // es una variable de scope global y se encuentra en el objeto ventana
function letsLearnScope() {
    console.log(a, b);
    if (true) {
        console.log(a, b);
    }
}
console.log(a, b); // accesibles */

/* let a = "JavaScript"; // es un scope global que se encontrará en cualquier parte de este archivo
let b = 10; // es un scope global que se encontrará en cualquier parte de este archivo
function letsLearnScope() {
  console.log(a, b); // JavaScript 10, accesible
    if (true) {
        let a = "Python";
        let b = 100;
        console.log(a, b); // Python 100
    }
    console.log(a, b);
}
letsLearnScope();
console.log(a, b); // JavaScript 10, accesible */


//scope.js
/* let a = "JavaScript"; // es un scope global que se encontrará en cualquier parte de este archivo
let b = 10; // es un scope global que se encontrará en cualquier parte de este archivo
// Scope de la función
function letsLearnScope() {
  console.log(a, b); // JavaScript 10, accesible
let value = false;
  // Scope del bloque
if (true) {
    // podemos acceder desde la función y fuera de la función pero
    // las variables declaradas dentro del if no serán accesibles fuera del bloque if
    let a = "Python";
    let b = 20;
    let c = 30;
    let d = 40;
    value = !value;
    console.log(a, b, c, value); // Python 20 30 true
}
  // no podemos acceder a c porque el scope de c es sólo el bloque if
  console.log(a, b, value); // JavaScript 10 true
}
letsLearnScope();
console.log(a, b); // JavaScript 10, accesible */