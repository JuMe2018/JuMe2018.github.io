describe("PersonList Test", function() {
    it("Wenn ich eine Person hinzu füge bekomme ich sie auch wieder", function() {
        var personList = new PersonList();

        personList.add({name: "Robert", hatGezahlt: false});
        var robert = personList.get("Robert");

        expect(robert).toEqual({name: "Robert", hatGezahlt: false});
    });

    it("Wenn ich mehrere Personen hinzufüge bekomme ich anhand des Names die richtige Person wieder", function() {
        var personList = new PersonList();

        personList.add({name: "Robert", hatGezahlt: false});
        personList.add({name: "Jan", hatGezahlt: false});
        var robert = personList.get("Robert");

        expect(robert).toEqual({name: "Robert", hatGezahlt: false});
    });
    
      
  });
