// Retrieve theme toggle elements
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleBtn = document.getElementById('theme-toggle');

function toggleTheme() {
    if (themeToggleDarkIcon && themeToggleLightIcon) {
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');
    }

    const isDarkMode = document.documentElement.classList.toggle('dark');
    localStorage.setItem('color-theme', isDarkMode ? 'dark' : 'light');
}

// Event listener for theme toggle button
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
}

// Check if dark mode preference is stored in local storage
const storedColorTheme = localStorage.getItem('color-theme');

if (storedColorTheme === 'dark') {
    if (themeToggleDarkIcon && themeToggleLightIcon) {
        themeToggleLightIcon.classList.remove('hidden');
        themeToggleDarkIcon.classList.add('hidden');
    }
    document.documentElement.classList.add('dark');
} else if (!storedColorTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    if (themeToggleDarkIcon && themeToggleLightIcon) {
        themeToggleLightIcon.classList.remove('hidden');
        themeToggleDarkIcon.classList.add('hidden');
    }
    document.documentElement.classList.add('dark');
} else {
    if (themeToggleDarkIcon && themeToggleLightIcon) {
        themeToggleDarkIcon.classList.remove('hidden');
        themeToggleLightIcon.classList.add('hidden');
    }
    document.documentElement.classList.remove('dark');
}
 