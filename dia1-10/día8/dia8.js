console.log('## EJERCICIOS DÍa 8 ##');
console.log('## EJERCICIOS NIVEL 1 ##');

//EJERCICIO 1
const dog = {};

//EJERCICIO 2
console.log(dog);

//EJERCICIO 3
dog.name = 'Jacob';
dog.legs = 4;
dog.color = 'Red';
dog.age = 11;
dog.bark = () => console.log('woof woof');

//EJERCICIO 4
const valuesDog = Object.values(dog);
console.log(valuesDog);

//EJERCICIO 5
dog.breed = 'Husky';
dog.getDogInfo = () => Object.values(dog);

console.log('## EJERCICIOS NIVEL 2 ##');

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
};

//EJERCICIO 1
function mostSkills(obj) {
    let usuarioMasSkills = '';
    let masSkills = 0;

    for (const key in obj) {
        if (obj[key].skills.length > masSkills) {
            masSkills = obj[key].skills.length;
            usuarioMasSkills = key;
        }
    }
    return usuarioMasSkills;
};
console.log(mostSkills(users));

//EJERCICIO 2
function usersConected(obj) {
    let contador = 0;
    for (const key in obj) {
        if (obj[key].isLoggedIn == true) {
            contador++;
        }
    }
    return contador;
};
console.log(usersConected(users));

function bestPointedUsers(obj) {
    let usuariosMasPuntos = 0;
    for (const key in obj) {
        if (obj[key].points >= 50) {
            usuariosMasPuntos++;
        }
    }
    return usuariosMasPuntos;
}
console.log(bestPointedUsers(users));

//EJERCICIO 3
function MERNUseres(obj) {
    let usuariosMERN = [];
    for (const key in obj) {
        if (obj[key].skills.includes('MongoDB', 'Express', 'React', 'Node')) {
            usuariosMERN.push(key);
        }
    }
    return usuariosMERN;
}
console.log(MERNUseres(users));

//EJERCICIO 4
const copiaUseres = Object.assign({}, users);
console.log(copiaUseres);
copiaUseres.Diego = 'Diego';
console.log(copiaUseres);

//EJERCICIO 5
function allKeys(obj) {
    for (const key in obj) {
        const todo = Object.keys(obj);
        return todo;
    }
}
console.log(allKeys(users));

//EJERCICIO 6
function allValues(obj) {
    for (const key in obj) {
        const todo = Object.values(obj);
        return todo;
    }
}
console.log(allValues(users));

console.log('## EJERCICIOS NIVEL 3 ##');

//EJERCICIO 1
const personAccount = {
    firstName: 'Diego',
    lastNames: 'Perez',
    incomes: [
        {descripcion: 'Salario', amount: 4500},
        {descripcion: 'Freelance', amount: 3000}
    ],
    expenses: [
        {descripcion: 'Escuela', amount: 600},
        {descripcion: 'Comida', amount: 800},
        {descripcion: 'viajeAngie', amount: 2500},
        {descripcion: 'Auto', amount: 500}
    ],
    totalIncomes: function() {
        return this.expenses.reduce((total, income) => total + income, 0);
    }, 
    totalExpenses: function() {
        return this.expenses.reduce((total, expenses) => total + expenses, 0);
    },
    accountInfo: function() {
        return `Nombre: ${this.firstName} ${this.lastNames} \nIngresos totales: $${this.totalIncomes}\nGastos Totales: $${this.totalExpenses}\nBalance: $${this.accountBalance}`
    },
    addIncome: function(descripcion, amount) {
        this.incomes.push({descripcion, amount});
    },
    addExpenses: function(descripcion, amount) {
        this.expenses.push({descripcion, amount});
    },
    accountBalance: function() {
        return this.totalIncomes() - this.totalExpenses();
    }
};
console.log(personAccount);
personAccount.addIncome('Venta Página Web', 1800);
personAccount.addExpenses('Vacaciones Angie Familia', 4000);
console.log(personAccount);

console.log('## EJERCICIOS NIVEL 3 ##');

//EJERCICIO 2

const usersObj = [
    {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2020 9:00 AM",
        isLoggedIn: false,
    },
    {
        _id: "fg12cy",
        username: "Asab",
        email: "asab@asab.com",
        password: "123456",
        createdAt: "08/01/2020 9:30 AM",
        isLoggedIn: true,
    },
    {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2020 9:45 AM",
        isLoggedIn: true,
    },
    {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2020 9:50 AM",
        isLoggedIn: false,
    },
    {
        _id: "ghderc",
        username: "Thomas",
        email: "thomas@thomas.com",
        password: "123333",
        createdAt: "08/01/2020 10:00 AM",
        isLoggedIn: false,
    },
];

const products = [
    {
        _id: "eedfcf",
        name: "mobile phone",
        description: "Huawei Honor",
        price: 200,
        ratings: [
            { userId: "fg12cy", rate: 5 },
            { userId: "zwf8md", rate: 4.5 },
            ],
        likes: [],
    },
    {
        _id: "aegfal",
        name: "Laptop",
        description: "MacPro: System Darwin",
        price: 2500,
        ratings: [],
        likes: ["fg12cy"],
    },
    {
        _id: "hedfcg",
        name: "TV",
        description: "Smart TV:Procaster",
        price: 400,
        ratings: [{ userId: "fg12cy", rate: 5 }],
        likes: ["fg12cy"],
    },
];

//EJERCICIO 2 A)
    function signUp(username) {
        let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
        let newId = '';
        for (let i = 0; i <= 5; i++) {
            let diferencia = Math.floor(Math.random() * 2);
            if (diferencia === 0) {
                newId += Math.floor(Math.random() * 10);
            } else {
                let letra = Math.floor(Math.random() * 26);
                newId += alfabeto[letra];
            }
        }

        for (const user of usersObj) {
            if (username === user.username) {
                console.log('Ya tienes una cuenta');
                return;
            }
        }
        
        let contraseña = '';
        for (let i = 0; i <= 5; i++) {
            contraseña += Math.floor(Math.random() * 10);
        }

        const date = new Date();
        let dia = date.getDate().toString().padStart(2, '0');
        let mes = date.getMonth().toString().padStart(2, '0');
        let year = date.getFullYear();

        let hora = date.getHours().toString().padStart(2, '0');
        let minutes = date.getMinutes().toString().padStart(2, '0');
        const formatoHora = `${dia}/${mes}/${year}  ${hora}:${minutes}`;


        const newUser = {
            _id: `${newId}`,
            username: username,
            email: `${username}@gmail.com`,
            password: contraseña,
            createdAt: formatoHora,
            isLoggedIn: true
        }
        usersObj.push(newUser);
    }
    signUp('Diego');
    console.log(usersObj);

    //EJERCICIO 2 B)
    function signIn(username) {
        for (const user of usersObj) {
            if (username === user) {
                if (!user.isLoggedIn) {
                    user.isLoggedIn = true;
                    console.log(`${username} ha iniciado sesión`);
                } else {
                    console.log(`${username} ya estaba conecato`);
                }
            }
            return;
        }
    };

//EJERCICIO 3
    //EJERCICIO 3 A)
    function rateProduct(nameProduct, userId, rate) {
        for (const producto of products) {
            if (producto.name === nameProduct) {
                producto.ratings.push = ({userId, rate});
                return;
            }
        }
    };
    rateProduct("TV", "Dipzon03", 5)
    console.log(products);

    //EJERCICIO 3 B)
    function averageRatings(nameProduct) {
        for (const producto of products) {
            if (nameProduct === producto.name) {
                let promedio = 0;
                let contador = 0;
                for (const rating of producto.ratings) {
                    promedio += rating.rate;
                    contador++;
                }
                return promedio/contador;
            }
        }
        return 0;
    };
    console.log(averageRatings("mobile phone"));

//EJERCICIO 4
function likeProduct(userId, nameProduct) {
    for (const producto of products) {
        if (nameProduct == producto.name) {
            if (producto.likes.includes(userId)) {
                let elementoBorrar = producto.likes.indexOf(userId);
                producto.likes.splice(elementoBorrar, 1);
            } else {
                producto.likes.push(userId);
            }
        }
    }
};
likeProduct('DIPZON03', "TV")
console.log(products);