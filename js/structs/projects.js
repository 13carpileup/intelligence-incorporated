export class Project {
    constructor(title, description, id, cost, bind, visible=0, game=null) {
        this.cost = cost;
        this.effect = bind;
        this.visible = visible;
        this.id = id;
        this.title = title;
        this.description = description; 
        this.game = null;

  
        this.showProject();
    }

    showProject() {
        var newProject = document.createElement("button");
        newProject.setAttribute("id", this.id);
        newProject.innerHTML = `<p class = "projectTitle">${this.title}</p><p class = "projectDescription">${this.description}</p>`;
        newProject.onclick = () => { this.do(); };
        newProject.setAttribute("class", "projectButton");
        newProject.style.display = this.visible ? "" : "none";
        console.log(this.visible);
        this.element = newProject;


        var element = document.getElementById("projects");
        element.appendChild(newProject, element.firstChild);
    }

    hideProject() {
        this.element.style.display = "none";
    }

    do() {
        this.effect();
        this.visible = 0;
        this.hideProject();
    }
}