var projects = [];

function displayUpdate() {
    if (governmentOn == 0){
        document.getElementById("government").style.display="none";
        } else {
        document.getElementById("government").style.display="";    
    }   
    
    if (competitionOn == 0){
        document.getElementById("competition").style.display="none";
        } else {
        document.getElementById("competition").style.display="";    
    }    
}

function displayProjects(project) {
    var newProject = document.createElement("button");
    newProject.setAttribute("id", project.id);
    newProject.innerHTML = project.title;
    newProject.onclick = function(){project.effect()};
    newProject.setAttribute("class", "projectButton");

    var element = document.getElementById("projects");
    element.appendChild(newProject, element.firstChild);
}

var project1 = {
    id: "p1",
    title: "Leak r&d secrets",
    effect: function() {
        competitionOn = 1;

        displayUpdate();
    }
}

projects.push(project1);


var project2 = {
    id: "p2",
    title: "Commit a crime",
    effect: function() {
        governmentOn = 1;

        displayUpdate();
    }
}

projects.push(project2);

for (var i = 0; i < projects.length; i++) {
    displayProjects(projects[i]);
}

displayUpdate()

