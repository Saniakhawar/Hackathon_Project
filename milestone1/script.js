// Select the button and skills section
var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
var skillsSection = document.getElementById('skills');
// Check if both elements exist
if (toggleSkillsBtn && skillsSection) {
    // Add click event listener to the button
    toggleSkillsBtn.addEventListener('click', function () {
        // Toggle the display of the skills section
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block'; // Show section
            toggleSkillsBtn.textContent = 'Hide Skills'; // Update button text
        }
        else {
            skillsSection.style.display = 'none'; // Hide section
            toggleSkillsBtn.textContent = 'Show Skills'; // Update button text
        }
    });
}
