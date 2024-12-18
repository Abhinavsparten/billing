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


countryDropdown.addEventListener('change', function() {
    const selectedCountry = this.value;
    
 
    stateDropdown.innerHTML = '<option value="">Select State</option>';
    
    
    if (selectedCountry) {
        const states = statesData[selectedCountry];
        
        if (states) {
            // map() to create the option elements
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

