var projects = [];

function displayUpdate() {
    // updates projects
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].purchased || !projects[i].active) {
            document.getElementById(projects[i].id).style.display = "none";
        }

        else if (projects[i].active) {
            document.getElementById(projects[i].id).style.display = "";
        }
    }

    // updates main 3 sections in 1st part of game
    if (governmentOn == 0){
        document.getElementById("government").style.display = "none";
    } 
    else {
        document.getElementById("government").style.display = "";    
    }   
    
    if (competitionOn == 0){
        document.getElementById("competition").style.display = "none";
    } 
    else {
        document.getElementById("competition").style.display = "";    
    }

    // updates money
    money += moneyPS;
    document.getElementById("moneyDisplay").innerHTML = Math.floor(money*100)/100;
}

function displayProjects(project) {
    var newProject = document.createElement("button");
    newProject.setAttribute("id", project.id);
    newProject.innerHTML = `<p class = "projectTitle">${project.title}</p><p class = "projectDescription">${project.description}</p>`;
    newProject.onclick = function(){project.effect()};
    newProject.setAttribute("class", "projectButton");

    var element = document.getElementById("projects");
    element.appendChild(newProject, element.firstChild);
}

function findProject(id) {
    console.log(projects.filter(project => project.id===id)[0].id);
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].id==id) return i;
    }
}

var project0 = {
    id: "p0",
    title: "Hire your first developer",
    description: "start your adventure",
    effect: function() {
        projects[findProject("p1")].active = true;
        moneyPS = 0.01

        this.purchased = true;
    },
    purchased: false,
    active: true,
}

projects.push(project0);


var project1 = {
    id: "p1",
    title: "Leak r&d secrets",
    description: "gain two gabillion dollars",
    effect: function() {
        competitionOn = 1;
        projects[findProject("p2")].active = true;
        money += 20000000;

        this.purchased = true;
    },
    purchased: false,
    active: false,
}

projects.push(project1);


var project2 = {
    id: "p2",
    title: "Commit a crime",
    description: "gain three gabillion dollars",
    effect: function() {
        governmentOn = 1;
        money += 300000000;

        this.purchased = true;
    },
    purchased: false,
    active: false,
}

projects.push(project2);

for (var i = 0; i < projects.length; i++) {
    displayProjects(projects[i]);
}



window.setInterval(function(){
    displayUpdate();
})

