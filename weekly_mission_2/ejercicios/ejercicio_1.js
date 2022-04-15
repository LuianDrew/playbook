const repo = {
    name: "LaunchX",
    author: "LuianOrtiz",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
}
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())
   
const issue = {
	title: "04 Live 1 Semana 2",
	repositoryNameAssociated: "MissionNodeJS",
	statuss: "Open",
	numberOfComments: 42,
	labels: ["Abierto", "Semana1"],
	author: "LuianOrtiz",
	dateCreated: "20/02/22",
	lastUpdated: "06/04/22",

	getTitleAndAuthor: function(){
		return `Issue Title: ${this.title}, repository by ${this.author}`
	},

	getGeneralInfo: function(){
		return `This Issue ${this.title} is ${this.statuss} and have ${this.numberOfComments} comments`
	}
}

console.log("Titulo del Issue: " + issue.title)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())

const pullrequest = {
	title: "Add new example",
	branchName: "developer",
	dateCreated: "13/04/22",
	statuss: "Aproved",
	repositoryNameAssociated: "MissionNodeJS",

	getStatus: function(){
		return this.statuss
	},

	getTitleAndAuthor: function(){
		return `Issue Title: ${this.title}, repository by ${repo.author}`
	}
}

console.log("Titulo del PR: " + pullrequest.title)
console.log("Estatus del PR: " +pullrequest.getStatus())
console.log(pullrequest.getTitleAndAuthor())
