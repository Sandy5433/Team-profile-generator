function generateTemplate (employees) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team member profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css"/>
    </head>
    
    <body>
      <header>My Team</header>
        <section>
            ${

                employees.map(employee => {
                    return `<div class="card" style="width: 18rem;">
                    <div class="card-header">
                        <h5 class="card-title">${employee.getName()}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                    </div>
                    
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID: ${employee.getId()}</li>
                      <li class="list-group-item">Email: ${employee.getEmail()}</li>
                      ${generateUnique(employee)}
                    </ul>
                  </div>`
                })
            }
        </section>
    
    </body>`
}

function generateUnique (employee) {
    if(employee.getRole() == "Manager") {
        return `<li class="list-group-item">Office Number: ${employee.officeNumber}</li>`
    }

    if(employee.getRole() == "Engineer") {
        return `<li class="list-group-item">Github: ${employee.github}</li>`
    }

    if(employee.getRole() == "Intern") {
        return `<li class="list-group-item">School: ${employee.school}</li>`
    }

}

module.exports = generateTemplate;