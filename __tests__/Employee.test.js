const Employee = require("../lib/Employee");

test("Able to create Employee object", () => {
    const employee1 = new Employee();
    expect(typeof(employee1)).toBe("object");
  });
  
  test("getRole() should return \"Employee\"", () => {
    const expectedValue = "Employee";
    const employee2 = new Employee("lindsay", 2, "linday@email.com");
    const actualValue = employee2.getRole();
    expect(actualValue).toBe(expectedValue);
  });

