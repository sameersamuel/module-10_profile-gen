const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("Able to create Manager object", () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
  });
  
  test("getRole() should return \"Intern\"", () => {
    const expectedValue = "Intern";
    const intern = new Intern("leia", 1, "leia@email.com", "Barkley");
    const actualValue = intern.getRole();
    expect(actualValue).toBe(expectedValue);
  });