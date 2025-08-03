// Dark Mode Toggle JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-switch');
    const theme = localStorage.getItem('theme');
    
    // Check for saved theme or respect user's system preference
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkModeToggle.checked = true;
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    
    // Toggle dark mode
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Add animation to cards when switching themes
    const cards = document.querySelectorAll('.card, .skill, .glassmorphism');
    
    darkModeToggle.addEventListener('change', function() {
        cards.forEach(card => {
            card.style.transition = 'all 0.5s ease';
            setTimeout(() => {
                card.style.transition = '';
            }, 500);
        });
    });
});
