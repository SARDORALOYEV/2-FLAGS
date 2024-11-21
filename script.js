const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Sahna yuklanganda dark mode ni yoqish
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

// Tugma bosilganda dark mode ni o'zgartirish
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Dark mode holatini saqlash
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});