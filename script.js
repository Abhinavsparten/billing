// states datas
const statesData = {
    "unitedStates": [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
        "West Virginia", "Wisconsin", "Wyoming"
    ],
    "canada": [
        "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", 
        "Prince Edward Island", "Quebec", "Saskatchewan"
    ],
    "india": [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", 
        "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
        "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ]
};

const countryDropdown = document.getElementById('country');
const stateDropdown = document.getElementById('state');
document.getElementById('Form').reset();

countryDropdown.addEventListener('change', function() {
    const selectedCountry = this.value;
 
    stateDropdown.innerHTML = '<option value="">Select State</option>';
    
    
    if (selectedCountry) {
        const states = statesData[selectedCountry];
        
        if (states) {
            // to itrate
            const stateOptions = states.map(state => {
                const option = document.createElement('option');
                option.value = state;
                option.textContent = state;
                return option;
            });
            
            // to append
            stateDropdown.append(...stateOptions);
        }
    }
});
document.getElementById('Form').onsubmit = function (event) {
  event.preventDefault();  

  let isValid = true;

  // Reset error messages
  document.querySelectorAll('.error-message').forEach(span => span.textContent = '');

  const validateField = (element, errorMsg, condition) => {
      const errorSpan = element.nextElementSibling; 
      if (!condition) {
          errorSpan.textContent = errorMsg;
          isValid = false;
      }
  };

  // Validatation
  const cardNumber = document.getElementById('card-number');
  validateField(cardNumber, 'Card number must be 16 digits.', cardNumber.validity.valid);

  const cardholderName = document.getElementById('cardholder-name');
  validateField(cardholderName, 'Character limit is 2-14.', cardholderName.validity.valid);

  const expiry = document.getElementById('expiry');
  validateField(expiry, 'Expiry date must be in MM/YY format.', expiry.validity.valid);

  const cvv = document.getElementById('cvv');
  validateField(cvv, 'CVV must be exactly 3 digits.', cvv.validity.valid);

  const email = document.getElementById('email');
  validateField(email, 'Please enter a valid email address.', email.validity.valid);

  const address = document.getElementById('address');
  validateField(address, 'Address is required.', address.validity.valid);

  const city = document.getElementById('city');
  validateField(city, 'City is required.', city.validity.valid);

  const zip = document.getElementById('zip');
  validateField(zip, 'Zip code must be exactly 5 digits.', zip.validity.valid);

  // Validate country 
  const country = document.getElementById('country');
  const countryError = country.nextElementSibling;
  if (!country.value) {
      countryError.textContent = 'Please select a country.';
      isValid = false;
  }

  const state = document.getElementById('state');
  const stateError = state.nextElementSibling;
  if (!state.value) {
      stateError.textContent = 'Please select a state.';
      isValid = false;
  }

  // collect data into an object
  if (isValid) {
      const billData = {
          cardNumber: cardNumber.value,
          cardholderName: cardholderName.value,
          expiry: expiry.value,
          cvv: cvv.value,
          email: email.value,
          address: address.value,
          apartment: document.getElementById('apartment').value,
          city: city.value,
          state: state.value,
          zip: zip.value,
          country: country.value
      };

      console.log(billData);
      alert('Form submitted successfully!');
     
  }
};

