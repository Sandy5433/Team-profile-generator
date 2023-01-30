const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        super(name, id, email)
        this.officeNumber = officeNumber
    }


    getRole() {
        return "Manager"
    }
}

module.exports = Manager;