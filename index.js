const inquirer = require('inquirer')

const questions = [{
    type: "input",
    name: "managerName",
    message: "What is the team manager's name?"
},
{
    type: "input",
    name: "managerId",
    message: "What is the team manager's id?"
},
{
    type: "input",
    name: "managerEmail",
    message: "What is the team manager's email?"
},
{
    type: "input",
    name: "managerNum",
    message: "What is the team manager's office number?"
},
{   
    type: "choices"
    message: "Which type of team member would you like to add?"
}
]

inquirer.prompt(questions)