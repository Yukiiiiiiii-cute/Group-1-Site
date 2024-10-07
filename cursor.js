// script.js
document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('custom-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Show the custom cursor when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    cursor.style.width = '32px'; // Adjust based on your cursor size
    cursor.style.height = '32px'; // Adjust based on your cursor size
    cursor.style.backgroundImage = "url('custom-cursor.png')"; // Set your custom cursor image
    cursor.style.pointerEvents = 'none'; // Make sure it doesn't block mouse events
    document.body.appendChild(cursor);
});
