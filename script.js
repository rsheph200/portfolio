document.addEventListener('DOMContentLoaded', () => {
    // Select all images with the class 'switch-hue'
    const images = document.querySelectorAll('.switch-hue');

    // Iterate over each selected image
    images.forEach(image => {
        // Initialize a variable to keep track of the current hue rotation for each image
        let hueRotate = 0;

        // Add an event listener to each image element for the click event
        image.addEventListener('click', () => {
            // Increment the hue rotation by 60 degrees (or any other value you prefer)
            hueRotate += 60;

            // Apply the CSS filter with the updated hue rotation
            image.style.filter = `hue-rotate(${hueRotate}deg)`;
        });
    });
});


// Function to apply the current theme
function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      document.getElementById('logo').src = './Assets/logo-dark.png';
    } else {
      document.body.classList.remove('dark-mode');
      document.getElementById('logo').src = './Assets/logo-light.png';
    }
  }
  
  // Function to toggle the theme and save to localStorage
  function toggleTheme() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    const newTheme = isDarkMode ? 'light' : 'dark';
    
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }
  
  // Get the saved theme from localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
  
  // Add an event listener to the toggle button
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  
  
