# Día 10 #

## Set ##

Set (conjunto) es una colección de elementos. Set solo puede contener elementos únicos. Veamos como crear un set em la sección siguiente.

### Crear un Set vacío ###

const companies = new Set();
console.log(companies); // Set {}

### Creación de Set a partir de Array ###

const languages = [
    "English", 
    "Spanish",
    "French",
    "English",
    "Finnish", 
    "English",
    "French"
];
const uniqueLanguages = new Set(languages);
console.log(uniqueLanguages); // Set { "English", "Spanish", "French", "Finnish"}

Set es un elemento iterable, por lo que podemos iterar sobre cada elemento.

const languages = [
    "English",
    "Finnish",
    "English",
    "French",
    "Spanish",
    "English",
    "French",
];

const setOfLanguages = new Set(languages);
for (const language of setOfLanguages) {
    console.log(language);
}
    English
    Finnish
    Spanish
    French

### Añadir un elemento al Set ###

const companies = new Set(); // crear set vacío
console.log(companies.size); // 0

companies.add("Google"); // añadir un elemento a set
companies.add("Facebook");
companies.add("Amazon");
companies.add("Oracle");
companies.add("Microsoft");
console.log(companies.size); // 5 elements in set
console.log(companies);

_Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"};_

También podemos utilizar un búcle para añadir elementos al Set

const companies = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"];
const setOfCmpanies = new Set();
for (const company of companies) {
    setOfCmpanies.add(company);
};

_Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"};_

### Eliminar un elemento del Set ###

Podemos eliminar un elemento del Set utilizando un método de elminación.

console.log(comanies.delete("Google"));
console.log(comanies.size); // 4 elements in set

### Comprobando un elemento en el Set ### 

El método has puede ayudar a saber si un determinado elemento existe en el Set.

console.log(companies.has("Apple")); //False
console.log(companies.has("Facebook")); //True

### Limpiar un Set ###

Elimina todos los elementos de un set

companies.clear();
console.log(companies.size); // 0 elements in set

De esta manera podemos utilizar un Set:

const languajes = [
    "English",
    "Finnish",
    "English",
    "French",
    "Spanish",
    "English",
    "French"
];
const langSet = new Set(languages);
console.log(langSet); // Set(4) {"English", "Finnish", "French", "Spanish"};
console.log(langSet.size); // 4 elements in set

const counts = [];
const count = {};

for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l);
    console.log(filteredLang); // ["English", "English", "English"];
    counts.push({lang: l, count: filteredLang.length});
}
console.log(counts); [
    { lang: "English", count: 3 },
    { lang: "Finnish", count: 1 },
    { lang: "French", count: 2 },
    { lang: "Spanish", count: 1 },
];

#### Otros casos de uso de Set #### 

Para contar elementos únicos en un array.

Const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
const setOfNumbers = new Set(numbers);
console.log(setOfNumbers); // Set(5) {5, 3, 2, 9, 4};

### Unión de Sets ### 

Para encontrar la unión de dos sets se oueden utulizar el operador de dispersión. Busquemos la unión del set A y el Set B
(A U B);

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C);

Set(6) {1, 2, 3, 4, 5, 6};

### Intersección de Sets ###
Para encontrar la intersección de dos sets se pueden utilizar un filter(). Encontremos la intersección del Set A y el Set B.
(A ∩ B);

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];

let c = a.filter((x) => b.includes(x));
console.log(c);
[3, 4, 5];

### Diferencia de Sets ### 

Para encontrar la diferencia entre dos sets se puede utilizar un filtro. Vamos a encontrar la diferencia del Set A y el Set B
(A \ B);

let a = [1, 2, 3, 4 , 5];
let b = [3, 4, 5, 6];

let A = new Set(a);
let B = new Set(b);

let c = a.filter((num) => !B.has(num));
let C = new Set(c);

console.log(C);

Set(2) {1, 2};

## MAP ## 

*Map* es una estructura de datos que permite almacenar pares de clave valor. A diferencia de los objetos ('{}'), donde las claves son cadenas o símbolos, en un `map` ciualquier valor (incluidos objetos, funciones y otros mapas) pueden ser una clave.

### Características de un Map ###

