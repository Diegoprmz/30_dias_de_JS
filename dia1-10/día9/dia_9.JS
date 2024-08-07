import { countries } from "./arrays.js";
import { names } from "./arrays.js";
import { numbers } from "./arrays.js";
import { products } from "./arrays.js";
import { countriesComplete } from "../día5/countries.js";
import { countries_data } from "../../countries_data.js";

console.log('## Ejercicios Día 9 ##');
console.log('## Ejercicios Nivel 1 ##');

// Ejercicio 1
// El método forEach itera sobre cada uno de los elementos de un array y devuelve el resultado de una función. El método map puede cambiar los elementos de dicho array y devolver el mismo array modificado. El método filter filtra los elementos de un array y los devuelve y el método reduce itera sobre los elementos de un array pero solamente devuelve un elemento. (El array reducido).

//Ejercicio 2
function callbackFunction(callbackFunction) {
    
}

//Ejercicio 3
countries.forEach(countrie => {
    console.log(countrie);
});

//Ejercicio 4
names.forEach( name => {
    console.log(name);
});

//Ejercicio 5
numbers.forEach(numero => {
    console.log(numero);
});

//Ejercicio 6
const nuevosPaises = countries.map((countrie) => countrie.toUpperCase() );
console.log(nuevosPaises);

//Ejercicio 7
const longitudesPaises = countries.map((countrie) => countrie.length);
console.log(longitudesPaises);

//Ejercicio 8
const numbersSquare = numbers.map((number) => number * number);
console.log(numbersSquare);

//Ejercicio 9
const namesUppercase = names.map((name) => name.toUpperCase());
console.log(namesUppercase);

//Ejercicio 10
// Ya está resuelto 

//Ejercicio 11
const countriesLand = countries.filter((countrie) => countrie.includes('land'));
console.log(countriesLand);

//Ejercicio 12
const paisesLargos = countries.filter((countrie) => {
    return countrie.length > 6;
});
console.log(paisesLargos);

//Ejercicio 13
// El ejercicio 12 también va de lo mismo

//Ejercicio 14
const paisesConE = countries.filter((countrie) => {
    return countrie.charAt(0) == 'E' ;
});
console.log(paisesConE);

//Ejercicio 15
const preciosValidos = products.filter((product) => {
    return product.price;
});
console.log(preciosValidos);

//Ejercicio 16
function getStringList(arr) {
    return arr.filter((element) => {
        return typeof element === String;
    })
};

//Ejercicio 17
const sumaDeTodosLosNumerosDeNumbers = numbers.reduce((acc, number) => acc += number);
console.log(sumaDeTodosLosNumerosDeNumbers);

//Ejercicio 18
const newCountriesPhrase = countries.reduce((phrase, countrie) => phrase + ', ' + countrie);
console.log(newCountriesPhrase + ' son paises de Europa');

//Ejercicio 19
//La diferencia entre some y any es que el método some, lee el array y si alguno de los elementos del array cumple con la condición, se devolverá dicho elemento. Con el método any, absolutamente todos los elementos del array se verán afectados. Ambos devuelven un booleano.

//Ejercicio 20
const nombresMayoresA7 = names.some((nombre) => {
    return nombre.length > 7;
});
console.log(nombresMayoresA7);

//Ejercicio 21
const paisesPalabraLand = countries.every((country) => {
    return country.includes('land');
});
console.log(paisesPalabraLand);

//Ejercicio 22
//La diferencia entre find y findIndex es que find retorna el primer elemento que cumpla con la condición. Mientras que findIndex devuelve el index del primer elemento que cumpla con la condición.

//Ejercicio 23
const paisCon6Letras = countries.find((country) => {
    return country.length == 6;
});
console.log(paisCon6Letras);

//Ejercicio 24
const pais6LetrasOtro = countries.findIndex((country) => {
    return country.length == 6;
});
console.log(pais6LetrasOtro);

//Ejericico 25
const dondeNoruega = countries.findIndex((element) => {
    return element == 'Norway';
});
console.log(dondeNoruega);

//Ejercicio 26
const dondeRusia = countries.findIndex((element) => {
    return element == 'Russia';
});
console.log(dondeRusia);

console.log('## Ejercicios nivel 2 ##');

//Ejercicio 1
const preciosTotales = products.map(product => Number(product.price)).reduce((acc, element) => acc + element, 0);
console.log(preciosTotales);

//Ejercicio 2
const sumaTotalProductos = products.reduce((acc, product) => acc + Number(product.price), 0);
console.log(sumaTotalProductos);

//Ejercicio 3
function categorizeCountries() {
    const categorizeCountriesArr = [];
    const paisesLand = countriesComplete.filter((country) => {
        return country.includes('land');
    })
    categorizeCountriesArr.push(paisesLand);

    const paisesIa = countriesComplete.filter((country) => {
        return country.includes('ia');
    })
    categorizeCountriesArr.push(paisesIa);

    const paisesIsland = countriesComplete.filter((country) => {
        return country.includes('Island');
    })
    categorizeCountriesArr.push(paisesIsland);

    const paisesStan = countriesComplete.filter((country) => {
        return country.includes('stan');
    })
    categorizeCountriesArr.push(paisesStan);
    return categorizeCountriesArr;
};
console.log(categorizeCountries());

//Ejercicio 4
const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function lettersAndCountries() {
    const arrLetrasPaises = [];
    for(let i = 0; i < alfabeto.length; i++) {
        const newRaw = countriesComplete.filter((country) => {
            return alfabeto[i] === country.charAt(0);
        })
        arrLetrasPaises.push({
            letter: alfabeto[i],
            countries: newRaw
        });
    }
    return arrLetrasPaises;
}
console.log(lettersAndCountries());

//Ejercicio 5
function getFirstTenCountries() {
    const firstTenCountries = countriesComplete.slice(0, 10);
    return firstTenCountries;
};
console.log(getFirstTenCountries());

//Ejercicio 6
function getLastTenCountries() {
    const lastTenCountries = countriesComplete.slice(countriesComplete.length - 10, countriesComplete.length);
    return lastTenCountries;
}
console.log(getLastTenCountries());

//Ejercicio 7
const countriesByCapitalLetter = lettersAndCountries();
function mostUsedCapittalLetter(objetoPaises) {
    let bandera = 0;
    let letraUsada = '';
    for (const obj of objetoPaises) {
        let largoArr = obj.countries.length;
        if (largoArr > bandera) {
            bandera = largoArr;
            letraUsada = obj.letter;
        }
    }
    return letraUsada;
};
console.log(mostUsedCapittalLetter(countriesByCapitalLetter));

console.log('## Ejercicios nivel 3 ##');

//Ejercicio 1
const datos_paises = countries_data;
const datos_paises2 = countries_data;
function orderedCountries(arr) {
    return arr.sort((a, b) => {
        const capitalA = a.capital || '';
        const capitalB = b.capital || '';
        return capitalA.localeCompare(capitalB);
    });
}
console.log(orderedCountries(datos_paises));

//Ejercicio 2
const countriesDatosCompletos = countries_data;
function mostUsedLanguages(arr, num) {
    let lenguasOrdenadas = arr.sort((a, b) => {
        const langA = a.languages.length;
        const langB = b.languages.length;
        return langB - langA;
    })
    return lenguasOrdenadas.slice(0, num);
}
console.log(mostUsedLanguages(countriesDatosCompletos, 10));

//Ejercicio 3
function orderedCountriesByPopulation(arr) {
    return arr.sort((a, b) => {
        const populationA = a.population || '';
        const populationB = b.population || '';
        return populationB - populationA;
    })
}
console.log(orderedCountriesByPopulation(datos_paises2));

//Ejercicio 4
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const estadisticas = {
    count(arr) {
        return arr.length;
    },
    sum(arr) {
        return arr.reduce((acc, current) => acc + current, 0);
    },
    min(arr) {
        return Math.min(...arr);
    },
    max(arr) {
        return Math.max(...arr);
    },
    range(arr) {
        return this.max(arr) - this.min(arr);
    },
    mean(arr) {
        return parseInt(this.sum(arr) / this.count(arr));
    },
    median(arr) {
        const sorted = arr.slice().sort((a, b) => a - b);
        const middle = Math.floor(sorted.length / 2);
        if (sorted.length%2 === 0) {
            return (sorted[middle - 1] + sorted[middle]) / 2;
        }
        return sorted[middle];
    },
    mode(arr) {
        const frequency = [];
        let maxFrequency = 0;
        let modes = [];

        arr.forEach(value => {
            frequency[value] = (frequency[value] || 0) + 1;
            if (frequency[value] > maxFrequency) {
                maxFrequency = maxFrequency[value];
                modes = [value];
                } else if (frequency[value] === maxFrequency) {
                    modes.push(value);
            }
        });
        return modes.length === arr.length ? [] : modes;
    },
    var(arr) {
        return this.sum(arr.map(x => Math.pow(x - this.mean(arr), 2))) / this.count(arr);
    },
    standarDeviation(arr) {
        return Math.sqrt(this.var(arr));
    },
    frequencyDistribution(arr) {
        const frequency = {};
        arr.forEach(value => {
            frequency[value] = (frequency[value] || 0) + 1;
        });
        return Object.entries(frequency).map(([value, count]) => ({
            value: Number(value),
        count,
        percentage: (count / this.count(arr)) * 100
    }));
    }
};

console.log(estadisticas.count(ages));
console.log(estadisticas.sum(ages));
console.log(estadisticas.min(ages));
console.log(estadisticas.max(ages));
console.log(estadisticas.range(ages));
console.log(estadisticas.mean(ages));
console.log(estadisticas.median(ages));
console.log(estadisticas.mode(ages));
console.log(estadisticas.var(ages));
console.log(estadisticas.standarDeviation(ages));
console.log(estadisticas.frequencyDistribution(ages));