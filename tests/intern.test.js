const Intern = require('../lib/intern')

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should set 'name', 'id', 'email', and 'school' when created", () => {
            const name = "Sandy";
            const id = 3;
            const email = "sandy@gmail.com";
            const school = "USYD Bootcamp";
            const obj = new Intern(name, id, email, school);
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);
        });  
    })
    describe("getSchool", () => {
        it("should return the school of the object", ()=>{
            const name = "Sandy";
            const id = 3;
            const email = "sandy@gmail.com";
            const school = "USYD Bootcamp";
            const obj = new Intern(name, id, email, school);
            expect(obj.getSchool()).toEqual(school);
        });
    })
    describe("getRole", () => {
        it("should return the value to Intern", ()=>{
            const obj = new Intern();
            expect(obj.getRole()).toEqual("Intern");
        });
    })
})