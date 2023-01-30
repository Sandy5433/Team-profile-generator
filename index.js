const inquirer = require('inquirer');
const fs = require("fs");
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager')
const generateTemplate = require("./src/generateTemplate")
const employees = []; //newly created employee to be pushed into this array

function getName(employeeType, val){
    return `what is the ${employeeType}'s ${val}`
}
const commonQuestions = (empType) => {
    let data;
    data.push({
        type: "input",
        name: "name",
        message: getName(empType, "name")
    })
    data.push({
        type: "input",
        name: "id",
        message: getName(empType, "id")
    })
    data.push({
        type: "input",
        name: "email",
        message: getName(empType, "email")
    })
    return data;
 }
  



function generateHTML() {
    console.log(employees)

    const template = generateTemplate(employees)

    fs.writeFile("./dist/index.html", template, function() {
        console.log("HTML has been generated!")
    })
}



createManager();