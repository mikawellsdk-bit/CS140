
const form = document.getElementById("membershipForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("personname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const country = document.getElementById("Countries").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all required fields.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }

    const formData = {
        name: name,
        email: email,
        password: password,
        country: country
    };

    console.log(formData);

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "submit.json", true);

    xhr.onload = function() {

        if (xhr.status === 200) {

            const response = JSON.parse(xhr.responseText);

            document.getElementById("responseMessage").textContent = response.message;

            alert("Your form has been submitted!");

            form.reset();

        } else {
            alert("There was an error submitting your form.");
        }
    };

    xhr.send();

});
