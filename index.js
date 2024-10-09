document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    let errors = [];

    let userName = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // UserName validation
    if(userName.length < 3){
        errors.push("User name must be at least 3 characters long.");
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        errors.push("Please enter a valid email.");
    }

    // Password validation
    if(password.length < 6){
        errors.push("Password must be at least 6 characters long.");
    }

    // Display errors or success message
    if(errors.length > 0){
        document.getElementById("error").innerHTML = errors.join('<br>');
    } else {
        document.getElementById("error").innerHTML = "Form submitted successfully!";
    }
});
