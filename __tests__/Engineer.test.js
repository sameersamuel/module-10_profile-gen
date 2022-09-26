const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("Able to create Engineer object", () => {
    const engineer1 = new Engineer();
    expect(typeof(engineer1)).toBe("object");
  });
  
  test("getRole() should return \"Engineer\"", () => {
    const expectedValue = "Engineer";
    const engineer2 = new Engineer("sameer", 1, "sameer@email.com", "sameersamuel");
    const actualValue = engineer2.getRole();
    expect(actualValue).toBe(expectedValue);
  });