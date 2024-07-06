var projects = [];

function displayUpdate() {
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].purchased || !projects[i].active) {
            document.getElementById(projects[i].id).style.display = "none";
            console.log("BRUH");
        }

        else if (projects[i].active) {
            document.getElementById(projects[i].id).style.display = "";
        }
    }

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

var project1 = {
    id: "p1",
    title: "Leak r&d secrets",
    description: "gain two gabillion dollars",
    effect: function() {
        competitionOn = 1;
        this.purchased = true;
        projects[1].active = true;

        displayUpdate();

    },
    purchased: false,
    active: true,
}

projects.push(project1);


var project2 = {
    id: "p2",
    title: "Commit a crime",
    description: "gain three gabillion dollars",
    effect: function() {
        governmentOn = 1;
        this.purchased = true;

        displayUpdate();
    },
    purchased: false,
    active: false,
}

projects.push(project2);

for (var i = 0; i < projects.length; i++) {
    displayProjects(projects[i]);
}

displayUpdate()

