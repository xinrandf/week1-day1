// contact page 
// Show/hide input boxes based on select menu

document.addEventListener('DOMContentLoaded', function() {
  var select = document.getElementById('contact_method');
  var emailBox = document.getElementById('email-box');
  var phoneBox = document.getElementById('phone-box');

  select.addEventListener('change', function() {
    // Hide all boxes first
    emailBox.style.display = 'none';
    phoneBox.style.display = 'none';

    if (select.value === 'email') {
      emailBox.style.display = 'block';
    } else if (select.value === 'phone') {
      phoneBox.style.display = 'block';
    }
    // If 'Select One' is chosen, none are shown
  });
});
