# Día 9
## Funciones de orden superior

Las Funciones de orden superior son funciones que toman otra función como parámetro o retorna una función como valor. La función de orden superior que se pasa como parámetros se llama callback.

## Callback

Una función de tipo callback es una función que puede ser pasada como parámetro a otra función.

    // una función callback, el nombre de la función puede ser cualquier nombre
    const callback = (n) => {
        return n ** 2
    }
    ​
    // función que toma otra función como callback
    function cube(callback, n) {
        return callback(n) * n
    }
    ​
    console.log(cube(callback, 3));

## Retornar una función

Las fuciones de orden superior retornan una función como valor:

    // Función de orden superior que devuelve otra función
    const higherOrder = (n) => {
      const doSomething = (m) => {
        const doWhatEver = (t) => {
            return 2 * n + 3 * m + t;
        };
        return doWhatEver;
      };
      return doSomething;
    };
    console.log(higherOrder(2)(3)(10));

Veamos los casos donde utilizamos funciónes callback. Por ejemplo, en el método "Foreach" utiliza callbak:

    const numbers = [1, 2, 3, 4, 5];
    const sumArray = (arr) => {
        let sum = 0;
        const callback = function (element) {
            sum += element;
        };
        arr.forEach(callback);
        return sum;
    };
    console.log(sumArray(numbers)); // 15

El ejemplo anterior puede simplificarse como el siguiente:

const numbers = [1, 2, 3, 4]
​
    const sumArray = arr => {
        let sum = 0
        arr.forEach(function(element) {
            sum += element
        })
        return sum;
    }
    console.log(sumArray(numbers)); // 15

## Configuración de tiempo

En **JavaScript** podemos ejecutar algunas actividades en un determinado intervalo de tiempo o podemos programar (Esperar) algún tiempo para ejecutar algunas actividades. Los comandos son los siguientes:
    - setInterval
    - setTimeout

### **Configuración del intervalo mediante la funión setInterval**

En JavaScript usamos las funciones de orden superior para ejecutar alguna actividad continuamente dentro de un intervalo de tiempo. El método global **setInterval** toma unfa función callback y una duración como parámetro. La duración está en milisegundos y la llamada de retorno siempre será llamada en este intervalo de tiempo:

    // Sintaxis
    function callback() {
        // Código 
    }
    setInterval(callback, duration);

    // Ejemplo
    function sayHello() {
        console.log("Hello");
    };
    setInterval(sayhello, 1000); // Imprime _Hello_ cada segundo, 1000ms es 1s

### **Configurar un tiempo con la función setTimeout**

En JavaScript utilizamos la función de orden superior setTimeout para ejecutar una acción en algún momento en el futuro. El método global setTimeout toma una función callback y una duracióncomo parámetro. La duración está en milisegundos y el callback espera esa cantidad de tiempo.

    // Sintaxis 
    function callback() {
        // Código
    };
    setTimeout(callback, duration); // duración en milisegundos.

    <!-- Ejemplo --> 
    function sayHello() {
        console.log("Hello");
    };
    setTimeout(sayHello, 2000);
    Imprime _Hello_ después de 2 segundos.

## Programación funcional

En lugar de escribir un búcle regular, la última versión de JavaScript introdujo un montón de métodos incorporados que pueden ayudarnos a resolver problemas complicados. Todos los métodos incorporados toman la función callback. En esta sección veremos el _foreach, map, filter, reduce, find, every, some y sort_.

### Foreach

**foreach**: Itera los elementos de una array. Utilizamos _forEach_ sólo con arrays. Toma una función callback con elementos, parámetros de índice y el propio array. El índice y el array son opcionales.

    /* Sintaxis */
    arr.forEach(funtion (element, index, arr) {
        console.log(index, element, arr);
    });
    <!-- Utilizando una arrowfunction -->
    arr.forEach(function (element, index, arr) => {
        console.log(index, element, arr);
    });
    <!-- El código anterior se puede escribir también utilizando una explicit arrowfunction -->
    arr.forEach(function (element, index, arr) => console.log(index, element, arr));

    <!-- Ejemplos -->
    let sum = 0;
    const numbers = [1, 2, 3, 4, 5];
    numbers.forEach((num) => console.log(num));
    <!-- 
    1
    2
    3
    4
    5
     -->

     let sum = 0;
     const numbers = [1, 2, 3, 4, 5];
     numbers.forEach((num) => (sum += num));
    <!--
    15
    -->

### Map

**map**: itera sobre los elementos de un array y modificar los elementos del mismo. Toma una función callback con elementos, indice, parámetro del array y devuelve un nuevo array.

    <!-- Sintaxis -->
    const midifiedArray = arr.map(function (element, index, arr) {
        return element;
    });
    <!-- Función flecha return explícito  -->
    const modifiedArray = arr.map ((element, index, arr) => element);

    <!-- Ejemplo -->
    const numbers = [1, 2, 3, 4, 5];
    const numbersSquare = numbers.map((num) => num * num);
    console.log(numbersSquare);
    <!-- [1, 4, 9, 16, 25] -->

### Filter

**filter**: filtra los elementos que cumplen las condiciones de filtrado y devuelve un nuevo array.

    <!-- Sintaxis -->
    array.filter(callback (element, index, arr) => arguments);

    <!-- Filtra los paises que tienen land -->
    const countries = [
        "Albania",
        "Bolivia",
        "Canada",
        "Denmark",
        "Ethiopia",
        "Finland",
        "Germany",
        "Hungary",
        "Ireland",
        "Japan",
        "Kenya",
    ];
    const countriesContainLand = countries.filter((country) => countriy.includes("land"));
    console.log(countriesContainsLand);
    <!-- ['Finland' , 'Ireland'] -->

    const countriesEndsByIa = conuntries.filter((country) => countrie.includes('ia'));
    console.log(countriesEndsByIa);
    <!-- ['Albania', 'Bolivia', 'Ethiopia'] -->

### Reduce

**reduce**: _reduce_ toma una función callback. La función callback toma como parámetro el acumulador, el valor actual y opcional el valor inicial y retorna un único valor. Es un abuena práctica definir un valor inicial para el valor del acumulador. si no especificamos éste parámetro, por defecto el acumulador obtendrá el primer valor del array. Si nuestro arrat es un array vacío, entonces JavaScript lanzará un error.

    <!-- Sintaxis -->
    arr.reduce((acc, cur) => {
        <!-- Aquí van algunas operaciones antes de devolver un valor -->
    }, initial value);

    <!-- Example -->
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    console.log(sum);
    <!-- 15 -->

### Every

**every**: Comprueba si todos los elementos son similares en agún aspecto. Devuelve un booleano.

    <!-- Sintaxis -->
    array.every(callback(element, index, arr) => {
        <!-- Código -->
    });

    <!-- Examples -->
    const names = ['Asabeneh', 'Matias', 'Elias', 'Brook'];
    const areAllStr = names.every((name) => typeOf(name) === "String"); <!-- ¿Son todas strings? -->
    console.log(areAllStr); 
    <!-- True -->

    const bools = [True, True, True, True];
    const areAllTrue = bools.every ( (b) => b === true);
    console.log(areAllTrue);
    <!-- True -->

### Find

**find**: Retorna el primer elemento que cumpla con la condición.

    <!-- Sintaxis -->
    arr.find(callback (element, index, arr) => comparation);

    <!-- Example -->
    const ages = [24, 22, 25, 32, 35, 18];
    const age = ages.find((age) => age < 20);
    console.log(age); <!-- 18 -->

    const names = ["Asabeneh", "Matias", "Elias", "Brook"];
    const result = names.find((name) => name.length > 7);
    console.log(result); <!-- Asabaneh -->

    const scores = [
        { name: "Asabeneh", score: 95 },
        { name: "Mathias", score: 80 },
        { name: "Elias", score: 50 },
        { name: "Martha", score: 85 },
        { name: "John", score: 100 },
    ];
    const score = scores.find((user) => user.score > 80);
    console.log(score); <!-- { name: "Asabaneh", score: 95 } -->

### findIndex

**findIndex**: Retorna la posición del primer elemento que cumple la condición.

    <!-- Sintaxis -->
    arr.findIndex(callback(element, index, arr) => function); <!-- devuelve el índice -->

    <!-- Examples -->
    const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
    const ages = [24, 22, 25, 32, 35, 18];
    
    const result = names.findIndex((name) => name.length > 7);
    console.log(result); // 0
    
    const age = ages.findIndex((age) => age < 20);
    console.log(age); // 5

### some

**some**: comprueba si algunos elemento son similares en algún aspecto. Retorna un booleano.

    <!-- Sintaxis -->
    arr.some((element) => comparation);

    <!-- Example -->
    const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
    const bools = [true, true, true, true];

    const areSomeTrue = bools.some((b) => b === true);
    console.log(areSomeTrue); //true

    const areAllStr = names.some((name) => typeof name === "number"); // ¿Son todas strings ?
    console.log(areAllStr); // false

### sort 

**sort**: El método _sort_ ordena los elementos del array de forma ascendente o descendente. Por defecto, el método _sort()_ ordena los valores como strings. Esto funciona bien para los elementos del array de strings, pero no para los números. Si los valores numéricos se ordenan como strings nos da un resultado erróneo. El método modifica el array original. Se recomienda copiar los datos originales anres de comenzar a utilizar el método _sort()_.

#### Ordenar los valores _Strings_

De manera automática el método _sort()_ ordena los strings de la A a la Z, así que la sintaxis es simplemente asi:

    <!-- Sintaxis -->
    arr.sort();

    <!-- Example -->
    const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
    console.log(products.sort()); // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
    //Ahora la matriz original de productos también está ordenada

### Ordenar valores numéricos _Number_

Al momento de utilizar el método sort en numeros nos devuelve un resultado erroneo, ya que al convertir números a letras el 100 se vuelve 1, lo que no funciona para nuestros objetivos, así que tomamos la función callback del método _sort_ para añadir una función que nos devuelva el resultado correcto.

    <!-- Example -->
    const numbers = [9.81, 3.14, 100, 37];
    <!-- El uso del método sort para ordenar los valores numéricos nos proporciona un resultado erróneo. -->
    console.log(numbers); <!-- [100, 3.14, 37, 9.81] -->

    <!-- Para corregir esto, en la función callback escribimos lo siguiente: -->
    numbers.sort(function (a, b) => {
        return a - b;
    });
    console.log(numbers); <!-- [3.14, 9.81, 37, 100] -->

    <!-- Para ordenar los numeros nuevamente de manera descendete, podemos invertir los parámetros de la función. -->
    numbers.sort( function (a, b) => {
        return b - a;
    });
    console.log(numbers); <!-- [100, 37, 9.81, 3.14] -->

### Ordenar arrays de objetos _Objects_

Al ordenar objetos dentro de un array, utilizamos la clave del objeto para comparar. Veamos el siguiente ejemplo:

<!-- Ejemplo -->
    objArr.sort(function (a, b) {
        if (a.key < b.key) return -1;
        if (a.key > b.key) return 1;
        return 0;
    });

    // 0

    objArr.sort(function (a, b) {
        if (a["key"] < b["key"]) return -1;
        if (a["key"] > b["key"]) return 1;
        return 0;
    });

    const users = [
        { name: "Asabeneh", age: 150 },
        { name: "Brook", age: 50 },
        { name: "Eyob", age: 100 },
        { name: "Elias", age: 22 },
    ];
    users.sort((a, b) => {
        if (a.age < b.age) return -1;
        if (a.age > b.age) return 1;
        return 0;
    });
    console.log(users); // ordenados de forma ascendente
    // [{…}, {…}, {…}, {…}]

# Felicidades, Diego, sé que hay días más complicados que otros, gracias por no rendirte el día de hoy.
