//Ejemplo 1
const frutas = ["manzana", "pera", "fresa", "platano"]
console.log("Ejemplo 1: foreach")
frutas.forEach(fruta => console.log(fruta))

//Ejemplo 2
let suma = 0
const numeros = [1,2,3,4,5,6]
console.log("Ejemplo 2: sumatoria")
numeros.forEach(num => suma+= num)
console.log("La suma es " + suma)

const frameworks = ["nodejs", "ruby on rails", "laravel", "django"]
console.log("Ejemplo 3: lenguajes")
frameworks.forEach(framework => console.log(framework.toUpperCase()))

// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/

const frutasList = ["maNzana", "pEra", "freSa", "plaTano"]
const frutillas = frutasList.map(function(frut){
    return frut+"s"
})
console.log("Ejemplo 4: frutas")
console.log(frutasList)
console.log(frutillas)

const fruitUpper = frutasList.map(function(frut){
    return frut.toUpperCase()
})
console.log("Ejemplo 5: frutas UpperCase")
console.log(fruitUpper)

const fruitLower = fruitUpper.map(function(frut){
    return frut.toLowerCase()
})
console.log("Ejemplo 6: frutas UpperCase")
console.log(fruitLower)

//filter es suceptible a mayusculas y minisculas
const nombres = ["Angel" , "Angeles" , "MAna" , "Marco", "Benjamin"]
const nombresWithAn = nombres.filter((nombre) => nombre.includes("An"))
console.log("Ejemplo 7: Filtrado")
console.log(nombresWithAn)

const numerosTel = ["44317560", "05315890", "98718560", "5607890"]
const numerosTelEndWith560 = numerosTel.filter((numTel) => numTel.endsWith("560"))
console.log("Ejemplo 8: Filtrado de numeros")
console.log(numerosTelEndWith560)

const numbers9 = [1, 2, 3, 4, 5]
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0)
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)

const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names10.every((name) => typeof name === 'string') // every
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr)

const edades = [10,30,18,15,5,23,25]
const edad = edades.find((edad) => edad <= 18)
console.log("Ejemplo 11: menores de 18 ")
console.log(edad)

const calificaciones = [
    {nombre: "Angel", calif: 80},
    {nombre: "Miguel", calif: 70},
    {nombre: "Maria", calif: 100},
    {nombre: "Gustavo", calif: 85},
]
const calificacion = calificaciones.find((calificacion) => calificacion.calif > 70)
console.log("Ejemplo 12: Buenas calificaciones")
console.log(calificacion)

// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.
const names13 = ['Juan', 'Miguel', 'Mariana']
const result = names13.findIndex((name) => name.length >= 7)
console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posición "+ (result+1))

// Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.
// lista de elementos
const bools = [true, true, false, true]
// Uso de Some para ver si al menos uno de los elementos es false
const areSomeTrue = bools.some((b) =>  b === false)
console.log("Ejemplo 14: Alguno de los elementos en el array es false: " + areSomeTrue) //true

//Ejemplo 15: Uso de sort para ordenar elementos
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log("Ejemplo 15: Elementos ordernados usando SORT")
console.log(products.sort())

// Ejemplo 16: Ordenando una lista de objetos
const users = [
    { name: 'A', age: 150 },
    { name: 'B', age: 50 },
    { name: 'C', age: 100 },
    { name: 'D', age: 22 },
  ]
  
  users.sort((a, b) => { // podemos invocar una función
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  
  console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
  console.log(users) // sorted ascending
