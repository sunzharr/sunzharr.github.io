$('.burger, .overlay').click(function () {
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('body').toggleClass('overflow');
});

document.addEventListener('DOMContentLoaded', function() {
    var image = document.getElementById('rickroll');
    image.addEventListener('click', function() {
      var audio = new Audio('audio/rickroll.mp3');
      audio.play();
    });
  });

document.querySelector('form').addEventListener('submit', function (event) {
    var nameInput = document.querySelector('#exampleFormControlInput1');
    var emailInput = document.querySelector('#exampleFormControlInput1');
    var messageInput = document.querySelector('#exampleFormControlTextarea1');
    var errorMessage = document.getElementById('error-message');

    var isValid = true;

    if (nameInput.value === '') {
        nameInput.style.borderColor = 'red';
        isValid = false;
    } else {
        nameInput.style.borderColor = '';
    }

    if (emailInput.value === '') {
        emailInput.style.borderColor = 'red';
        isValid = false;
    } else {
        emailInput.style.borderColor = '';
    }

    if (messageInput.value === '') {
        messageInput.style.borderColor = 'red';
        isValid = false;
    } else {
        messageInput.style.borderColor = '';
    }
    if (!isValid) {
        event.preventDefault();
        alert("Please fill in all required fields.");
        return;
    }

    alert("Form submitted successfully!");

    updateCartCount();
});
function validateForm(event) {
    event.preventDefault();
    const formElements = document.forms["form"].elements;

    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];

        if (element.required && element.value.trim() === "") {
            alert("Please fill in all the required fields.");
            return false;
        }

        switch (element.type) {
            case "email":
                const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (element.value !== "" && !emailRegex.test(element.value)) {
                    alert("Please enter a valid email address.");
                    return false;
                }
                break;

            case "phone":
                const phoneRegex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
                if (element.value !== "" && !phoneRegex.test(element.value)) {
                    alert("Please enter a valid email address.");
                    return false;
                }
                break;
            case ("name"):
                const nameRegex = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;
                if (element.value !== "" && !nameRegex.test(element.value)) {
                    alert("Please enter a valid email address.");
                    return false;
                }
                break;
            default:
                break;
        }
    }

    return true;
}
// ^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$
// ^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$
// /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/

inputElements.forEach(function(input) {
    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);
    input.addEventListener("keypress", handleKeyPress);
    input.addEventListener("change", handleChange);
    input.addEventListener("mouseenter", handleMouseEnter);
  });

  function validateForm() {
    const requiredInputs = form.querySelectorAll('input[required], textarea[required]');
    let hasError = false;

    requiredInputs.forEach(input => {
      if (input.value.trim() === "") {
        input.style.border = "2px solid red";
        input.addEventListener("input", removeError);

        const alertElement = document.createElement("div");
        alertElement.textContent = "Please fill in this field.";
        alertElement.style.color = "red";
        alertElement.style.fontSize = "14px";
        alertElement.style.marginTop = "5px";

        input.parentNode.insertBefore(alertElement, input.nextSibling);

        hasError = true;
      } else {
        input.style.border = "none";
      }
    });

    if (hasError) {
      alert("Please fill in all required fields.");
      form.reset();
    } else {
      alert("Form submitted successfully!");
    }
  }

  function removeError(event) {
    const input = event.target;
    input.style.border = "none";

    const alertElement = input.nextSibling;
    if (alertElement && alertElement.tagName === "DIV") {
      alertElement.parentNode.removeChild(alertElement);
    }

    input.removeEventListener("input", removeError);
  }

  function handleFocus(event) {
    const input = event.target;
    input.style.backgroundColor = "yellow";
  }
  
  function handleBlur(event) {
    const input = event.target;
    input.style.backgroundColor = "";
  }
  
  function handleKeyPress(event) {
    const input = event.target;
    if (event.key === "Enter") {
      input.style.backgroundColor = "lightgreen";
    }
  }
  
  function handleChange(event) {
    const input = event.target;
    const value = input.value;
    if (value.length < 5) {
      input.style.color = "red";
    } else {
      input.style.color = "";
    }
  }
  
  function handleMouseEnter(event) {
    const input = event.target;
    input.style.fontWeight = "bold";
  }


  

  
 