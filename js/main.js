const aside = document.getElementById('aside-section');
const toggleButton = document.getElementById('toggle-aside');
const themeToggleButton = document.getElementById('toggle-theme');

function applyTheme(theme) {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    document.querySelector('header').classList.toggle('dark-theme', theme === 'dark');
    document.querySelector('nav').classList.toggle('dark-theme', theme === 'dark');
    document.querySelector('aside').classList.toggle('dark-theme', theme === 'dark');
    document.querySelector('section').classList.toggle('dark-theme', theme === 'dark');
}

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// If the theme toggle exists on the page, initialize and wire it
if (themeToggleButton) {
    themeToggleButton.checked = savedTheme === 'dark';
    themeToggleButton.addEventListener('change', () => {
        const newTheme = themeToggleButton.checked ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Wire the aside toggle only if both elements exist
if (toggleButton && aside) {
    toggleButton.addEventListener('click', () => {
        aside.classList.toggle('open');
    });
}