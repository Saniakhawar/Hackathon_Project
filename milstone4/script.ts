document.getElementById('resumeform')?.addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Type assertion
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillElement = document.getElementById('skill') as HTMLInputElement;
    const dateElement = document.getElementById('date') as HTMLInputElement;
  
     if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement && dateElement) {
  
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const date = dateElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skill = skillElement.value;
  
        const profilePicturefile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : "";
  
        const resumeOutput =
         `
          <fieldset>
            <legend>Editable Resume</legend>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
            <p><strong>Name:</strong><span contenteditable"true">${name}</span></p>
            <p><strong>Email:</strong><span contenteditable"true"> ${email}</span></p>
            <p><strong>Phone Number:</strong><span contenteditable"true"> ${phone}</span></p>
            <p><strong>Date of Birth:</strong><span contenteditable"true"> ${date}</span></p>
            <h3>Education:</h3>
            <p contenteditable"true">${education}</p>
            <h3>Experience:</h3>
            <p contenteditable"true">${experience}</p>
            <h3 id="skillsHeader" style="cursor:pointer;">Skills (Click to show/hide):</h3>
            <p id="skills" style="display:none;">${skill}</p>
          </fieldset>
        `;
  
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
  
            // Add toggle functionality for skills section
            const skillsHeader = document.getElementById('skillsHeader');
            const skillsSection = document.getElementById('skills');
            
        if (skillsHeader && skillsSection)
            {
             skillsHeader.addEventListener('click', () =>{
             skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
             });
            }
        } else {
                console.error('The resume output element is missing');
               }
    } else{
             console.error('One or more inputs are missing');
          }
});
  