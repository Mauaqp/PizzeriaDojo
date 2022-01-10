
function pizzaOven (tipoCorteza, tipoSalsa, quesos, salsas){
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}

//Estilos de Pizza
var estiloChicago = pizzaOven("masa gruesa", "salsa de tomate en trozos", "mozarella", ["salsa de cebolla", "salsa de pimiento"]);
console.log("La pizza estilo Chicago contiene: ", estiloChicago);

var tradicional = pizzaOven("masa blanca", "salsa de tomate", ["mozarella", "parmesano"], ["salsa de ajo", "práprika"]);
console.log("La pizza Tradicional contiene: ", tradicional);

var mozarella = pizzaOven("masa blanca", "salsa de tomate", "mozarella", ["salsa de ajo", "páprika"]);
console.log("La pizza de Mozarella contiene: ", mozarella);

var pepperoni = pizzaOven("masa blanca", "salsa de tomate", "mozarella", "salchicha pepperoni");
console.log ("La pizza de Pepperoni contiene: ", pepperoni);

var lanzadaAMano = pizzaOven("masa lanzada a mano", "salsa de tomate casera", ["mozarella", "parmesano"], "salsa de ajo");
console.log ("La pizza de Lanzada a Mano contiene: ", lanzadaAMano);

var marinara = pizzaOven("masa plana", "salsa de tomate", [ "mozarella", "feta"], ["champiñones", "aceitunas"] );
console.log ("La pizza Marinara contiene: ", marinara);

// Pizzas adicionales
var arequipeña = pizzaOven("masa de chuño", "salsa de tomate ácida", "queso paria", "salsa de rocoto");
console.log ("La pizza Arequipeña contiene: ", arequipeña);

var costeña = pizzaOven("masa integral", "salsa de tomate", ["queso paria", "queso costeño"], "salsa de ajo con cebolla");
console.log ("La pizza costeña contiene: ", costeña);

//Función pizza aleatoria con Math.Random()

var tipoCorteza = [
    "masa gruesa",
    "masa blanca",
    "masa lanzada a mano",
    "masa plana",
    "masa de chuño",
    "masa integral"
];

var tipoSalsa = [
    "salsa de tomate en trozos",
    "salsa de tomate",
    "salsa de tomate casera",
    "salsa de tomate ácida"
];

var quesos = [
    "mozarella",
    "parmesano",
    "feta",
    "queso paria",
    "queso costeño",
    "quesito de mi tierra"
];

var salsas = [
    "salsa de cebolla",
    "salsa de pimiento",
    "salchicha pepperoni",
    "salsa de ajo",
    "salsa de rocoto"
];
// Define rango aleatorio para los arrays de ingredientes multiples
function randomRange(max, min){
    return Math.floor(Math.random() * max - min) + min
}
// Define la funcion para la eleccion random de ingredientes desde la variable
function randomEleccion (arr){
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}
function randomPizza (){
    var pizza = {}
    pizza.tipoCorteza = randomEleccion(tipoCorteza);
    pizza.tipoSalsa = randomEleccion(tipoSalsa);
    pizza.quesos = [];
    pizza.salsas = [];
    for ( let i = 0; i < randomRange(5,1); i++){
        pizza.quesos.push(randomEleccion(quesos));
    }
    for (let i = 0; i < randomRange(5,0); i++){
        pizza.salsas.push(randomEleccion(salsas));
    }
    return pizza
}
console.log("Esta pizza aleatoria contiene: ", randomPizza());