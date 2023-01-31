const Employee = require('../lib/employee')

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'string' property when called with the 'new' keyword", () => {
            const obj = new Employee();
            expect("string" in obj).toEqual(true);
        })
    })
})