function PersonList() {
    var personen = []
    this.add = function (newPerson) {
        personen[newPerson.name] = newPerson   
    }
    this.get = function (name) {
       return personen[name]
    }
}