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
    let data = [];
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
  

function createManager () {
    inquirer.prompt([
        ...commonQuestions("team manager"),
        {
            type: "input",
            name: "managerNum",
            message: "What is the team manager's office number?"
        }
    ])
        .then(answers => {
            const newManager = new Manager(answers.name, answers.id, answers.email, answers.managerNum);
            console.log(newManager);
            employees.push(newManager);

            addMember();
        })
}

function createEngineer() {
    inquirer.prompt([
       ...commonQuestions("engineer"),
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the team engineer's github?"
        }
    ])
        .then(answers => {
            const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.engineerGithub);

            employees.push(newEngineer);

            addMember();
        })
}

function createIntern() {
    inquirer.prompt([
        ...commonQuestions("intern"),
        {
            type: "input",
            name: "internSchool",
            message: "What is the team intern's school?"
        }
    ])
        .then(answers => {
            const newIntern = new Intern(answers.name, answers.id, answers.email, answers.internSchool);

            employees.push(newIntern);

            addMember();
        })
}

function addMember() {
    inquirer.prompt([
        {   
            type: "list",
            name: "addMember",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
        }
    ])
    .then(answer => {
        if(answer.addMember == "Engineer") {
            createEngineer();
        } else if (answer.addMember == "Intern") {
            createIntern();
        } else {
            generateHTML();
        }
    })
}

function generateHTML() {
    console.log(employees)

    const template = generateTemplate(employees)

    fs.writeFile("./dist/index.html", template, function() {
        console.log("HTML has been generated!")
    })
}

createManager();
