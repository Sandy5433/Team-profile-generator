const inquirer = require('inquirer')

const questions = [{
    type: "input",
    name: "name",
    message: "What is the team manager's name?"
},
{
    type: "input",
    name: "id",
    message: "What is the team manager's id?"
},
{
    type: "input",
    name: "email",
    message: "What is the team manager's email?"
},
{
    type: "input",
    name: "managerNum",
    message: "What is the team manager's office number?"
},
{   
    type: "list"
    name: "addMember"
    message: "Which type of team member would you like to add?"
    choices: ["Engineer", "intern", "I don't want to add anymore team members"]
}
]

const generateHTML = () =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team member profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href=""/>
</head>

<body>
  <header>My Team</header>
    <section>
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h5 class="card-title">Name</h5>
                <h6 class="card-subtitle mb-2 text-muted">Position</h6>
            </div>
            
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID</li>
              <li class="list-group-item">Email</li>
              <li class="list-group-item">Contact</li>
            </ul>
          </div>
    </section>

</body>`



inquirer.prompt(questions)