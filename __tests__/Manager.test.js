const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("Able to create Manager object", () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
  });
  
  test("getRole() should return \"Manager\"", () => {
    const expectedValue = "Manager";
    const manager = new Manager("vinnie", 1, "vinnie@email.com", "555-5555");
    const actualValue = manager.getRole();
    expect(actualValue).toBe(expectedValue);
  });