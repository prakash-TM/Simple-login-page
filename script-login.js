var emailError;
var emailCheck;

function myFunction1() {
    let email = document.getElementById("email").value;

    if (email != "") {
        if (email == "17ec118@kpriet.ac.in") {
            emailCheck = "passed";
        } else {
            emailError = "Please Enter a Valid Email Id ";
        }

    } else {
        emailError = "Please Enter a Valid Email Id ";
    }
    document.getElementById("demo1").innerHTML = emailError;
}


var passError;
var passCheck;

function myFunction2() {

    let pass = document.getElementById("password").value;

    if (pass != "") {
        if (pass == "1234") {
            passCheck = "passed";
        } else {
            passError = "Enter a Valid Password";
        }
    } else {
        passError = "Enter a Valid Password";
    }
    document.getElementById("demo2").innerHTML = passError;
}

function op() {

    if ((emailCheck == "passed") && (passCheck == "passed")) {
        window.location.href = "./index1.html";

    } else {
        document.getElementById("demo3").innerHTML = "Enter a Valid Credentials!! "
    }
}