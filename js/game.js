import { projects } from "./projectCreator.js";
import { companies } from "./companyCreator.js";

export class Game {
    constructor() {
        this.money = 0;
        this.competitionOn = 0;
        this.governmentOn = 0;
        this.MPS = 0;
        this.lastUpdate = 0;
        this.unlockedTypes = [];

        this.govElement = document.getElementById("government");
        this.compElement = document.getElementById("competition");
        this.chartUpdate = 0;

        projects.forEach((project) => {
            project.game = this;
        });

        this.companies = companies;
        this.createCompanyPieChart();

        this.update();
    }

 

    async showProject(id) {
        // Wait 2 seconds
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // Show the project element
        document.getElementById(id).style.display = "";
    }

    updateMoney(seconds) {
        this.money += this.MPS * seconds;

        this.companies.forEach((company) => {
            company.updateValues(seconds);
        })
        
        let moneyElement = document.getElementById("moneyDisplay");
        moneyElement.innerHTML = Math.round(this.money);
    }



    createCompanyPieChart() {
        const ctx = document.getElementById('companyPieChart').getContext('2d');

        const companyNames = this.companies.map(company => company.name);
        const companySizes = this.companies.map(company => company.size);

        this.chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: companyNames,
                datasets: [{
                    data: companySizes,
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#4BC0C0',
                        '#9966FF',
                        '#FF9F40'
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: true,
                        text: 'Company Sizes'
                    }
                }
            }
        });
    }

    updateChart() {
        // this.chart.data.labels.pop();
        // this.chart.data.datasets.forEach((dataset) => {
        //     dataset.data.pop();
        // });
        // this.chart.update();

        const companyNames = this.companies.map(company => company.name);
        const companySizes = this.companies.map(company => company.size);

        this.chart.data.labels = companyNames;
        //console.log(this.chart.data.datasets)
        this.chart.data.datasets = [{
            data: companySizes,
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40'
            ]
        }];
        this.chart.update("none");
    }

    update(currentTime = 0) {
        



        let ticks = (currentTime - this.lastUpdate) / 1000;
        
        this.updateMoney(ticks);
        if ((currentTime - this.chartUpdate) > 100) {
            this.updateChart();
            this.chartUpdate = currentTime;
        }
        // check if competition / goverment are on
        // necessary to maintain state after refresh
        this.govElement.style.display = this.governmentOn ? "" : "none";
        this.compElement.style.display = this.competitionOn ? "" : "none";

        companies.forEach((company) => {
            document.getElementById(company.name).style.display = "";
        })

        this.lastUpdate = currentTime;
        requestAnimationFrame((time) => this.update(time));
    }
}