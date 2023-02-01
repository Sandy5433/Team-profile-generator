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
             
    });

    describe("getName", () => {
        it("should return the name of the object", ()=>{
            const name = "Sandy";
            const id = 3;
            const email = "sandy@gmail.com";
            const obj = new Employee(name, id, email);
            expect(obj.getName()).toEqual(name);
        });
    })

    describe("getId", () => {
        it("should return the id of the object", ()=>{
            const name = "Sandy";
            const id = 3;
            const email = "sandy@gmail.com";
            const obj = new Employee(name, id, email);
            expect(obj.getId()).toEqual(id);
        });
    })

    describe("getEmail", () => {
        it("should return the email of the object", ()=>{
            const name = "Sandy";
            const id = 3;
            const email = "sandy@gmail.com";
            const obj = new Employee(name, id, email);
            expect(obj.getEmail()).toEqual(email);
        });
    })

    describe("getRole", () => {
        it("should return the value to Employee", ()=>{
            const obj = new Employee();
            expect(obj.getRole()).toEqual("Employee");
        });
    })
})