import { Project } from './structs/projects.js'

let tProjects = [];

let p1 = new Project("Accept VC Funding", "Start your adventure...", "start", 1, 
function() {
    this.game.money = 1000000;
    this.game.showProject("next")
}, 1);
tProjects.push(p1);

let p2 = new Project("Hire your first developer", "You'll need it...", "next", 1, 
    function() {
        this.game.MPS = -100;
        this.game.competitionOn = 1;
        this.game.unlockedTypes.push("chess");
        //this.game.governmentOn = 1;
    });
tProjects.push(p2);

export var projects = tProjects 