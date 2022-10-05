const Manager = require("../lib/Manager");

// tests for the Manager constructor
describe("Manager", () => {
  // test for the initialization of the Manager object
  describe("Initialization", () => {
    it("should create an object with a name, id, email and workNumber if provided valid arguments", () => {
      const manager = new Manager(
        "Hayzuus",
        "Hayzy",
        "Hayzuus@email.com",
        "420"
      );

      expect(manager.name).toEqual("Hayzuus");
      expect(manager.id).toEqual("Hayzy");
      expect(manager.email).toEqual("Hayzuus@email.com");
      expect(manager.workNumber).toEqual("420");
    });
  });
    
      // test for the getRole method
      describe("getRole", () => {
        it("should return the GitHub username of the employee", () => {
            const manager = new Manager(
                "Hayzuus",
                "Hayzy",
                "Hazuus@email.com",
                "420"
              );
    
          expect(manager.getRole()).toEqual("Manager");
        });
      });
});