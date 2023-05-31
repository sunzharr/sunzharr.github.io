$('.burger, .overlay').click(function () {
  $('.burger').toggleClass('clicked');
  $('.overlay').toggleClass('show');
  $('nav').toggleClass('show');
  $('body').toggleClass('overflow');
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


//корзинка
function updateCardCount() {
  let cardCountElement = document.getElementById('card-count');
  let cardItems = document.querySelectorAll('.quantity-input');
  let itemCount = 0;

  cardItems.forEach(function (item) {
      itemCount += parseInt(item.value);
  });

  cardCountElement.innerText = '(' + itemCount + ')';
}

updateCartCount();
});