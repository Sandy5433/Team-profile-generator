const Employee = require('../lib/employee')

describe("Employee", () => {
    describe("Initialization", () => {
        it("should set 'name', 'id', and 'email' when created", () => {
            const name = "Sandy";
            const id = 3;
            const email = "sandy@gmail.com";
            const obj = new Employee(name, id, email);
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        });

        
    })
})