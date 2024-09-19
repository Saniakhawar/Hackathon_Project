// Select the button and skills section
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

// Check if both elements exist
if (toggleSkillsBtn && skillsSection) {
    // Add click event listener to the button
    toggleSkillsBtn.addEventListener('click', () => {
        // Toggle the display of the skills section
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block'; // Show section
            toggleSkillsBtn.textContent = 'Hide Skills'; // Update button text
        } else {
            skillsSection.style.display = 'none'; // Hide section
            toggleSkillsBtn.textContent = 'Show Skills'; // Update button text
        }
    });
}
