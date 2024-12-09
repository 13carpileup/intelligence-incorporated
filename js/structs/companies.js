export class Company {
    constructor(name, size, types, description, growthRate, growthRateSquared, growthRateSquaredSquared) {
        this.name = name;
        this.size = size;
        this.types = types; // ["chess" "image", "llm"]
        this.description = description
        this.visible = 0;
        this.growthRate = growthRate;
        this.growthRateSquared = growthRateSquared;
        this.growthRateSquaredSquared = growthRateSquaredSquared;

        this.showCompany();
    }

    showCompany() {
        var newProject = document.createElement("div");
        newProject.setAttribute("id", this.name);
        newProject.innerHTML = `<p class = "projectTitle">${this.name}</p><p class = "projectDescription">${this.description}</p>`;
        newProject.setAttribute("class", "projectButton");
        newProject.style.display = this.visible ? "" : "none";
        console.log(this.visible);
        this.element = newProject;

        var element = document.getElementById("competitors");
        console.log(element);
        element.appendChild(newProject, element.firstChild);
    }

    updateValues(seconds) {
        this.size *= (this.growthRate) ** (seconds);
        this.growthRate *= (this.growthRateSquared) ** (seconds);
        this.growthRateSquared *= (this.growthRateSquaredSquared) ** (seconds);
    }
}