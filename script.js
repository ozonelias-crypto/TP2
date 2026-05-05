function changeText() {
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
}

function changeColor() {
    document.getElementById("demo").style.color = "red";
}

function resetColorAndText() {
    document.getElementById("demo").style.color = "black";
    document.getElementById("demo").innerHTML = "demo";
}

function LoginCheck() {
    if (document.getElementById("username").value == "admin" && document.getElementById("password").value == "1234") {
        alert("Login successful!");
    } else if (document.getElementById("username").value == "" || document.getElementById("password").value == "") {
        alert("Please enter both username and password.");
    } else {
        alert("Invalid username or password.");
    }
}