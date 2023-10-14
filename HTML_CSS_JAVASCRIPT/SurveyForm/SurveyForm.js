function validateForm() {
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
    // Javascript reGex for Phone Number validation.
    var regPhone=/^[0]?[789]\d{9}$/;                        
    // Javascript reGex for Name validation
    var regName = /^[A-Za-z\s]+$/;   
    // Validation logic for each field (modify as needed)
    var firstName = document.forms["survey-form"]["firstName"].value;
    var lastName = document.forms["survey-form"]["lastName"].value;
    var dob = document.forms["survey-form"]["dob"].value;
    var mobile = document.forms["survey-form"]["mobile"].value;
    var country = document.forms["survey-form"]["country"].value;
    var genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
    var profession = document.forms["survey-form"]["profession"].value;
    var email = document.forms["survey-form"]["email"].value;
  
    if (firstName === "" || !regName.test(firstName)) {
      alert("First Name is required and enter alphabets only");
      // firstName.focus();
      return false;
    }
  
    if (lastName === "" || !regName.test(lastName)) {
      alert("Last Name is required and enter alphabets only.");
      return false;
    }
  
    if (dob === "") {
      alert("Date of Birth is required.");
      return false;
    }
  
    if (mobile === "" || !regPhone.test(mobile)) {
      alert("Mobile Number is required.");
      return false;
    }
  
    if (country === "Select a country") {
      alert("Please select a Country.");
      return false;
    }
  
    if (genderCheckboxes.length === 0 ) {
      alert("Please select at least one Gender.");
      return false;
    }
  
    if (profession === "") {
      alert("Profession is required.");
      return false;
    }
  
    if (email === "" || !regEmail.test(email)) {
      alert("Email is required and it must be valid email");
      return false;
    }
  
    // Display the submitted values in the popup
    const submittedValuesDiv = document.getElementById("submittedValues");
    submittedValuesDiv.innerHTML = "First Name: " + firstName + "<br>";
    submittedValuesDiv.innerHTML += "Last Name: " + lastName + "<br>";
    submittedValuesDiv.innerHTML += "Date of Birth: " + dob + "<br>";
    submittedValuesDiv.innerHTML += "Mobile Number: " + mobile + "<br>";
    submittedValuesDiv.innerHTML += "Country: " + country + "<br>";
    submittedValuesDiv.innerHTML += "Gender: ";
    genderCheckboxes.forEach((checkbox) => {
      submittedValuesDiv.innerHTML += checkbox.value + ", ";
    });
    submittedValuesDiv.innerHTML = submittedValuesDiv.innerHTML.slice(0, -2); // Remove the trailing comma
    submittedValuesDiv.innerHTML += "<br>";
    submittedValuesDiv.innerHTML += "Profession: " + profession + "<br>";
    submittedValuesDiv.innerHTML += "Email: " + email + "<br>";
  
    // Display the popup
    const popup = document.getElementById("popup");
    popup.style.display = "block";
  
    // closePopupAndResetForm();
    return false;
  }
  
  function resetForm() {
    document.forms["survey-form"].reset();
  }
  
  function closePopupAndResetForm() {
    const popup = document.getElementById("popup");
    const form = document.forms["survey-form"];
    form.reset();
    popup.style.display = "none";
  }
  