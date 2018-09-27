$(document).ready(function () {

    if (localStorage.person1 === undefined || localStorage.person1 === "nicht gezahlt") {
        localStorage.person1 = "nicht gezahlt"
        $("#person1").prop( "checked", false )
    } else {
        $("#person1").prop( "checked", true )
    }
    console.log(localStorage.person1);
    $("#person1").click(function () {
        console.log("Clicked: " + $("#label-person1").text());

        if (localStorage.person1 === "nicht gezahlt") {
            localStorage.person1 = "gezahlt"
            console.log(localStorage.person1);
        } else {
            localStorage.person1 = "nicht gezahlt"
            console.log(localStorage.person1);
        }
            
        
        
            
    });
});