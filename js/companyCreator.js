import { Company } from "./structs/companies.js";

let tcompanies = []
let c1 = new Company("Stocksalmon", 100, ["chess"], "the best chess nerds", 1.005, 1.002, 0.99998)
tcompanies.push(c1);

let c2 = new Company("Pipichess", 200, ["chess"], "holy hell!", 1.01, 1.0001, 1.0000001)
tcompanies.push(c2);

export var companies = tcompanies;