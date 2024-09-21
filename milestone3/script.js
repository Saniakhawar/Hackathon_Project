var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Type assertion
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillElement = document.getElementById('skill');
    var dateElement = document.getElementById('date');
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement && dateElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var date = dateElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skill = skillElement.value;
        var profilePicturefile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : "";
        var resumeOutput = "\n          <fieldset>\n            <legend>Generated Resume</legend>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n            <p><strong>Name:</strong> ").concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n            <p><strong>Date of Birth:</strong> ").concat(date, "</p>\n            <h3>Education:</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience:</h3>\n            <p>").concat(experience, "</p>\n            <h3 id=\"skillsHeader\" style=\"cursor:pointer;\">Skills (Click to show/hide):</h3>\n            <p id=\"skills\" style=\"display:none;\">").concat(skill, "</p>\n          </fieldset>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            // Add toggle functionality for skills section
            var skillsHeader = document.getElementById('skillsHeader');
            var skillsSection_1 = document.getElementById('skills');
            if (skillsHeader && skillsSection_1) {
                skillsHeader.addEventListener('click', function () {
                    skillsSection_1.style.display = skillsSection_1.style.display === 'none' ? 'block' : 'none';
                });
            }
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more inputs are missing');
    }
});
