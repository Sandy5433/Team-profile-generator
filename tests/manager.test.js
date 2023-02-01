const Manager = require('../lib/manager')

describe("Manager", () => {
    describe("Initialization", () => {
        it("should set 'name', 'id', 'email', and 'number' when created", () => {
            const name = "Sandy";
            const id = 3;
            const email = "sandy@gmail.com";
            const number = "12345678";
            const obj = new Manager(name, id, email, number);
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(number);
        });

        
    })

    describe("getRole", () => {
        it("should return the value to Manager", ()=>{
            const obj = new Manager();
            expect(obj.getRole()).toEqual("Manager");
        });
    })
})