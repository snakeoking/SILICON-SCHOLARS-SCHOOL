// Newsletter Popup Logic
window.onload = function() {
    setTimeout(function() {
        document.getElementById('newsletter-popup').style.display = 'block';
    }, 3000); // Show popup after 3 seconds
}

function closePopup() {
    document.getElementById('newsletter-popup').style.display = 'none';
}
