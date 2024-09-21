// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resumeOutput');
var shareableLinkContainer = document.getElementById('shareable_link_container');
var shareableLinkElement = document.getElementById('shareable_link');
var downloadPdfButton = document.getElementById('download-pdf');
var profilePictureInput = document.getElementById('profilePicture');
// Handle form submission
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    // Save form data in localStorage with the username as the key
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Handle the profile picture
    var file = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            var imageDataUrl = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            // Generate the resume content dynamically
            var resumeHTML = "\n                <h2>Editable Resume</h2>\n                <h3>Personal Information</h3>\n                <img src=\"".concat(imageDataUrl, "\" alt=\"Profile Picture\" style=\"width:150px;height:150px;\"><br>\n                <h3>Education</h3>\n                <p><b>Name:</b> <span contenteditable=\"true\">").concat(name, "</span></p>\n                <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n                <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n                <h3>Profile Picture</h3>\n                <p contenteditable=\"true\">").concat(education, "</p>\n                <h3>Experience</h3>\n                <p contenteditable=\"true\">").concat(experience, "</p>\n                <h3>Skills</h3>\n                <p contenteditable=\"true\">").concat(skills, "</p>\n            ");
            // Display the generated resume
            resumeDisplayElement.innerHTML = resumeHTML;
        };
        reader.readAsDataURL(file); // This converts the image to a base64-encoded Data URL
    }
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as a PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
