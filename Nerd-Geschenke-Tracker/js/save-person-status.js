$(document).ready(function () {

    if (localStorage.person1 === undefined || localStorage.person1 === "nicht gezahlt") {
        localStorage.person1 = "nicht gezahlt"
        $("#person1").prop("checked", false)
    } else {
        $("#person1").prop("checked", true)
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

    if (localStorage.person2 === undefined || localStorage.person2 === "nicht gezahlt") {
        localStorage.person2 = "nicht gezahlt"
        $("#person2").prop("checked", false)
    } else {
        $("#person2").prop("checked", true)
    }
    console.log(localStorage.person1);
    $("#person2").click(function () {
        console.log("Clicked: " + $("#label-person2").text());

        if (localStorage.person2 === "nicht gezahlt") {
            localStorage.person2 = "gezahlt"
            console.log(localStorage.person2);
        } else {
            localStorage.person2 = "nicht gezahlt"
            console.log(localStorage.person2);
        }
    });

    if (localStorage.person3 === undefined || localStorage.person3 === "nicht gezahlt") {
        localStorage.person3 = "nicht gezahlt"
        $("#person3").prop("checked", false)
    } else {
        $("#person3").prop("checked", true)
    }
    console.log(localStorage.person3);
    $("#person3").click(function () {
        console.log("Clicked: " + $("#label-person3").text());

        if (localStorage.person3 === "nicht gezahlt") {
            localStorage.person3 = "gezahlt"
            console.log(localStorage.person3);
        } else {
            localStorage.person3 = "nicht gezahlt"
            console.log(localStorage.person3);
        }
    });
});