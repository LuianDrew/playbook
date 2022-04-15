const nuevoObjeto = {}
console.log(nuevoObjeto)

const explorer = {
    nombre: "Luian",
    apellido: "Ortiz",
    perfil: "Backend",
    pasatiempo: "Cocinar"
}
console.log(explorer)

const persona = {
    nombre: "Luian",
    perfil: "Backend",
    lenguajes: {
        backend: "nodejs",
        frontend: "vuejs"
    },
    gustos: [
        "Musica",
        "Cocinar",
        "Aprender"
    ]
}
console.log(persona)

const perro = {
    nombre: "Scar",
    edad: 6,
    raza: "Husky Siberiano",

    comer: function(){
        console.log(`${this.nombre} esta comiendo`)
    },
    dormir: function(){
        console.log(`${this.nombre} esta durmiendo`)
    }
}
console.log(perro)
perro.comer()

const otroPerro = {
    nombre: "Nala",
    comer: function(comida){
        console.log(`${this.nombre} esta comiendo ${comida}`)
    }
}
console.log(otroPerro)
otroPerro.comer("pollito")
