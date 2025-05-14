function changeHeading() {
  document.getElementById("heading").textContent = "Changed Heading....!!";
}

document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form Submitted...!!");
  });

document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let nameError = document.getElementById("nameErr");
    let emailError = document.getElementById("emailErr");

    nameError.textContent = "";
    emailError.textContent = "";
    let valid = true;
    if (valid) {
      alert("Form Submitted Succesfully...");
    }

    if (name.trim() === "") {
      nameError.textContent = "Name is required";
      valid = false;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      emailError.textContent = "Enter a valid email";
      valid = false;
    }
  });
