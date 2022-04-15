const user = {
    user: "Luian",
    username: "LuianOrtiz",
    bio: "Software Student",
    nacimiento: "10/30/1997",
    ubicacion: "Mexico",
    website: "instagram.com/luian_ortiz_/",

    getNacimiento: function(){
        return this.nacimiento
    },

    getInformation: function(){
        return `usuario: ${this.user} bio: ${this.bio} ubicación: ${this.ubicacion}`
    }
}

console.log("usuario de twitter " + user.user)
console.log(`Fecha de nacimiento de ${user.user} : ` + user.getNacimiento())
console.log(user.getInformation())

const trending_topic = {
    
    categoria: "Gaming",
    hashtag: "Riot",
    tweets: "41,3 mil",
    
    getCategoria: function(){
        return this.categoria
    },

    getInformation: function(){
        return `Categoria   ${this.categoria}, hashtag #" ${this.hashtag}, tweets: ${this.tweets}`
    }
}
    
console.log(trending_topic)
console.log(`Categoria del trending topic ` + trending_topic.getCategoria())
console.log(trending_topic.getInformation())

const fb_user = {
    nombre: "Luian Ortiz",
    amigos: [
        {
            nombre: "Kenneth",
            amigosDesde: "6 meses",
        },
        {
            nombre: "Vania",
            amigosDesde: "3 años",
        }
    ],
    pasatiempos: ["comer", "programar", "dibujar", "pool y billar"],
    ubicacion: "Morelia",
    lugarOrigen: "Morelia",

    getNombresAmigos: function(){
        return this.amigos.forEach(amigo => console.log(amigo.nombre))
    },

    getPasatiempos: function(){
        return this.pasatiempos
    }

}
// retorna el nombre de los amigos en fb
console.log(`Amigos de ${fb_user.nombre} :`) 
fb_user.getNombresAmigos()
console.log("Pasatiempos: " + fb_user.getPasatiempos())

const fb_post = {
    descripcion: "Sisoy",
    comentarios: "14 mil",
    reacciones: [
        {
            megusta: 15,
            menencantat: 18,
            meenrisa: 30,
            meimporta: 400,
            meenoja: 125897,
            meentristese: 789123,
        }
    ],
    compartido: "18 mil veces",

    getReacciones: function(){
        return this.reacciones.forEach(reaccion => console.log(reaccion.megusta))
    },

    getCommentsAndShares: function(){
        return `Comentarios del post: ${this.comentarios} , ${this.compartido} veces compartido`
    }
}
console.log("Reacciones: " )
fb_post.getReacciones()
console.log(fb_post.getCommentsAndShares())