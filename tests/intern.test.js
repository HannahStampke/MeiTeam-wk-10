const Intern = require("../lib/Intern");

// tests for the Intern constructor
describe("Intern", () => {
  // test for the initialization of the intern object
  describe("Initialization", () => {
    it("should create an object with a name, id, email and School if provided valid arguments", () => {
      const intern = new Intern(
        "Smerg The Berg",
        "Smergy",
        "Smergberg@email.com",
        "Saint Bergasmerd"
      );

      expect(intern.name).toEqual("Smerg The Berg");
      expect(intern.id).toEqual("Smergy");
      expect(intern.email).toEqual("Smergberg@email.com");
      expect(intern.school).toEqual("Saint Bergasmerd");
    });
  });

    // test for the getSchool method
    describe("getSchool", () => {
        it("should return the GitHub username of the employee", () => {
            const intern = new Intern(
                "Smerg The Berg",
                "Smergy",
                "Smergberg@email.com",
                "Saint Bergasmerd"
              );
    
          expect(intern.getSchool()).toEqual("Saint Bergasmerd");
        });
      });
    
      // test for the getRole method
      describe("getRole", () => {
        it("should return the GitHub username of the employee", () => {
            const intern = new Intern(
                "Smerg The Berg",
                "Smergy",
                "Smergberg@email.com",
                "Saint Bergasmerd"
              );
    
          expect(intern.getRole()).toEqual("Intern");
        });
      });
});