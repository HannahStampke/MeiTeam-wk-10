const Engineer = require("../lib/Engineer");

// tests for the Engineer constructor
describe("Engineer", () => {
  // test for the initialization of the engineer object
  describe("Initialization", () => {
    it("should create an object with a name, id, email and github if provided valid arguments", () => {
      const engineer = new Engineer(
        "Herman Oopla",
        "Hermy",
        "Hoopla@email.com",
        "Hermy69"
      );

      expect(engineer.name).toEqual("Herman Oopla");
      expect(engineer.id).toEqual("Hermy");
      expect(engineer.email).toEqual("Hoopla@email.com");
      expect(engineer.github).toEqual("Hermy69");
    });
  });

    // test for the getGithub method
    describe("getGithub", () => {
        it("should return the GitHub username of the employee", () => {
            const engineer = new Engineer(
                "Herman Oopla",
                "Hermy",
                "Hoopla@email.com",
                "Hermy69"
              );
    
          expect(engineer.getGithub()).toEqual("Hermy69");
        });
      });
    
      // test for the getRole method
      describe("getRole", () => {
        it("should return the GitHub username of the employee", () => {
            const engineer = new Engineer(
                "Herman Oopla",
                "Hermy",
                "Hoopla@email.com",
                "Hermy69"
              );
    
          expect(engineer.getRole()).toEqual("Engineer");
        });
      });
});