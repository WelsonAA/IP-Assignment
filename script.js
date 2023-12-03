document.addEventListener('DOMContentLoaded', function() {
    // Call the functions here

    countdownTimer();
    updateYear();
});
function changeFont() {
    const body = document.body;
    const currentFont = window.getComputedStyle(body).fontFamily;

    // Example fonts, add more as needed
    const fonts = [
        "Arial, sans-serif",
        "Georgia, serif",
        "'Courier New', monospace",
        "'Lucida Console', Monaco, monospace"
        // Add more fonts here
    ];

    // Randomly select a new font that is not the current font
    let newFont = currentFont;
    while (newFont === currentFont) {
        newFont = fonts[Math.floor(Math.random() * fonts.length)];
    }

    // Apply the new font to the entire body
    body.style.fontFamily = newFont;
}


function changeLogo() {
    const logo = document.querySelector('img');
    logo.src = 'engineering.png'; // Replace 'new_logo.png' with the path to the new logo image
}

function showSublist() {
    var secondSublist = document.getElementById('secondSublist');
    secondSublist.style.display = 'block';
}
function hideSublist() {
    var secondSublist = document.getElementById('secondSublist');
    secondSublist.style.display = 'none';
}
function showMoreText() {
    const items = document.getElementsByClassName("hidden-items")
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = '';
    }
}
function showLessText() {
    const items = document.getElementsByClassName("hidden-items")
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
    }
}

function navigateTo(page) {
    window.location.href = page;
}


function updateYear() {
    const yearElement = document.querySelector('.footer p');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `${currentYear} University Name. All rights reserved.`;
}


