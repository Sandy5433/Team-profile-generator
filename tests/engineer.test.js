const Engineer = require('../lib/engineer')

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should set 'name', 'id', 'email', and 'github' when created", () => {
            const name = "Sandy";
            const id = 3;
            const email = "sandy@gmail.com";
            const github = "Sandy5433";
            const obj = new Engineer(name, id, email, github);
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual(github);
        });

        
    })
})