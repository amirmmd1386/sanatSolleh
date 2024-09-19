var map = L.map('map').setView([35.6892, 51.3890], 13); // مختصات تهران

// افزودن لایه نقشه
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
