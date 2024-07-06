
/* Comené este código para poder trabajar con lo demás sin tener el alert saliendo simepre
let mensaje = confirm("Desea imprimir?")
console.log(mensaje); */

const hoy = new Date();
console.log(hoy);
console.log(hoy.getMonth());
console.log(hoy.getDate());
console.log(hoy.getHours());
console.log(hoy.getMinutes());
console.log(hoy.getSeconds());
console.log(hoy.getTime());

//Conseguir fecha Unix de forma Date.now()
const allSeconds = Date.now();
console.log(allSeconds);