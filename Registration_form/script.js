function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (username === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Registration successful!\nUsername: " + username + "\nEmail: " + email);
        
    }
}
