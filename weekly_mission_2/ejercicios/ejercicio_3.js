const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
        "js",
        "c#"
        ],
        missions: {
        onboarding: {
            isFinished: true,
            exercisesFinished: true
        },
        frontend: {
            isFinished: true,
            exercisesFinished: true
        }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
        "js"
        ],
        missions: {
        onboarding: {
            isFinished: false,
            exercisesFinished: false
        },
        frontend: {
            isFinished: false,
            exercisesFinished: false
        }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
        "elixir"
        ],
        missions: {
        onboarding: {
            isFinished: true,
            exercisesFinished: true
        },
        frontend: {
            isFinished: false,
            exercisesFinished: false
        }
        }
    }
]

console.log("Ejercicios con objetos")

console.log("1. Imprime el nombre de cada explorer")
explorers.forEach(explorer => console.log(explorer.name))

console.log("2. Stack de cada explorer con foreach")
explorers.forEach(explorer => console.log(`Stack de ${explorer.name} :  ${explorer.stack}`))

console.log("3. Lista con los stack de cada explorer")
const stackExplorer = explorers.map(function(explorer){
    return explorer.stack
})
console.log("Stack de los explores : " +stackExplorer)

console.log("4. Explorers con js en su stack")
const jsExplorer = explorers.filter((explorer) => explorer.stack.includes("js"))
console.log(jsExplorer)

console.log("5. Busca el primer explorer que sea de la CDMX, usa FIND")
const cdmxExplorer = explorers.find((explorer) => explorer.city == "CDMX")
console.log(cdmxExplorer)

console.log("6.  Suma de exercises_completed usando reduce ")
const exercises_completed = explorers.map(function(explorer){
    return explorer.exercises_completed
})
const sumaExercises = exercises_completed.reduce((acc, element) => acc + element, 0)
console.log("Ejercicios completos " + sumaExercises)


console.log("7.  validar")
//console.log(explorers[0].missions.frontend.exercisesFinished)
const frontExercises = explorers.some((explorer) => explorer.missions.frontend.exercisesFinished === true)
console.log(frontExercises)

console.log("8. Obtener isFinished del onboarding como true")
const onboardingTrue = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true)
console.log(onboardingTrue)