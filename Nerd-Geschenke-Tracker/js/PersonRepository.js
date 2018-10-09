function PersonRepository() {
    var personen = {
        person1: {
            name: "Robert",
            hatGezahlt: true
        },
        person2: {
            name: "Jan",
            hatGezahlt: true
        }
    }

    this.hatGezahlt = function (personId) {
        var person = personen[personId]
        return person.hatGezahlt === true
    }

    this.zahle = function(personId) {
        var person = personen[personId]
        person.hatGezahlt = true;
    }
}