class Repositorio{
    constructor(name, author, lenguage, numberOfCommits, stars, forks, issues_open, issues_close){
        this.name = name
        this.author = author
        this.lenguage = lenguage
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this.forks = forks
        this.issues_open = issues_open
        this.issues_close = issues_close
    }

    get getTotalIssues(){
        return this.issues_open+this.issues_close
    }

    get getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
    }

}

const repo = new Repositorio("NodeJS","LuianOrtiz", "JavaScript", 10, 2,43,1,0)
console.log(repo)
console.log(repo.getTotalIssues)
console.log(repo.getGeneralInfo)